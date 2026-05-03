import type { QuizQuestion } from '../types/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "When gas on Base goes above $0.10, what's your first reaction?",
    options: [
      { id: 'a', label: '"Still cheap vs Ethereum mainnet!" I approve instantly.', weight: 4 },
      { id: 'b', label: 'I close everything and wait for lower gwei at 3 AM.', weight: 2 },
      { id: 'c', label: 'I pause my bot to avoid unnecessary loss.', weight: 3 },
      { id: 'd', label: "I do not care, I'll pay it for airdrop probability.", weight: 5 },
    ],
  },
  {
    id: 2,
    title: 'What brings the biggest multiplier for a Base airdrop?',
    options: [
      { id: 'a', label: 'Generate huge volume with large transactions.', weight: 3 },
      { id: 'b', label: 'Ship your own Farcaster mini app or game as a builder.', weight: 5 },
      { id: 'c', label: 'Hold OG Base NFTs from early days.', weight: 4 },
      { id: 'd', label: 'Stay active on SocialFi apps like Warpcast regularly.', weight: 4 },
    ],
  },
  {
    id: 3,
    title: 'A new protocol launches on Base. What do you do?',
    options: [
      { id: 'a', label: 'I add small liquidity and start farming right away.', weight: 4 },
      { id: 'b', label: 'I read contracts first, then join if security looks good.', weight: 5 },
      { id: 'c', label: 'I connect my market-making bot for arbitrage/volume.', weight: 3 },
      { id: 'd', label: 'I do 1-2 tiny swaps only for potential airdrop, then leave.', weight: 2 },
    ],
  },
  {
    id: 4,
    title: 'How many different protocols do you interact with in one day on Base?',
    options: [
      { id: 'a', label: 'Only 1-2 battle-tested high TVL protocols.', weight: 3 },
      { id: 'b', label: '10+ contracts. Cheap gas means maximum diversity.', weight: 5 },
      { id: 'c', label: 'I try all new on-chain games and Farcaster mini apps.', weight: 4 },
      { id: 'd', label: 'I only bridge once and stay idle.', weight: 1 },
    ],
  },
  {
    id: 5,
    title: 'How do you avoid being flagged by sybil filters?',
    options: [
      { id: 'a', label: 'Keep Gitcoin Passport, ENS, and on-chain identity strong.', weight: 5 },
      { id: 'b', label: 'Use one main wallet with organic human behavior.', weight: 4 },
      { id: 'c', label: 'Spread funds across wallets from CEX with no trace.', weight: 2 },
      { id: 'd', label: 'Keep minimum 0.05 ETH untouched in wallet.', weight: 3 },
    ],
  },
  {
    id: 6,
    title: 'Where do you spend most of your time in the Base ecosystem?',
    options: [
      { id: 'a', label: 'DEX trading and liquidity pools.', weight: 4 },
      { id: 'b', label: 'Farcaster-based SocialFi apps.', weight: 5 },
      { id: 'c', label: 'Lending and yield protocols.', weight: 4 },
      { id: 'd', label: 'NFT marketplaces and free mints.', weight: 3 },
    ],
  },
  {
    id: 7,
    title: 'Do Base Discord roles help your airdrop eligibility?',
    options: [
      { id: 'a', label: 'Absolutely. Community contribution gets rewarded.', weight: 5 },
      { id: 'b', label: 'No. Only on-chain data and balances matter.', weight: 2 },
      { id: 'c', label: 'Slightly. Capital deployed still matters more.', weight: 3 },
      { id: 'd', label: 'Only in SocialFi projects, not in DeFi.', weight: 4 },
    ],
  },
  {
    id: 8,
    title: 'How much of your crypto portfolio is allocated to Base opportunities?',
    options: [
      { id: 'a', label: '10% for airdrop optionality only.', weight: 2 },
      { id: 'b', label: '50%, I believe user growth is here.', weight: 4 },
      { id: 'c', label: '90%, this is basically my main chain now.', weight: 5 },
      { id: 'd', label: '0%, I only chase free testnet and free mints.', weight: 1 },
    ],
  },
  {
    id: 9,
    title: 'A major Base token airdrop hits your wallet. What is your first move?',
    options: [
      { id: 'a', label: 'Instant market sell. Free money is free money.', weight: 2 },
      { id: 'b', label: 'Sell half, LP the rest back into ecosystem.', weight: 4 },
      { id: 'c', label: 'Hold all. I trust long-term Base vision.', weight: 5 },
      { id: 'd', label: 'Sell and fund my own builders/project roadmap.', weight: 4 },
    ],
  },
  {
    id: 10,
    title: "Which single word best captures Base's vibe?",
    options: [
      { id: 'a', label: 'Social', weight: 4 },
      { id: 'b', label: 'Build', weight: 5 },
      { id: 'c', label: 'BASED', weight: 4 },
      { id: 'd', label: 'Degen', weight: 3 },
    ],
  },
]

export const maxPossibleScore = quizQuestions.reduce((acc, question) => {
  const highestWeight = Math.max(...question.options.map((option) => option.weight))
  return acc + highestWeight
}, 0)
