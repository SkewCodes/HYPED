import { VideoLoop } from "./VideoLoop";
import { Slash } from "./Slash";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isLive = product.status === "live";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-hyped-muted/10 bg-hyped-carbon transition-colors duration-300 hover:border-hyped-cyan/30">
      <div className="relative aspect-[4/5] overflow-hidden">
        <VideoLoop
          asset={product.video}
          playMode="hover"
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <Slash size="sm" />
          <span className="text-xs font-bold uppercase tracking-wider text-hyped-cyan">
            {product.accentLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-hyped-white">{product.tagline}</p>
        <p className="mt-2 text-sm text-hyped-muted">{product.description}</p>

        <div className="mt-auto pt-6">
          {isLive ? (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-hyped-cyan px-5 py-2.5 text-xs font-bold text-hyped-black uppercase tracking-wide transition-opacity hover:opacity-90"
            >
              Launch
              <span aria-hidden="true">&rarr;</span>
            </a>
          ) : (
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded border border-hyped-muted/30 px-5 py-2.5 text-xs font-bold text-hyped-white uppercase tracking-wide transition-colors hover:border-hyped-cyan hover:text-hyped-cyan"
            >
              Coming Soon
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
