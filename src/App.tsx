import { useMemo, useState } from 'react'
import { AirdropCalculatorSection } from './features/calculator/AirdropCalculatorSection'
import { MintShareSection } from './features/mint-share/MintShareSection'
import { QuizSection } from './features/quiz/QuizSection'
import { useMiniApp } from './hooks/useMiniApp'
import { buildXShareUrl, shareResultOnFarcaster } from './lib/farcaster'
import { maxPossibleScore, quizQuestions } from './lib/quiz'

function App() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [fdvUsd, setFdvUsd] = useState<number>(12_000_000_000)
  const [airdropPercent, setAirdropPercent] = useState<number>(5)
  const [isMinting, setIsMinting] = useState(false)
  const { isInitialized, isInMiniApp, walletAvailable, context, error } = useMiniApp()

  const score = useMemo(() => {
    return quizQuestions.reduce((acc, question) => {
      const selectedId = answers[question.id]
      const selectedOption = question.options.find((option) => option.id === selectedId)
      return acc + (selectedOption?.weight ?? 0)
    }, 0)
  }, [answers])

  const completionRate = useMemo(() => {
    if (maxPossibleScore === 0) return 0
    return score / maxPossibleScore
  }, [score])

  const airdropPoolUsd = useMemo(() => {
    return fdvUsd * (airdropPercent / 100)
  }, [fdvUsd, airdropPercent])

  const estimatedUserUsd = useMemo(() => {
    const userShareFactor = 0.00002 + completionRate * 0.00008
    return airdropPoolUsd * userShareFactor
  }, [airdropPoolUsd, completionRate])

  const profileLabel = useMemo(() => {
    if (completionRate >= 0.75) return 'Core Base Maxi'
    if (completionRate >= 0.45) return 'Balanced Base Explorer'
    return 'Early Base Curious'
  }, [completionRate])

  const handleAnswerChange = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }))
  }

  const shareText = useMemo(() => {
    return `Base Airdrop Simulator sonucum: ${profileLabel} | Tahmini airdrop: $${estimatedUserUsd.toLocaleString(
      'en-US',
      { maximumFractionDigits: 2 },
    )} #Base #Farcaster`
  }, [estimatedUserUsd, profileLabel])

  const handleShareX = () => {
    window.open(buildXShareUrl(shareText), '_blank', 'noopener,noreferrer')
  }

  const handleShareFarcaster = async () => {
    const success = await shareResultOnFarcaster(shareText)
    if (!success) {
      handleShareX()
    }
  }

  const handleMint = async () => {
    setIsMinting(true)
    window.setTimeout(() => {
      setIsMinting(false)
      window.alert('MVP mint placeholder tamamlandi. Sonraki adim: onchain contract entegrasyonu.')
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-6 md:gap-6 md:px-6 md:py-10">
        <header className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Base Airdrop Mini App Simulator
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            10 soruluk oznel test + FDV hesaplayici + mint/paylas akisi (MVP)
          </p>

          <div className="mt-4 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
            <p>SDK Durumu: {isInitialized ? 'Hazir' : 'Yukleniyor...'}</p>
            <p>Icerik: {isInMiniApp ? 'Farcaster iframe' : 'Normal tarayici'}</p>
            <p>Wallet: {walletAvailable ? 'Baglanabilir' : 'Provider yok'}</p>
            <p>Kullanici: {context?.user?.username ?? 'Bilinmiyor'}</p>
          </div>
          {error && <p className="mt-3 rounded-lg bg-rose-50 p-2 text-xs text-rose-700">{error}</p>}
        </header>

        <QuizSection answers={answers} onAnswerChange={handleAnswerChange} />

        <AirdropCalculatorSection
          fdvUsd={fdvUsd}
          airdropPercent={airdropPercent}
          onFdvChange={setFdvUsd}
          onAirdropPercentChange={setAirdropPercent}
        />

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Sonuc Ozeti</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <article className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Profil</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{profileLabel}</p>
            </article>
            <article className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Airdrop Havuzu (USD)</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                ${airdropPoolUsd.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </p>
            </article>
            <article className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Tahmini Payin (USD)</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                ${estimatedUserUsd.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </p>
            </article>
          </div>
        </section>

        <MintShareSection
          onMint={handleMint}
          onShareX={handleShareX}
          onShareFarcaster={handleShareFarcaster}
          isMinting={isMinting}
        />
      </div>
    </main>
  )
}

export default App
