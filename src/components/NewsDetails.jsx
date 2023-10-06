import RightSideNav from "../pages/shared/rightSideNav/RightSideNav";
import Header from "../pages/shared/header/Header";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import LeftSportsCard from "../pages/shared/leftSideNav/LeftSportsCard";
import { useEffect } from "react";
import { useState } from "react";

const NewsDetails = () => {
  const [allNewsCard, setAllNewsCard] = useState([]);
  const newsDetails = useLoaderData();
  const { id } = useParams();
  const location = useLocation();
  const nLocation = location.pathname === "/";
  const aNews = newsDetails.find((news) => news._id === id);
  console.log(aNews);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNewsCard(data));
  }, []);

  const sportsCard = allNewsCard.filter((sport) => sport.category_id === "5");

  return (
    <div>
      <Header />
      <Navbar />
      <div className="p-4 gap-4 grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 md:col-span-3 p-6 border border-gray-200 rounded-md">
          <div>
            <img src={aNews?.image_url} alt="" />
          </div>
          <h2>{aNews?.title}</h2>
          <p>{aNews?.details}</p>
          <Link to={`/`}>
          <button className="rounded-none ">
            <div className="flex items-center p-2 my-3 bg-[#D72050]">
              <FaLongArrowAltLeft />
              <p>All news in this category</p>
            </div>
          </button>
          </Link>
          
        </div>
        <div className="col-span-1">
          <RightSideNav />
        </div>
      </div>
      <div className="mx-auto w-10/12">
      {nLocation ? (
            // Home Div
            <div>
              <h2 className="text-2xl text-center font-semibold">Editors Insight</h2>
              <div className="grid md:grid-cols-3 justify-center gap-2">
                {sportsCard.map((news) => (
                  <LeftSportsCard key={news.id} news={news}></LeftSportsCard>
                ))}
              </div>
            </div>
          ) : (
            // News Details Div
            <div className="">
              <h2 className="text-2xl text-center font-semibold">
                Editors Insight
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
                {sportsCard.map((news) => (
                  <LeftSportsCard key={news.id} news={news}></LeftSportsCard>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default NewsDetails;
{
  /*  */
}
