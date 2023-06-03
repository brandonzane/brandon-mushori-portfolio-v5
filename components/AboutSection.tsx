import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "AWS" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-12 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Brandon and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              and web developer based in Harare, ZW.
            </p>
            <br />
            <p>
              I attended the University of Namibia where I did a BS in Computer
              Science and have been working in the the field and other related
              fields.
            </p>
            <br />
            <p>
              I have a particular set of skills that I utiilise on a daily basis
              that allow me to provide guaranteed results and functionality in
              my projects
            </p>
            <br />
            <p>
              I believe that if{" "}
              <span className="font-bold text-sky-500">
                you don&#39;t know something today
              </span>{" "}
              then make sure that when you&#39;re asked the same question again
              or asked to do the same task again,{" "}
              <span className="font-bold text-sky-500">
                your answer shouldn&#39;t be a I don&#39;t know{" "}
              </span>
              🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-sky-100 px-4 py-2 mr-2 mt-2 text-gray-400 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/shapes.webp"
              alt=""
              width={300}
              height={300}
              className="hidden m-6 md:block md:relative md:bottom-4 md:left-32 md:z-0 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
