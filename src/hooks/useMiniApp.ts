import { useContext } from 'react'
import { MiniAppContext } from '../app/providers/miniAppContext'

export function useMiniApp() {
  return useContext(MiniAppContext)
}
