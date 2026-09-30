import { createFileRoute } from "@tanstack/react-router";
import { PaintHeading, PaintSection } from "@/components/Paint";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";

import dorrarOckraEfter from "@/assets/projekt/dorrar-ockra-efter.webp";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss – AIF Måleri AB, fönstermästare i Stockholm" },
      {
        name: "description",
        content:
          "AIF Måleri AB grundades 2022 och renoverar fönster och dörrar, målar och snickrar samt renoverar trapphus och fasader i Stockholms län.",
      },
      { property: "og:title", content: "Om oss – AIF Måleri AB" },
      {
        property: "og:description",
        content: "Fönstermästare och målare för bostadsrättsföreningar och privatpersoner i Stockholm.",
      },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: OmOss,
});

const STEG = [
  {
    titel: "1. Du berättar",
    text: "Beskriv projektet i offertformuläret, eller ring eller mejla oss. Bilder underlättar.",
  },
  {
    titel: "2. Vi återkommer med offert",
    text: "Vi går igenom omfattning och skick och återkommer med en offert på arbetet.",
  },
  {
    titel: "3. Vi utför arbetet",
    text: "Arbetet utförs på plats, och ytor i närheten skyddas medan vi arbetar.",
  },
];

function OmOss() {
  return (
    <>
      <section className="container-page pt-16 pb-16 sm:pt-24">
        <Reveal>
          <p className="eyebrow">Om oss</p>
          <PaintHeading
            as="h1"
            seed={31}
            className="mt-6 max-w-2xl text-4xl leading-[1.12] sm:text-5xl"
          >
            Fönstermästarna i {FORETAG.ort}
          </PaintHeading>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {FORETAG.namn} grundades {FORETAG.grundat} och arbetar med renovering av fönster och
            dörrar, måleri och snickeri samt trapphus och fasader. Vi arbetar åt
            bostadsrättsföreningar och privatpersoner i hela Stockholms län.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <Reveal>
          <img
            src={dorrarOckraEfter}
            alt="Nymålat dörrparti med glas i en varm ockragul kulör"
            loading="lazy"
            className="aspect-4/5 w-full rounded-sm object-cover shadow-xl shadow-black/10"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Vad vi gör</p>
          <h2 className="mt-4 text-3xl">Renovera hellre än byta</h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Vi profilerar oss som fönstermästare. Det innebär renovering, tätning och underhåll av
              fönster och dörrar, och ofta går det att renovera i stället för att byta.
            </p>
            <p>
              Vid sidan av fönster och dörrar utför vi målnings- och snickeriarbeten, renoverar
              trapphus och fasader och bredspacklar ytor som behöver ett jämnt underlag.
            </p>
            <p>
              Vi är godkända för F-skatt och medlemmar i Måleriföretagen i Sverige. Följ gärna våra
              jobb på Instagram,{" "}
              <a
                className="underline hover:text-brand"
                href={FORETAG.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {FORETAG.instagramNamn}
              </a>
              .
            </p>
          </div>
        </Reveal>
      </section>

      <PaintSection tone="tint" seed={33} className="py-20">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Så går det till</p>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {STEG.map((v, i) => (
              <Reveal key={v.titel} delay={i * 100}>
                <article className="border-t border-foreground/20 pt-6">
                  <h3 className="text-xl">{v.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </PaintSection>
    </>
  );
}
