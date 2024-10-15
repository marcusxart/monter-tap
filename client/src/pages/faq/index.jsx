import React from "react";
import MaxContainer from "../../components/maxContainer";

const Faq = () => {
  return (
    <>
      <div className="bg-[#3D6A70] py-[24px]">
        <h1 className="text-[56px] font-bold max-w-[1280px] max-md:text-[20px] w-full mx-auto px-[32px] 2xl:px-0">
          Frequently asked questions
        </h1>
      </div>
      <MaxContainer>
        <div className="font-medium my-[56px] flex flex-col w-full gap-[24px] [&_ul]:pl-[20px] [&_ul]:flex [&_ul]:flex-col [&_ul]:w-full [&_ul]:gap-[12px]">
          <ol className="list-decimal pl-[20px]">
            <li>
              <strong>What is Monstertap?</strong> <br />
              Monstertap is a fun and interactive game designed to help you
              relax and pass the time. With simple, engaging gameplay, it’s
              perfect for those moments when you need a quick break or want to
              unwind. Just tap your way through the game and enjoy unlocking
              in-app perks and rewards.
            </li>
            <li>
              <strong>How do I play Monstertap?</strong> <br />
              Playing Monstertap is easy! Just tap the screen to start earning
              in-game perks. The more you play, the more surprises you’ll
              discover. There are no complicated rules—just tap, enjoy, and
              relax!
            </li>
            <li>
              <strong>Do I have to pay to play?</strong> <br />
              No, Monstertap is completely free to play! You can start tapping
              and enjoying the game without spending a dime. Our platform is
              supported by ads, so you might see some ads while you play, but
              engaging with them is entirely optional.
            </li>
            <li>
              <strong>Will I be rewarded for tapping ads?</strong> <br />
              No, Monstertap doesn’t offer rewards for interacting with ads. Our
              ads are there to support the platform and keep the game free for
              everyone. You can enjoy the game without feeling pressured to
              click on any ads.
            </li>
            <li>
              <strong>Is Monstertap available on mobile devices?</strong> <br />
              Yes, Monstertap is designed to be mobile-friendly! You can play on
              your phone, tablet, or computer, so it’s easy to enjoy a quick
              game whenever you need a break, no matter where you are.
            </li>
          </ol>
        </div>
      </MaxContainer>
    </>
  );
};

export default Faq;
