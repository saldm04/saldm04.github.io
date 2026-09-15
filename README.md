# Portfolio di Salvatore Di Martino

Portfolio personale statico in italiano, pensato per presentare il percorso accademico e tecnico insieme alle attività di volontariato, comunità e territorio.

## Stack

- React 19 e TypeScript
- Vite
- Tailwind CSS con plugin ufficiale per Vite
- Lucide React

## Sviluppo locale

```bash
npm install
npm run dev
```

Controlli prima della pubblicazione:

```bash
npm run lint
npm run build
npm run preview
```

## Struttura

- `src/data/portfolio.ts`: contenuti, link e percorsi degli asset modificabili.
- `src/types/portfolio.ts`: tipi TypeScript dei contenuti.
- `src/components/layout`: navigazione, sezioni condivise e footer.
- `src/components/sections`: sezioni della pagina.
- `src/components/ui`: componenti riutilizzabili.
- `src/hooks/useTheme.ts`: tema chiaro/scuro persistente.
- `public`: favicon, file SEO e futuri asset statici.

## Immagini e CV

Le immagini personali, in formato WebP, possono essere aggiunte in:

```text
public/images/profile/salvatore-profile.webp
public/images/personal/hiking.webp
public/images/personal/volunteering.webp
public/images/personal/maiori-risona.webp
public/images/personal/drone.webp
```

I percorsi sono già raccolti in `src/data/portfolio.ts`. Finché i file non esistono, il sito usa fallback grafici e non renderizza immagini interrotte.

Il CV aggiornato va inserito in:

```text
public/documents/Salvatore_Di_Martino_CV.pdf
```

Dopo aver aggiunto il file, impostare `cvAvailable: true` in `src/data/portfolio.ts`. Per la foto profilo, impostare anche `profileImage` usando il percorso già predisposto.

## Pubblicazione

Il workflow `.github/workflows/deploy-pages.yml` compila il progetto e pubblica `dist` su GitHub Pages a ogni push su `main`, oltre a supportare l’avvio manuale. Nelle impostazioni del repository, la sorgente di GitHub Pages deve essere configurata su **GitHub Actions**.

Il sito utente viene servito dalla root `https://saldm04.github.io/`; per questo Vite usa `base: '/'`.
