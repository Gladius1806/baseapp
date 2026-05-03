# Base Airdrop Mini App

Vite + React + TypeScript + TailwindCSS + `@farcaster/miniapp-sdk` ile gelistirilmis Base/Farcaster Mini App.

## Ozellikler

- 10 soruluk oznel Base airdrop testi
- FDV + supply yuzdesi ile USD airdrop hesaplayici
- Farcaster cast paylasimi (`composeCast`) ve X paylasimi
- Mini app initialize akisi (`MiniAppProvider`)
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

## Ortam Degiskenleri

Production'da uygulama URL'si icin (manifest/meta ile uyum):

```bash
VITE_APP_URL=https://your-production-domain.vercel.app
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
    share/ShareSection.tsx
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
   git add .
   git commit -m "Deploy mini app"
   git push
   ```
2. Vercel'de yeni proje olustur, GitHub repo bagla ve deploy et.
3. Vercel domainini Farcaster Developers panelindeki Manifest alanina ekle.
4. Account association QR adimini tamamla ve `public/.well-known/farcaster.json` icindeki placeholder URL'leri gercek domain ile degistir.
5. `base.dev` uzerinde Vercel URL ile Mini App yayinla.

Detayli kontrol listesi: `docs/publish-checklist.md`

## Hata Duzeltme Dongusu

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
