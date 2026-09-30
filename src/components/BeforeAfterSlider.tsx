import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type ForeEfterPar = {
  id: string;
  titel: string;
  kategori: string;
  fore: string;
  efter: string;
  altFore: string;
  altEfter: string;
  /** CSS object-position, styr vad som syns när bilden beskärs i ramen. */
  fokus?: string;
};

/** Ett mjukt svep fram och tillbaka som visar att reglaget går att dra i. */
const SVEP = [
  { till: 22, ms: 750 },
  { till: 78, ms: 1050 },
  { till: 50, ms: 750 },
] as const;

const lugn = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export function BeforeAfterSlider({ par, intro }: { par: ForeEfterPar[]; intro?: ReactNode }) {
  const [aktiv, setAktiv] = useState(0);
  const [position, setPosition] = useState(50);
  const [drar, setDrar] = useState(false);
  const ramRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const harSvept = useRef(false);

  const bild = par[aktiv];

  const stoppaSvep = useCallback(() => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  }, []);

  // Svep en gång när reglaget kommer i bild, om besökaren inte föredrar minskad rörelse.
  useEffect(() => {
    const ram = ramRef.current;
    if (!ram || harSvept.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      ([post]) => {
        if (!post?.isIntersecting || harSvept.current) return;
        harSvept.current = true;
        obs.disconnect();

        let steg = 0;
        let fran = 50;
        let start = performance.now();
        const tick = (nu: number) => {
          const s = SVEP[steg];
          if (!s) {
            animRef.current = null;
            return;
          }
          const t = Math.min(1, (nu - start) / s.ms);
          setPosition(fran + (s.till - fran) * lugn(t));
          if (t >= 1) {
            fran = s.till;
            steg += 1;
            start = nu;
          }
          animRef.current = requestAnimationFrame(tick);
        };
        animRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    obs.observe(ram);
    return () => {
      obs.disconnect();
      stoppaSvep();
    };
  }, [stoppaSvep]);

  const uppdateraFranX = useCallback((clientX: number) => {
    const ram = ramRef.current;
    if (!ram) return;
    const rect = ram.getBoundingClientRect();
    const andel = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, andel)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    stoppaSvep();
    harSvept.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDrar(true);
    uppdateraFranX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drar) return;
    uppdateraFranX(e.clientX);
  };

  const slutaDra = () => setDrar(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const steg = e.shiftKey ? 10 : 2;
    const flytta = (fn: (p: number) => number) => {
      e.preventDefault();
      stoppaSvep();
      harSvept.current = true;
      setPosition(fn);
    };
    if (e.key === "ArrowLeft") flytta((p) => Math.max(0, p - steg));
    else if (e.key === "ArrowRight") flytta((p) => Math.min(100, p + steg));
    else if (e.key === "Home") flytta(() => 0);
    else if (e.key === "End") flytta(() => 100);
  };

  const valj = (i: number) => {
    stoppaSvep();
    harSvept.current = true;
    setAktiv(i);
    setPosition(50);
  };

  if (!bild) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
      {intro && <div className="lg:col-start-1 lg:row-start-1">{intro}</div>}

      {/* Reglaget */}
      <div className="mx-auto w-full max-w-xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
        <div
          ref={ramRef}
          className="relative aspect-10/11 w-full cursor-ew-resize overflow-hidden rounded-sm bg-muted shadow-xl shadow-black/10 select-none"
          style={{ touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={slutaDra}
          onPointerCancel={slutaDra}
        >
          <img
            key={`${bild.id}-efter`}
            src={bild.efter}
            alt={bild.altEfter}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: bild.fokus }}
            draggable={false}
          />
          <img
            key={`${bild.id}-fore`}
            src={bild.fore}
            alt={bild.altFore}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: bild.fokus, clipPath: `inset(0 ${100 - position}% 0 0)` }}
            draggable={false}
          />

          <span className="pointer-events-none absolute top-4 left-4 rounded-xs bg-primary/85 px-3 py-1 text-[0.68rem] tracking-[0.18em] text-primary-foreground uppercase">
            Före
          </span>
          <span className="pointer-events-none absolute top-4 right-4 rounded-xs bg-brand px-3 py-1 text-[0.68rem] tracking-[0.18em] text-brand-foreground uppercase">
            Efter
          </span>

          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]"
            style={{ left: `${position}%` }}
          />

          <button
            type="button"
            role="slider"
            aria-label={`Jämför före och efter: ${bild.titel}. Använd vänster- och högerpil för att flytta handtaget.`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-valuetext={`${Math.round(position)} procent före`}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_2px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
            style={{ left: `${position}%` }}
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
              <path
                d="M7 1 1 7l6 6M15 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
          {bild.titel} · {bild.kategori}
        </p>
      </div>

      {/* Val av projekt */}
      {par.length > 1 && (
        <div className="lg:col-start-1 lg:row-start-2">
          <p className="eyebrow mb-3">Välj projekt</p>
          <ul className="grid grid-cols-2 gap-3">
            {par.map((p, i) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => valj(i)}
                  aria-pressed={i === aktiv}
                  className={`group flex h-full w-full items-center gap-3 rounded-xs border p-2 pr-3 text-left transition-colors duration-300 ${
                    i === aktiv
                      ? "border-brand bg-card shadow-sm"
                      : "border-line hover:border-foreground/40 hover:bg-card"
                  }`}
                >
                  <img
                    src={p.efter}
                    alt=""
                    loading="lazy"
                    className="size-14 shrink-0 rounded-xs object-cover"
                    style={{ objectPosition: p.fokus }}
                  />
                  <span className="text-xs leading-tight">
                    <span className="block font-medium">{p.titel}</span>
                    <span className="mt-0.5 block text-muted-foreground">{p.kategori}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
