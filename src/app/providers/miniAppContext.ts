import sdk from '@farcaster/miniapp-sdk'
import { createContext } from 'react'

export type MiniAppState = {
  isInMiniApp: boolean
  isInitialized: boolean
  context: Awaited<typeof sdk.context> | null
  error: string | null
}

export const MiniAppContext = createContext<MiniAppState>({
  isInMiniApp: false,
  isInitialized: false,
  context: null,
  error: null,
})
