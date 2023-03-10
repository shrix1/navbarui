import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

const Blog: React.FC = () => {
  return (
    <main className="flex justify-center h-full">
      <section className="flex lg:w-[55%] w-screen lg:justify-center px-4 flex-col">
        <div className="flex flex-col pt-10 gap-5">
          <div className="text-[14px] font-bold tracking-wide">
            <span className="text-gray">Home</span> {">"}
            <span className="text-gray"> Articles</span> {"> "}
            <span className="text-black/80">
              Adani Wilmar Share Price Triples
            </span>
          </div>

          <h1 className="text-3xl font-bold text-black/80">
            Adani Wilmar Share Price Nearly Triples Since Listing: Should You
            Buy, Sell or Hold?
          </h1>

          <div className="flex flex-col text-[11px] tracking-wider text-gray/80 -mt-4">
            <span> Tue Jun 07 2022</span>{" "}
            <span> Last updated: Wed Jun 22 2022</span>
          </div>
        </div>

        <section className="flex justify-center gap-10 flex-col lg:flex-row">
          <div className="flex flex-col pt-10 gap-5 lg:w-[700px]">
            <img
              src="https://ind-strapi-cms.s3.ap-south-1.amazonaws.com/xlarge_Slide_16_9_254_a5ae95b280.jpg"
              alt="article Image"
            />

            <div className="text-2xl flex gap-3 -mt-2">
              <a href="/">
                <AiFillTwitterCircle className="text-tblue" />
              </a>
              <a href="/">
                <TiSocialLinkedinCircular className=" text-blue-700 text-[28px] -mt-[1px]" />
              </a>
              <a href="/">
                <RiWhatsappFill className=" text-green-500" />
              </a>
            </div>

            <ul className="text-xl font-[500] text-black/70 list-outside list-disc px-6 ">
              <li>
                Adani Wilmar shares have tripled since its IPO in February, as
                edible oil prices jumped on the back of supply disruptions due
                to the Russia-Ukraine war, palm oil export ban by Indonesia and
                favorable sentiments for Adani Group shares.{" "}
              </li>
              <li className="pt-4">
                The shares closed at Rs 680 on 6th June, up nearly 3x from IPO
                price of Rs 230 per share.
              </li>
              <li className="pt-4">
                The rally in the share prices has made Adani Wilmar the best
                performing IPO for 2022 in all of Asia.{" "}
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center lg:block">
            <div className="w-[300px] h-[420px] rounded-md shadow-xl flex flex-col p-5">
              <h1 className="text-2xl py-3 text-center">Invest In</h1>
              <ul className="flex flex-col gap-5 text-center">
                <li className="py-3 bg-orange-200/50 rounded-md font-bold">
                  <a href="/"> INDstocks</a>
                </li>
                <li className="py-3 bg-blue-200/50 rounded-md font-bold">
                  <a href="/"> INDstocks</a>
                </li>
                <li className="py-3 bg-red-200/50 rounded-md font-bold">
                  <a href="/"> INDstocks</a>
                </li>
                <li className="py-3 bg-yellow-200/50 rounded-md font-bold">
                  <a href="/"> INDstocks</a>
                </li>
                <li className="py-3 bg-green-200/50 rounded-md font-bold">
                  <a href="/"> INDstocks</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Blog;
