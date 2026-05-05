import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experiences";

const HomeFeaturedExperiences = () => {
  const featured = experiences.filter((experience) => experience.featured).slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
      <h2 className="font-heading text-4xl uppercase md:text-5xl">Featured experiences</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default HomeFeaturedExperiences;
