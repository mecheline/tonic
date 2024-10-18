import Blog from "../../components/HomePageComponents/Blog";
import Connect from "../../components/HomePageComponents/Connect";
import ConnectCustomers from "../../components/HomePageComponents/ConnectCustomers";
import Hero from "../../components/HomePageComponents/Hero";
import Services from "../../components/HomePageComponents/Services";
import StartNow from "../../components/HomePageComponents/StartNow";
import Template from "../../components/HomePageComponents/Template";
import Layout from "../../components/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Connect />
      <Template />
      <ConnectCustomers />
      <Blog />
      <StartNow />
    </Layout>
  );
};

export default HomeScreen;
