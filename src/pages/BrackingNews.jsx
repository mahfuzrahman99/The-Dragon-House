import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
  const [allNews, setAllNewsCard] = useState([])

  useEffect(()=>{
    fetch('news.json')
    .then(response => response.json())
    .then(data => setAllNewsCard(data))
  },[])

  return (
    <div className="flex justify-center items-center">
      <p className="md:btn btn-sm pt-1 uppercase font-semibold bg-red-400 rounded-none  md:btn-error">Latest</p>
      <Marquee className="text-2xl font-bold" pauseOnHover={true} speed={100}>
        {
          allNews.slice(0,26).map(news => <Link to={`/news/${news._id}`} className="mr-12" key={news._id}>{news.title.slice(0,15)}</Link>)
        }
      </Marquee>
      
    </div>
  );
};

export default BrakingNews;
