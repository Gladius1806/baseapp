import sdk from '@farcaster/miniapp-sdk'

export async function safeReadySignal() {
  try {
    await sdk.actions.ready()
  } catch {
    // App can still run in regular browser during development.
  }
}

export async function shareResultOnFarcaster(options: { text: string }) {
  try {
    await sdk.actions.composeCast({
      text: options.text,
    })
    return true
  } catch {
    return false
  }
}

export function buildXShareUrl(text: string) {
  return `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`
}
