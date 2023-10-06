import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSportsCard from "./LeftSportsCard";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [allNewsCard, setAllNewsCard] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNewsCard(data));
  }, []);

  const sportsCard = allNewsCard.filter((sport) => sport.category_id === "4");

  return (
    <div className="border border-gray-50">
      <h1 className="text-3xl font-poppins text-center font-bold">All Categories</h1>
      <div className="bg-[#E7E7E7] rounded-lg mt-3">
        <h2 className="text-[#403F3F] text-center p-6 text-xl font-semibold">
          National News
        </h2>
      </div>
      <div>
        {categories.map((category) => (
          <Link
            className="block m-4 text-xl font-semibold px-4"
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div>
        {sportsCard.map((news) => (
          <LeftSportsCard key={news.id} news={news}/>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
