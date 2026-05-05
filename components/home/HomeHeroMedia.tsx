import type { HeroMedia } from "@/types/site_content";

interface HomeHeroMediaProps {
  mediaItems: HeroMedia[];
  activeIndex: number;
  failedVideos: string[];
  onVideoError: (videoUrl: string, mediaIndex: number) => void;
}

const HomeHeroMedia = ({
  mediaItems,
  activeIndex,
  failedVideos,
  onVideoError,
}: HomeHeroMediaProps) => {
  const activeMedia = mediaItems[activeIndex % mediaItems.length];
  const playable = mediaItems.some(
    (item) => item.videoUrl && !failedVideos.includes(item.videoUrl),
  );

  if (!playable) {
    return (
      <img
        src={activeMedia.posterImageUrl}
        alt={activeMedia.alt}
        className="h-[68vh] w-full object-cover object-center hero-poster-motion"
      />
    );
  }

  return (
    <div className="relative h-[68vh] w-full overflow-hidden">
      {mediaItems.map((item, index) => {
        const videoUrl = item.videoUrl;
        if (!videoUrl || failedVideos.includes(videoUrl)) return null;
        const isActive = index === activeIndex;

        return (
          <video
            key={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
            onError={() => onVideoError(videoUrl, index)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
};

export default HomeHeroMedia;
