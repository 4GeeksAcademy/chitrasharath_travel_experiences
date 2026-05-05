import HomeAudienceTiles from "@/components/home/HomeAudienceTiles";
import HomeEditorialQuote from "@/components/home/HomeEditorialQuote";
import HomeExpertiseTiles from "@/components/home/HomeExpertiseTiles";
import HomeFeaturedExperiences from "@/components/home/HomeFeaturedExperiences";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeIntroSection from "@/components/home/HomeIntroSection";
import HomePressStrip from "@/components/home/HomePressStrip";
import HomeSeasonalFeature from "@/components/home/HomeSeasonalFeature";
import HomeStoryCollage from "@/components/home/HomeStoryCollage";
import HomeTestimonialSection from "@/components/home/HomeTestimonialSection";
import HomeWhyUsSection from "@/components/home/HomeWhyUsSection";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeIntroSection />
      <HomePressStrip />
      <HomeAudienceTiles />
      <HomeWhyUsSection />
      <HomeSeasonalFeature />
      <HomeTestimonialSection />
      <HomeFeaturedExperiences />
      <HomeExpertiseTiles />
      <HomeEditorialQuote />
      <HomeStoryCollage />
    </div>
  );
};

export default Home;