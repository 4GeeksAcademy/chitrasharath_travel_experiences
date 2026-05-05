import Link from "next/link";

import { expertiseTiles } from "@/data/site_content";

const HomeExpertiseTiles = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-12">
      <div className="grid gap-5 md:grid-cols-3">
        {expertiseTiles.map((tile) => (
          <Link key={tile.title} href={tile.href} className="group relative overflow-hidden rounded-2xl">
            <img src={tile.imageUrl} alt={tile.title} className="h-56 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-4 font-heading text-2xl uppercase text-white">
              {tile.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeExpertiseTiles;
