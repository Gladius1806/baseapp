import sdk from '@farcaster/miniapp-sdk'
import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { safeReadySignal } from '../../lib/farcaster'
import { MiniAppContext, type MiniAppState } from './miniAppContext'

export function MiniAppProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<MiniAppState>({
    isInMiniApp: false,
    isInitialized: false,
    context: null,
    walletAvailable: false,
    error: null,
  })

  useEffect(() => {
    let active = true

    const initializeMiniApp = async () => {
      try {
        const isInMiniApp = await sdk.isInMiniApp()
        const context = isInMiniApp ? await sdk.context : null
        const ethereumProvider = isInMiniApp ? await sdk.wallet.getEthereumProvider() : undefined

        await safeReadySignal()

        if (!active) return
        setState({
          isInMiniApp,
          isInitialized: true,
          context,
          walletAvailable: Boolean(ethereumProvider),
          error: null,
        })
      } catch (error) {
        if (!active) return
        const message = error instanceof Error ? error.message : 'Mini app initialize failed'
        setState((prev) => ({
          ...prev,
          isInitialized: true,
          error: message,
        }))
      }
    }

    void initializeMiniApp()

    return () => {
      active = false
    }
  }, [])

  const contextValue = useMemo(() => state, [state])

  return <MiniAppContext.Provider value={contextValue}>{children}</MiniAppContext.Provider>
}
