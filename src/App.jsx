import { useEffect, useState } from "react";
import "./App.css";
import fetchCourseData from "./api/fetchCourseData";
import TitleDescription from "./components/TitleDescription";
import Trailer from "./components/Trailer";
import CTA from "./components/CTA";
import Checklist from "./components/Checklist";
import Instructors from "./components/Instructors";
import CourseLayout from "./components/CourseLayout";
import Pointers from "./components/Pointers";
import CourseDetails from "./components/CourseDetails";
import PDFDownload from "./components/PDFDownload";
import { Helmet } from "react-helmet";

function App() {
  const [data, setData] = useState(null);
  const [lang, setLang] = useState("bn");

  //  console.log(data?.data?.title)

  //  if(data){
  //   console.log('form data', data.data.title)
  //  }

  useEffect(() => {
    fetchCourseData(lang).then((res) => {
      console.log("API Response:", res.data);
      setData(res);
    });
  }, [lang]);

  if (!data) return <div className="text-center p-10">Loading...</div>;
  console.log("SEO", data.data.seo.title);

  return (
    <>
      <div>
        <Helmet>
          <title>{data?.data?.seo?.title || "Default Title"}</title>
          <meta name="description" content={data?.data?.seo?.description} />
        </Helmet>
        <nav>
          <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item-2</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">10MNSchool</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <details>
                    <summary>Item-2</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex justify-end">
                <button
                  onClick={() => setLang("en")}
                  className={`mr-2 px-3 py-1 rounded ${
                    lang === "en" ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("bn")}
                  className={`px-3 py-1 rounded ${
                    lang === "bn" ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  BN
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
          {/* Top Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div>
                <TitleDescription
                  title={data?.data?.title}
                  description={data?.data?.description}
                />
              </div>
              <Instructors sections={data?.data?.sections} />
              <CourseLayout sections={data?.data?.sections} />
              <Pointers sections={data?.data?.sections} />
              <PDFDownload sections={data?.data?.sections}></PDFDownload>
              {/* <Instructors
              sections={data?.data?.sections}
              title="Course Exclusive Feature"
            /> */}
              <CourseDetails sections={data?.data?.sections} />
            </div>
            <div className="p-1 ">
              <div className="border-t border-r border-l border-gray-400 rounded rounded-b-none p-1">
                <Trailer media={data?.data?.media} />
              </div>

              <div className="sticky top-1 border-b border-r border-l border-gray-400 rounded-t-none rounded p-1">
                <div>
                  <CTA cta={data?.data?.cta_text} />
                </div>
                <div>
                  <Checklist items={data?.data?.checklist} />
                </div>
              </div>
            </div>
          </div>

          {/* Below Grid (Single Column) */}
        </div>
      </div>
    </>
  );
}

export default App;
