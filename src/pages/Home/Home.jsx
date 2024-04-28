import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import CraftsItem from "../../components/CraftsItem/CraftsItem";

const Home = () => {
  const loadedcrafts = useLoaderData();

  return (
    <div className="mx-2">
      <Header></Header>
      <CraftsItem crafs={loadedcrafts}></CraftsItem>
    </div>
  );
};

export default Home;
