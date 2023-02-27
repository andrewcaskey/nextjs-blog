import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLaptop, FaTwitter } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hi,{" "}
          <span className="bg-blue-400 text-white rounded px-1 dark:bg-blue-500">
            I’m Andrew
          </span>{" "}
          . Nice to meet you.
        </h2>
        <p className="text-gray-600 mt-4 dark:text-blue-200">
          I am a developer currently pursuing a Bachelors of Science in Information Technology with a minor in Mathematics 
          at the University of Missouri. My field of interests include Web Development, Security, 3D Animation,
          and aritifical intelligence. You can check out my personal portfolio at andrewcaskey.com
        </p>

        <div className="text-center pt-8">
          <button className="bg-blue-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-blue-600">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://andrewcaskey.com"
            >
              See My Works
            </a>
          </button>

          <button className="bg-blue-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-blue-600">
            <FaTwitter />
            <a
              className="twitter-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/andrewcaskey"
            >
              Follow Me
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
