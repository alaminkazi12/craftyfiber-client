import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import CraftsItem from "../../components/CraftsItem/CraftsItem";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import CraftCategory from "../../components/CraftCategory/CraftCategory";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  const loadedcrafts = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text"></span>
      </div>
    );
  }

  return (
    <div className="mx-2">
      <Header></Header>
      <CraftsItem crafs={loadedcrafts}></CraftsItem>
      <CraftCategory></CraftCategory>
      <Faq></Faq>
    </div>
  );
};

export default Home;
