import sdk from '@farcaster/miniapp-sdk'
import { createContext } from 'react'

export type MiniAppState = {
  isInMiniApp: boolean
  isInitialized: boolean
  context: Awaited<typeof sdk.context> | null
  walletAvailable: boolean
  error: string | null
}

export const MiniAppContext = createContext<MiniAppState>({
  isInMiniApp: false,
  isInitialized: false,
  context: null,
  walletAvailable: false,
  error: null,
})
