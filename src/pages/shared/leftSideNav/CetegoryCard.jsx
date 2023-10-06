import BrakingNews from "../../BrackingNews";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import RightSideNav from "../rightSideNav/RightSideNav";
import LeftSideNav from "./LeftSideNav";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import NewsCards from "../../NewsCards";
// import { useEffect } from "react";
// import { useState } from "react";
// import LeftSportsCard from "./LeftSportsCard";

const CetegoryCard = () => {
  const { id } = useParams();
  const allNews = useLoaderData();
//   const [allNewsCard, setAllNewsCard] = useState([]);

  const selectedNews = allNews.filter(
    (newsCard) => newsCard.category_id === id
  );

//   useEffect(() => {
//     fetch("/news.json")
//       .then((res) => res.json())
//       .then((data) => setAllNewsCard(data));
//   }, []);

//   const sportsCard = allNewsCard.filter((sport) => sport.category_id === "4")

  return (
    <div>
      <Header />
      <BrakingNews />
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <LeftSideNav />
        </div>
        <div className=" md:col-span-1 lg:col-span-2 p-4">
          {selectedNews.length == 0 ? (
            <Navigate to={`/`} />
          ) : (
            <div className="flex flex-col gap-2">
              {selectedNews.map((aNews) => (
                <NewsCards key={selectedNews.id} news={aNews}></NewsCards>
              ))}
            </div>
          )}
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
      
    </div>
  );
};

export default CetegoryCard;

// /* eslint-disable react/prop-types */

// import { useState, useEffect } from "react";

// const CategoryCard = ({ category }) => {
//     const [categoryCard, setCategoryCard] = useState([]);
//     const [onCategory, setOnCategory] = useState([]);

//     useEffect(() => {
//         fetch('news.json')
//         .then((res) => res.json())
//         .then((data) => setCategoryCard(data));
//     }, []);

//     useEffect(() => {
//         const finalCategory = categoryCard.filter(item => item.category_id === category.id);
//         setOnCategory(finalCategory);
//     }, [categoryCard, category.id]);

//     return (
//         <div>
//             <h2 className="text-xl font-semibold">{category.name}</h2>
//             {onCategory.map((news) => (
//                 <div key={news.id}>
//                     {news.title}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CategoryCard;
