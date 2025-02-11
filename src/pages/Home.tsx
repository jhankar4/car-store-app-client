import AboutUsCard from "../components/ui/AboutUsCard";
import Products from "../components/ui/Products";
import HeroSlider from "../components/ui/HeroSlider";
import SpecialOffersCards from "../components/ui/SpecialOffersCards";
import WhyUs from "../components/ui/WhyUs";

export default function Home() {
  return (
    <>
        <HeroSlider />
        <SpecialOffersCards />
        <Products heading={'Featured products'} showItem={8} showFeatured={true} />
        <WhyUs />
        <AboutUsCard />
    </>
  )
}
