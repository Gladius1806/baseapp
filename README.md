# Base Airdrop Mini App

Vite + React + TypeScript + TailwindCSS + `@farcaster/miniapp-sdk` ile gelistirilmis Base/Farcaster Mini App.

## Ozellikler

- 10 soruluk oznel Base airdrop testi
- FDV + supply yuzdesi ile USD airdrop hesaplayici
- Farcaster cast paylasimi (`composeCast`) ve X paylasim fallback
- Mini app initialize akisi (`MiniAppProvider`, `useMiniApp`)
- Vercel/Farcaster/Base App yayin adimlarina uygun temel altyapi

## Kurulum

```bash
npm install
npm run dev
```

## Build ve Kontrol

```bash
npm run lint
npm run build
```

## Proje Yapisi

```text
src/
  app/providers/
    MiniAppProvider.tsx
    miniAppContext.ts
  features/
    quiz/QuizSection.tsx
    calculator/AirdropCalculatorSection.tsx
    mint-share/MintShareSection.tsx
  hooks/useMiniApp.ts
  lib/farcaster.ts
  lib/quiz.ts
  types/quiz.ts
  styles/globals.css
  App.tsx
  main.tsx
```

## Deploy ve Yayin

1. GitHub'a gonder:
   ```bash
   git init
   git add .
   git commit -m "Initial mini app setup"
   git branch -M main
   git remote add origin <REPO_URL>
   git push -u origin main
   ```
2. Vercel'de yeni proje olustur, GitHub repo bagla ve deploy et.
3. Vercel domainini Farcaster Developers panelindeki Manifest alanina ekle.
4. Account association QR adimini tamamla.
5. `base.dev` uzerinde Vercel URL ile Mini App yayinla.

## Hata Duzeltme Dongusu

Hata alirsan asagidaki donguyu uygula:

1. Hata logu veya ekran goruntusu al.
2. Cursor'a ilet ve duzeltmeyi uygula.
3. Tekrar kontrol et:
   ```bash
   npm run lint
   npm run build
   ```
4. Sonrasi:
   ```bash
   git add .
   git commit -m "Fix mini app issue"
   git push
   ```
