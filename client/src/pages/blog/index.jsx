import React from "react";
import MaxContainer from "../../components/maxContainer";

const Blog = () => {
  return (
    <>
      <div className="bg-[#3D6A70] py-[24px]">
        <h1 className="text-[56px] font-bold max-w-[1280px] max-md:text-[20px] w-full mx-auto px-[32px] 2xl:px-0">
          Blog
        </h1>
      </div>
      <MaxContainer>
        <div className="font-medium my-[56px] flex flex-col w-full gap-[24px] items-center justify-center">
          <h2
            className="text-[56px] font-bold max-md:text-[24px] text-center"
            style={{
              background:
                "linear-gradient(85.98deg, #0B9D9A 21.68%, #CB9C22 58.8%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Blog Coming Soon
          </h2>
        </div>
      </MaxContainer>
    </>
  );
};

export default Blog;
