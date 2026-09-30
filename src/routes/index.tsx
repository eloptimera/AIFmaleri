import { createFileRoute, Link } from "@tanstack/react-router";
import { BeforeAfterSlider, type ForeEfterPar } from "@/components/BeforeAfterSlider";
import { Heading, PaintHeading, PaintSection } from "@/components/Paint";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Layers,
  Instagram,
  PaintRoller,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import heroDorr from "@/assets/hero-dorr.webp";
import dorrRodFore from "@/assets/projekt/dorr-rod-fore.webp";
import dorrRodEfter from "@/assets/projekt/dorr-rod-efter.webp";
import dorrarOckraFore from "@/assets/projekt/dorrar-ockra-fore.webp";
import dorrarOckraEfter from "@/assets/projekt/dorrar-ockra-efter.webp";
import trapphus1Fore from "@/assets/projekt/trapphus-1-fore.webp";
import trapphus1Efter from "@/assets/projekt/trapphus-1-efter.webp";
import trapphus2Fore from "@/assets/projekt/trapphus-2-fore.webp";
import trapphus2Efter from "@/assets/projekt/trapphus-2-efter.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fönstermästare & målare i Stockholm – AIF Måleri AB" },
      {
        name: "description",
        content:
          "AIF Måleri AB renoverar fönster och dörrar, målar trapphus och fasader åt bostadsrättsföreningar och privatpersoner i hela Stockholms län. Begär offert.",
      },
      { property: "og:title", content: "Fönstermästare & målare i Stockholm – AIF Måleri AB" },
      {
        property: "og:description",
        content:
          "Renovering av fönster och dörrar, måleri, snickeri samt trapphus och fasad i Stockholms län.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Start,
});

const PAR: ForeEfterPar[] = [
  {
    id: "portdorr",
    titel: "Portdörr",
    kategori: "Fönster & dörrar",
    fore: dorrRodFore,
    efter: dorrRodEfter,
    altFore: "Portdörr med slitet, flagnande trä före renovering",
    altEfter: "Samma portdörr efter renovering, målad i en djup röd kulör",
    fokus: "50% 30%",
  },
  {
    id: "dorrpartier",
    titel: "Dörrparti",
    kategori: "Fönster & dörrar",
    fore: dorrarOckraFore,
    efter: dorrarOckraEfter,
    altFore: "Dörrparti med glas i brunt lackerat trä före målning",
    altEfter: "Samma dörrparti nymålat i en varm ockragul kulör",
    fokus: "50% 60%",
  },
  {
    id: "trapphus-1",
    titel: "Trapphus, plan 1",
    kategori: "Trapphus",
    fore: trapphus1Fore,
    efter: trapphus1Efter,
    altFore: "Trapphusvägg med flagnande puts och färg, golvet täckt med skyddspapper",
    altEfter: "Samma trapphus efter målning: vita väggar och en svart dörr med svarta lister",
    fokus: "0% 50%",
  },
  {
    id: "trapphus-2",
    titel: "Trapphus, plan 2",
    kategori: "Trapphus",
    fore: trapphus2Fore,
    efter: trapphus2Efter,
    altFore: "Trapphuskorridor med skadade väggar, stege och skräp från skrapning",
    altEfter: "Samma korridor efter målning, med vita väggar och svart dörr",
    fokus: "0% 50%",
  },
];

type Tjanst = {
  nr: string;
  titel: string;
  text: string;
  bild?: string;
  bildAlt?: string;
  fokus?: string;
  ikon?: LucideIcon;
};

const TJANSTER: Tjanst[] = [
  {
    nr: "01",
    titel: "Fönster & dörrar",
    text: "Renovering, tätning och underhåll. Vi är fönstermästare, och det är det vi brinner för.",
    bild: dorrRodEfter,
    bildAlt: "Renoverad portdörr målad i röd kulör",
    fokus: "50% 25%",
  },
  {
    nr: "02",
    titel: "Trapphus",
    text: "Målning och renovering av trapphus för bostadsrättsföreningar och fastighetsägare.",
    bild: trapphus2Efter,
    bildAlt: "Målat trapphus med vita väggar och svart dörr",
    fokus: "30% 50%",
  },
  {
    nr: "03",
    titel: "Fasad",
    text: "Utvändig målning och underhåll av fasader.",
    ikon: Building2,
  },
  {
    nr: "04",
    titel: "Måleri & snickeri",
    text: "Invändigt och utvändigt måleri av väggar, tak och snickerier, samt snickeriarbeten.",
    ikon: PaintRoller,
  },
  {
    nr: "05",
    titel: "Bredspackling",
    text: "Grundligt förarbete som ger jämna ytor och ett slutresultat som håller.",
    ikon: Layers,
  },
];

const TRYGGHET: { ikon: LucideIcon; titel: string; text: string }[] = [
  {
    ikon: ShieldCheck,
    titel: "Godkänd för F-skatt",
    text: "Vi är godkända för F-skatt, momsregistrerade och registrerade som arbetsgivare.",
  },
  {
    ikon: BadgeCheck,
    titel: "Medlem i Måleriföretagen",
    text: "Vi är medlemmar i branschorganisationen Måleriföretagen i Sverige.",
  },
  {
    ikon: Building2,
    titel: `Verksamma sedan ${FORETAG.grundat}`,
    text: "Vi arbetar åt bostadsrättsföreningar och privatpersoner i hela Stockholms län.",
  },
];

function Start() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-16 overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="eyebrow">Fönstermästare · Måleri · Trapphus &amp; fasad</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.04] font-normal tracking-[0.01em] uppercase sm:text-6xl lg:text-[4.4rem]">
              Fönster&shy;mästare <span className="text-brand">&amp; målare</span> i{" "}
              {FORETAG.ort}
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Vi renoverar fönster och dörrar och målar trapphus och fasader åt
              bostadsrättsföreningar och privatpersoner i hela Stockholms län.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/offert" className="btn-base btn-primary">
                Begär offert
              </Link>
              <a
                href={`tel:${FORETAG.telefonLank}`}
                className="btn-base border border-foreground/30 hover:bg-card"
              >
                Ring {FORETAG.telefon}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} strokeWidth={1.6} className="text-brand" aria-hidden="true" />
                Godkänd för F-skatt
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck size={16} strokeWidth={1.6} className="text-brand" aria-hidden="true" />
                Medlem i Måleriföretagen
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm bg-brand"
              aria-hidden="true"
            />
            <img
              src={heroDorr}
              alt="Renoverad portdörr med välvt fönster ovanför, målad i en djup röd kulör"
              width={590}
              height={721}
              fetchPriority="high"
              className="relative aspect-4/5 w-full rounded-sm object-cover shadow-xl shadow-black/15"
            />
            <span className="absolute bottom-4 left-4 rounded-xs bg-primary/85 px-3 py-1.5 text-[0.68rem] tracking-[0.18em] text-primary-foreground uppercase backdrop-blur-sm">
              Nymålad portdörr
            </span>
          </div>
        </div>
      </section>

      {/* Före/efter */}
      <PaintSection tone="tint" seed={3} className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <BeforeAfterSlider
              par={PAR}
              intro={
                <div className="max-w-xl">
                  <p className="eyebrow">Före och efter</p>
                  <PaintHeading seed={5} className="mt-3 text-3xl sm:text-4xl">
                    Dra i handtaget och se skillnaden
                  </PaintHeading>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Samma dörr, samma trapphus, före och efter vårt arbete. Dra åt sidorna, eller
                    använd piltangenterna när handtaget är markerat.
                  </p>
                </div>
              }
            />
          </Reveal>
        </div>
      </PaintSection>

      {/* Tjänster */}
      <PaintSection tone="beige" seed={7} className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Tjänster</p>
                <Heading className="mt-4 max-w-lg text-3xl sm:text-4xl">
                  Fönster, dörrar, trapphus och fasad – samma hantverkare hela vägen
                </Heading>
              </div>
              <div className="max-w-sm md:text-right">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Beskriv vad som ska göras, så återkommer vi med en offert.
                </p>
                <Link
                  to="/offert"
                  className="mt-4 inline-flex items-center gap-2 border-b border-foreground/40 pb-0.5 text-sm font-medium transition-colors duration-300 hover:border-brand hover:text-brand"
                >
                  Begär offert
                  <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-6">
            {TJANSTER.map((t, i) => {
              const Ikon = t.ikon;
              const stor = i === 0;
              const span = t.bild ? (stor ? "lg:col-span-4" : "lg:col-span-2") : "lg:col-span-2";

              if (t.bild) {
                return (
                  <Reveal key={t.titel} delay={i * 80} className={span}>
                    <article className="group relative isolate flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-sm text-white lg:min-h-[27rem]">
                      <img
                        src={t.bild}
                        alt={t.bildAlt ?? ""}
                        loading="lazy"
                        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                        style={{ objectPosition: t.fokus }}
                      />
                      <div
                        className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/25 to-black/0"
                        aria-hidden="true"
                      />
                      <span className="absolute top-6 left-6 rounded-full border border-white/50 bg-black/30 px-3 py-1 text-[0.7rem] tracking-[0.18em] backdrop-blur-sm">
                        {t.nr}
                      </span>
                      <div className="p-6 sm:p-8">
                        <h3 className="text-2xl sm:text-3xl">{t.titel}</h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                          {t.text}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              }

              return (
                <Reveal key={t.titel} delay={i * 80} className={span}>
                  <article className="group flex h-full min-h-[16rem] flex-col justify-between rounded-sm border border-line bg-card p-6 transition-colors duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-brand-foreground">
                        {Ikon && <Ikon size={22} strokeWidth={1.5} aria-hidden="true" />}
                      </span>
                      <span className="text-[0.7rem] tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                        {t.nr}
                      </span>
                    </div>
                    <div className="mt-10">
                      <h3 className="text-xl">{t.titel}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/80">
                        {t.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </PaintSection>

      {/* Trygghet */}
      <PaintSection tone="tint" seed={19} className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Heading className="text-3xl sm:text-4xl">Det här är vi</Heading>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {TRYGGHET.map((t, i) => (
              <Reveal key={t.titel} delay={i * 100}>
                <article className="h-full border-t border-foreground/20 pt-6">
                  <t.ikon size={26} strokeWidth={1.4} className="text-brand" aria-hidden="true" />
                  <h3 className="mt-5 text-xl">{t.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={FORETAG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300 hover:text-brand"
            >
              <Instagram size={20} strokeWidth={1.5} aria-hidden="true" />
              Fler bilder från våra jobb på Instagram {FORETAG.instagramNamn}
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </PaintSection>

      {/* Avslutande CTA */}
      <section className="container-page">
        <Reveal>
          <div className="rounded-sm bg-primary px-8 py-16 text-primary-foreground sm:px-16 sm:py-20">
            <h2 className="max-w-lg text-3xl sm:text-4xl">
              Berätta om ditt projekt så återkommer vi
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">
              Beskriv vad som ska göras, till exempel fönster, dörrar, trapphus eller fasad. Du
              kan också ringa eller mejla.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/offert" className="btn-base btn-brand">
                Begär offert
              </Link>
              <a
                href={`tel:${FORETAG.telefonLank}`}
                className="btn-base border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Ring {FORETAG.telefon}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
