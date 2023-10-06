import { useLoaderData } from "react-router-dom";
import BrakingNews from "./BrackingNews";
import Header from "./shared/header/Header";
import LeftSideNav from "./shared/leftSideNav/LeftSideNav";
import Navbar from "./shared/navbar/Navbar";
import RightSideNav from "./shared/rightSideNav/RightSideNav";
import NewsCards from "./NewsCards";

const Home = () => {
  const news = useLoaderData();
  return (
    <div className="font-poppins">
      <Header />
      <BrakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl text-center font-semibold font-poppins">
            Dragon News Home
          </h2>
          <div className="flex flex-col gap-3">
          {news.map((aNews) => (
            <NewsCards key={news.id} news={aNews}></NewsCards>
          ))}
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
