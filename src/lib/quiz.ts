import type { QuizQuestion } from '../types/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: 'Base ekosisteminde en cok hangi alan sana yakin?',
    options: [
      { id: 'a', label: 'DeFi', weight: 3 },
      { id: 'b', label: 'Sosyal uygulamalar', weight: 4 },
      { id: 'c', label: 'Oyun ve NFT', weight: 2 },
    ],
  },
  {
    id: 2,
    title: 'Airdrop gelse ilk hamlen ne olurdu?',
    options: [
      { id: 'a', label: 'Uzun vadeli tutardim', weight: 5 },
      { id: 'b', label: 'Bir kismini realize ederdim', weight: 3 },
      { id: 'c', label: 'Deneysel projelere dagitirdim', weight: 4 },
    ],
  },
  {
    id: 3,
    title: 'Base topluluguna katkini nasil tanimlarsin?',
    options: [
      { id: 'a', label: 'Icerik uretiyorum', weight: 4 },
      { id: 'b', label: 'On-chain aktif kullaniyorum', weight: 5 },
      { id: 'c', label: 'Yeni basliyorum ama istikrarliyim', weight: 2 },
    ],
  },
  {
    id: 4,
    title: 'Risk algin hangi seviyede?',
    options: [
      { id: 'a', label: 'Dusuk', weight: 2 },
      { id: 'b', label: 'Dengeli', weight: 3 },
      { id: 'c', label: 'Yuksek', weight: 5 },
    ],
  },
  {
    id: 5,
    title: 'Base uzerinde hangi aktiviteyi daha degerli goruyorsun?',
    options: [
      { id: 'a', label: 'Likidite saglama', weight: 4 },
      { id: 'b', label: 'Mini app kullanimi', weight: 5 },
      { id: 'c', label: 'Sosyal etkileisim', weight: 3 },
    ],
  },
  {
    id: 6,
    title: 'Topluluk odakli bir token dagitimi olsa, oncelik ne olmali?',
    options: [
      { id: 'a', label: 'On-chain davranis', weight: 5 },
      { id: 'b', label: 'Icerik ve sosyal katkilar', weight: 4 },
      { id: 'c', label: 'Yeni kullanici kazanimi', weight: 3 },
    ],
  },
  {
    id: 7,
    title: 'Sence Base ekosisteminin en guclu yani ne?',
    options: [
      { id: 'a', label: 'Coinbase etkisi', weight: 4 },
      { id: 'b', label: 'Gelir modeline yakinlik', weight: 3 },
      { id: 'c', label: 'Gelistirici deneyimi', weight: 5 },
    ],
  },
  {
    id: 8,
    title: 'Bir mini appte en cok neye bakarsin?',
    options: [
      { id: 'a', label: 'Hiz', weight: 3 },
      { id: 'b', label: 'Kullanici deneyimi', weight: 5 },
      { id: 'c', label: 'Token tesviki', weight: 4 },
    ],
  },
  {
    id: 9,
    title: 'Airdrop beklentin hangi profili yansitiyor?',
    options: [
      { id: 'a', label: 'Muhafazakar', weight: 2 },
      { id: 'b', label: 'Gercekci', weight: 3 },
      { id: 'c', label: 'Yuksek beklenti', weight: 5 },
    ],
  },
  {
    id: 10,
    title: 'Sence topluluk odulu nasil dagitilmali?',
    options: [
      { id: 'a', label: 'Dengeli dagilim', weight: 3 },
      { id: 'b', label: 'En aktiflere daha cok', weight: 5 },
      { id: 'c', label: 'Yeni kullaniciyi da destekleyen model', weight: 4 },
    ],
  },
]

export const maxPossibleScore = quizQuestions.reduce((acc, question) => {
  const highestWeight = Math.max(...question.options.map((option) => option.weight))
  return acc + highestWeight
}, 0)
