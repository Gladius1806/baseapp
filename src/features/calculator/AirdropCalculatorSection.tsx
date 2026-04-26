type AirdropCalculatorSectionProps = {
  fdvUsd: number
  airdropPercent: number
  onFdvChange: (value: number) => void
  onAirdropPercentChange: (value: number) => void
}

export function AirdropCalculatorSection({
  fdvUsd,
  airdropPercent,
  onFdvChange,
  onAirdropPercentChange,
}: AirdropCalculatorSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <h2 className="text-xl font-semibold text-slate-900">Airdrop USD Hesaplayici</h2>
      <p className="text-sm text-slate-600">
        FDV ve airdrop yuzdesini sen belirle; uygulama havuzun dolar karsiligini aninda hesaplasin.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-600">Base FDV (USD)</span>
          <input
            type="number"
            min={0}
            value={fdvUsd}
            onChange={(event) => onFdvChange(Number(event.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-400 focus:ring-2"
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-600">Airdrop Supply Yuzdesi (%)</span>
          <input
            type="number"
            min={0}
            max={100}
            step="0.1"
            value={airdropPercent}
            onChange={(event) => onAirdropPercentChange(Number(event.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-400 focus:ring-2"
          />
        </label>
      </div>
    </section>
  )
}
