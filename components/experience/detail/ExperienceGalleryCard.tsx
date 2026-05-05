interface ExperienceGalleryCardProps {
  title: string;
  gallery: string[];
}

const ExperienceGalleryCard = ({ title, gallery }: ExperienceGalleryCardProps) => {
  return (
    <section className="space-y-4 rounded-3xl border border-[var(--color-border)] bg-white p-5">
      <img
        src={gallery[0]}
        alt={`${title} gallery`}
        className="h-[28rem] w-full rounded-2xl object-cover"
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((imageUrl) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt="Experience gallery thumbnail"
            className="h-24 w-full rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceGalleryCard;
