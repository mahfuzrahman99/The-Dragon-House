/* eslint-disable react/prop-types */
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { AiFillEye } from "react-icons/ai";

const NewsCards = ({ news }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {
    _id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <div>
      <div className="card border border-gray-200">
        <div className="flex justify-between items-center bg-[#F3F3F3] p-2 rounded-t-xl">
          <div className="flex items-center gap-2">
            <div>
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={thumbnail_url}
                alt={title}
              />
            </div>
            <div>
              <h1>{author.name}</h1>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322V3.322Z"
                stroke="#706F6F"
              />
            </svg>
            <BsShare className="text-xl" />
          </div>
        </div>
        <div className="p-4">
            <h2>{title}</h2>
            <div>
                <img src={image_url} alt="" />
            </div>
            {
                details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-red-500">Read More...</Link></p> 
                : <p>{details}</p>
            }
            <div className="flex justify-between items-center">
                <div>{rating.number}</div>
                <div>{total_view}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
