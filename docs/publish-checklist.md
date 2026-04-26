# Base Mini App Publish Checklist

## 1) Vercel Deploy

1. GitHub reposunu Vercel'e bagla.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Deploy et.
5. Canli URL'i not al: `https://<project>.vercel.app`

## 2) Farcaster Developers

1. `https://farcaster.xyz/~/developers` adresine git.
2. Manifest alanina Vercel domainini gir.
3. Generate account association adimini tamamla.
4. Uretilen `accountAssociation` degerlerini `public/.well-known/farcaster.json` dosyasina yerlestir.
5. Tekrar deploy et.

## 3) Base App Publish

1. `https://base.dev` adresinde mini app publish ekranina gir.
2. Vercel production URL'ini yapistir.
3. Eksik metadata uyarisi varsa `index.html` ve `.well-known/farcaster.json` alanlarini guncelle.
4. Publish islemini tamamla.

## 4) Hata Duzeltme Dongusu

1. Hata ekranini veya loglari kopyala.
2. Cursor'a ilet ve duzeltmeyi uygula.
3. Kontrol:
   - `npm run lint`
   - `npm run build`
4. GitHub'a gonder:
   - `git add .`
   - `git commit -m "Fix mini app issue"`
   - `git push`
