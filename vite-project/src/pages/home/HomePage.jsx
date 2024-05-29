import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import FeaturesComponent from "../../components/featuresComponent/FeaturesComponent";
import Banner from "../../components/banner/Banner";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";


const BannerData1 = {
  discount:"30% OFF",
  title:"Fine Smile",
  date:"25 May to 19 Jun",
  image:"https://www.boat-lifestyle.com/cdn/shop/products/1acf35c5-1ef2-4d34-859f-e085681e6d08.png?v=1625046395",
  title2:"Air Solo Bass",
  title3:"Summer Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquid.",
  bgColor: "#f42c37",
}

    const BannerData2 = {
      discount:"35% OFF",
      title:"Happy Hours",
      date:"25 May to 19 Jun",
      image:"https://cdn.mos.cms.futurecdn.net/XH8BpGpYEEvmp8D7bSKHiW-320-80.png",
      title2:"Smart Solo",
      title3:"Summer Sale",
      title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquid.",
      bgColor: "#2dcc6f",
  }

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <FeaturesComponent />
      <Banner data={BannerData1}/>
      <HomePageProductCard />
      <Banner data={BannerData2}/>
    </Layout>
  )
}
