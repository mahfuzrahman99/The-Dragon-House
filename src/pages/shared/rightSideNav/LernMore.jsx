
import BG1 from "../../../assets/bg.png";

const LearnMore = () => {
    return (
        <div>
            <div
        className="space-y-3 text-center p-8 py-12"
        style={{
          backgroundImage: `url(${BG1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-white">
          Create an Amazing Newspaper
        </h1>
        <p className="text-base font-normal text-white">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <div className="flex justify-center">
          <button className="btn btn-secondary text-white rounded-none">
            Learn More
          </button>
        </div>
      </div>
        </div>
    );
};

export default LearnMore;