import Link from "next/link";

import { audienceTiles } from "@/data/site_content";

const HomeAudienceTiles = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
      <div className="grid gap-5 md:grid-cols-3">
        {audienceTiles.map((tile) => (
          <Link key={tile.title} href={tile.href} className="group relative block overflow-hidden rounded-3xl">
            <img
              src={tile.imageUrl}
              alt={tile.title}
              className="h-[22rem] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
            <p className="absolute inset-x-0 bottom-0 p-5 font-heading text-2xl uppercase leading-tight text-white">
              {tile.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeAudienceTiles;
