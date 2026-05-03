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
    <section className="space-y-5 rounded-3xl border border-cyan-100 bg-white/90 p-5 shadow-xl shadow-cyan-100 md:p-7">
      <h2 className="text-xl font-semibold text-slate-900">Airdrop USD Calculator</h2>
      <p className="text-sm text-slate-600">
        Set FDV and airdrop supply ratio to estimate the total USD airdrop pool.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-600">Base FDV (USD)</span>
          <input
            type="number"
            min={0}
            value={fdvUsd}
            onChange={(event) => onFdvChange(Number(event.target.value) || 0)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-600">Airdrop Supply Ratio (%)</span>
          <input
            type="number"
            min={0}
            max={100}
            step="0.1"
            value={airdropPercent}
            onChange={(event) => onAirdropPercentChange(Number(event.target.value) || 0)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs font-medium text-slate-600">Quick adjust: supply ratio slider</span>
        <input
          type="range"
          min={0}
          max={30}
          step={0.1}
          value={airdropPercent}
          onChange={(event) => onAirdropPercentChange(Number(event.target.value) || 0)}
          className="w-full accent-cyan-500"
        />
      </label>
    </section>
  )
}
