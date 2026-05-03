type ShareSectionProps = {
  onShareX: () => void
  onShareFarcaster: () => void
  statusMessage: string | null
}

export function ShareSection({ onShareX, onShareFarcaster, statusMessage }: ShareSectionProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-violet-100 bg-white/90 p-5 shadow-xl shadow-violet-100 md:p-7">
      <h2 className="text-xl font-semibold text-slate-900">Share your result</h2>
      <p className="text-sm text-slate-600">
        Share your quiz outcome on Farcaster or X. Farcaster works inside Base App / Warpcast embed.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <button
          type="button"
          onClick={onShareFarcaster}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow"
        >
          Share on Farcaster
        </button>

        <button
          type="button"
          onClick={onShareX}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow"
        >
          Share on X
        </button>
      </div>

      {statusMessage && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-700">{statusMessage}</p>
        </div>
      )}
    </section>
  )
}
