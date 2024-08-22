import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import FeaturesComponent from "../../components/featuresComponent/FeaturesComponent";
import Banner from "../../components/banner/Banner";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";

//banner images
import banner_watch from "../../assets/banner_watch.png";
import banner_headphone from "../../assets/banner_headphone.png";
import Loader from "../../components/loader/Loader";

const BannerData1 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "25 May to 19 Jun",
  image: banner_headphone,
  title2: "Air Solo Bass",
  title3: "Summer Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquid.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "35% OFF",
  title: "Happy Hours",
  date: "25 May to 19 Jun",
  image: banner_watch,
  title2: "Smart Solo",
  title3: "Summer Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquid.",
  bgColor: "#2dcc6f",
};

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <FeaturesComponent />
      <Banner data={BannerData1} />
      <HomePageProductCard />
      <Banner data={BannerData2} />
    </Layout>
  );
}
