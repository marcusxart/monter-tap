import React from "react";
import MaxContainer from "../../components/maxContainer";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#3D6A70] py-[24px]">
        <h1 className="text-[56px] font-bold max-w-[1280px] max-md:text-[20px] w-full mx-auto px-[32px] 2xl:px-0">
          About Us
        </h1>
      </div>
      <MaxContainer>
        <div className="font-medium my-[56px] flex flex-col w-full gap-[24px] [&_ul]:pl-[20px] [&_ul]:flex [&_ul]:flex-col [&_ul]:w-full [&_ul]:gap-[12px]">
          <p>
            About Us Welcome to Monstertap, your new go-to destination for fun,
            relaxation, and stress relief! Designed for those moments when you
            need a break or simply want to pass the time, Monstertap brings you
            a lighthearted, interactive game experience that keeps you
            entertained. Our platform is all about tapping your way to exciting
            in-app perks, with easy-to-reach goals and playful rewards that make
            every moment enjoyable. Our Mission At Monstertap, we believe in
            creating a space where users can unwind, have fun, and escape the
            daily grind. Whether you’re looking to relax after a long day or
            just kill some time during a commute, our platform provides a simple
            yet engaging activity that makes each tap rewarding. Our goal is to
            turn those idle moments into delightful, bite-sized experiences that
            leave you smiling. What We Offer Interactive Fun: Monstertap turns
            casual gameplay into a playful experience where you can collect
            perks just by tapping your way through different stages. Our
            intuitive interface ensures anyone can pick up and play—no
            complicated rules or stressful challenges. Stress-Free Gameplay: We
            designed Monstertap to be your perfect escape. With a calm,
            easy-going vibe, it’s an ideal way to take a breather, clear your
            mind, and enjoy a simple task that doesn’t ask too much of you.
            Universal Access: Available across devices, Monstertap lets you
            enjoy seamless gameplay whether you’re on your phone, tablet, or
            computer. Whenever you need a break, Monstertap is just a tap away.
            Advertising Policy Monstertap is supported by ads that help keep our
            platform accessible to all users. While you’re enjoying your
            gameplay, you may see advertisements that help us sustain and
            enhance the experience. However, engaging with these ads is entirely
            optional, and your gameplay is in no way dependent on them. Our
            priority is to provide a high-quality experience where the fun comes
            first, and ads remain non-intrusive and relevant. Join the Fun Dive
            into Monstertap today and discover how satisfying a simple tap can
            be! Whether you’re here to unwind, pass the time, or just have a bit
            of fun, our platform is here to add a touch of playfulness to your
            day. Start tapping and see what perks you can uncover!
          </p>
        </div>
      </MaxContainer>
    </>
  );
};

export default AboutUs;
