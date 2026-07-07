import { products } from "@/content/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function ProductGrid() {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            The Ecosystem
          </h2>
          <p className="mt-4 max-w-md text-hyped-muted">
            Four surfaces. One culture. Every edge maxxed.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
