import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import banner from "../img/banner.jpg";

const Home = () => {
  return (
    <Fragment>
      {/*============== banner =================== */}
      <div>
        <img src={banner} alt="" />
        <div className="h-14 -mt-8 flex justify-center">
          <Link
            to="/items"
            className="bg-gradient-to-r from-[#b10f10] to-[#8d0404] hover:from-[#201a1a] hover:to-[#201a1a] text-white font-semibold px-4 py-4 rounded-sm border-4 border-white text-xm md:text-xl"
          >
            Create your own gift Box
          </Link>
        </div>
      </div>

      {/*=============== about ===============*/}
      <div className="my-9 w-10/12 mx-auto">
        <SectionTitle text="About Our Services"></SectionTitle>

        <div className="flex flex-col xl:flex-row items-center justify-around">
          <div className="basis-1/2">
            <p>
              Soft Gift is a Bangladeshi online gift shop and we deliver gift in
              Bangladesh. Here you can order gifts and flowers online to be
              delivered to your friends, family and business clients in
              Bangladesh. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odit itaque sed rem temporibus asperiores atque consequuntur
              architecto, tempora dignissimos necessitatibus, accusamus vel hic
              nostrum eius quos tenetur harum, soluta ratione qui eum eaque
              labore! Vitae voluptates, fuga tempore omnis quas blanditiis
              cumque quisquam, accusantium beatae laudantium rerum repudiandae
              perferendis, laboriosam impedit! Dolor, placeat cupiditate. Ex
              quos ratione commodi consequatur, veritatis velit sapiente sunt
              adipisci deleniti assumenda est! Enim fugiat nisi corrupti, eos
              inventore debitis, nobis natus quidem quod illo esse fuga
              perspiciatis ipsum magni quos nostrum quam sunt porro laboriosam
              unde explicabo dicta assumenda! Repudiandae veniam ad ut cum
              minima.
            </p>
          </div>
          <div className="">
            <img
              src="https://www.upoharbd.com/images/bangladeshi-map.gif"
              alt="bdMap"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Link
          to="/items"
          className="bg-gradient-to-r from-[#b10f10] to-[#8d0404] hover:from-[#201a1a] hover:to-[#201a1a] text-white font-semibold px-4 py-3 rounded-lg"
        >
          Create your own gift Box
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
