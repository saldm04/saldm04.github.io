import { useState } from 'react'
import { Activity, Disc3, ImageOff, MapPinned } from 'lucide-react'
import type { MediaAsset } from '../../types/portfolio'
import {
  interestHighlights,
  interests,
  personalGallery,
  secondaryInterests,
} from '../../data/portfolio'
import { Section } from '../layout/Section'

const interestIcons = [Activity, Disc3, MapPinned]

function GalleryImage({ image }: { image: MediaAsset }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]">
      {!imageFailed ? (
        <img
          className="h-full w-full object-cover"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          style={{ objectPosition: image.position }}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="grid h-full place-items-center text-[var(--faint)]">
          <span className="flex items-center gap-2 text-sm font-medium">
            <ImageOff aria-hidden="true" size={18} />
            Immagine non disponibile
          </span>
        </div>
      )}
      {image.caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 pb-4 pt-10 text-sm font-semibold text-white">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export function BeyondTech() {
  return (
    <Section
      id="oltre-il-codice"
      number="06"
      eyebrow="Oltre il codice"
      title="Interessi che tengono insieme curiosità, movimento e territorio."
    >
      <div className="border-y border-[var(--border)]" aria-label="Interessi personali">
        <div className="grid md:grid-cols-3">
          {interestHighlights.map((item, index) => (
            <div
              className={`py-6 md:px-6 ${
                index > 0
                  ? 'border-t border-[var(--border)] md:border-l md:border-t-0'
                  : ''
              } ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:pr-0' : ''}`}
              key={item.title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.label}
              </p>
              <p
                className={`mt-2 font-semibold leading-tight tracking-[-0.03em] text-[var(--green)] ${
                  index === 2 ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid border-t border-[var(--border)] sm:grid-cols-2">
          {secondaryInterests.map((item, index) => (
            <div
              className={`py-4 sm:px-6 ${
                index > 0
                  ? 'border-t border-[var(--border)] sm:border-l sm:border-t-0'
                  : 'sm:pl-0'
              } ${index === secondaryInterests.length - 1 ? 'sm:pr-0' : ''}`}
              key={item.label}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.label}
              </p>
              <p className="mt-1 text-base text-[var(--ink)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {interests.map((interest, index) => {
          const Icon = interestIcons[index]
          return (
            <article className="border-l border-[var(--border-strong)] pl-5" key={interest.title}>
              <Icon className="text-[var(--green)]" aria-hidden="true" size={22} />
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">{interest.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{interest.description}</p>
            </article>
          )
        })}
      </div>

      {personalGallery.length > 0 ? (
        <div className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Momenti personali e attività sul territorio">
          {personalGallery.map((image) => (
            <GalleryImage image={image} key={image.src} />
          ))}
        </div>
      ) : null}
    </Section>
  )
}
