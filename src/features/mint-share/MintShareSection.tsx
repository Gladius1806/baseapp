type MintShareSectionProps = {
  onMint: () => void
  onShareX: () => void
  onShareFarcaster: () => void
  isMinting: boolean
}

export function MintShareSection({
  onMint,
  onShareX,
  onShareFarcaster,
  isMinting,
}: MintShareSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <h2 className="text-xl font-semibold text-slate-900">Mint ve Paylas</h2>
      <p className="text-sm text-slate-600">
        Sonucunu NFT olarak mintleyip sosyalde paylasabilecegin alan. Mint adimi su an MVP placeholder
        olarak bagli.
      </p>

      <div className="grid gap-3 md:grid-cols-3">
        <button
          type="button"
          onClick={onMint}
          disabled={isMinting}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
        >
          {isMinting ? 'Mintleniyor...' : 'Sonucu NFT Olarak Mintle'}
        </button>

        <button
          type="button"
          onClick={onShareFarcaster}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Farcaster'da Paylas
        </button>

        <button
          type="button"
          onClick={onShareX}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          X'te Paylas
        </button>
      </div>
    </section>
  )
}
