import React from "react"
import PageTitle from "./PageTitle";

export default function About() {
  const h3Style = "text-lg font-semibold text-primary dark:text-light mb-4";
  const pStyle = "text-gray-600 dark:text-lighter";

  return (
    <div className="max-w-[1152px] m-h-[852px] mx-auto px-6 py-8 font-primary">
      <PageTitle title="About me" />
      <p className="leading-6 mb-8 text-gray-600 dark:text-lighter">
        <span className="text-lg font-semibold text-primary dark:text-light">
          My Little Cookbook
        </span>{" "}
        is an online cookbook by{" "}
        <span className="text-lg font-semibold text-primary dark:text-light">
          by Ping W.
        </span>
        , dedicated to collect recipes for cooking and baking inspirations.
      </p>

      <h2 className="text-2xl leading-[32px] font-bold text-primary dark:text-light mb-6">
        More about this initiative
      </h2>

      <div>
        <h3 className={h3Style}>A Foodie</h3>
        <p className={pStyle}>
          I'm a foodie. It was in Paris where I developed
          my real passion for cooking and baking. It was my de-stress ritual to prapare healthy home-cooking food every week, discover new recipes from cooking magazines, cookbooks and online resources. I used to handwrite the ones I found from various online sources (not in 21st century, right? 😉). Unfortunately, I had to get rid of most of them during my move from Paris to Munich. That's when I started to think about keeping them online.
        </p>
      </div>

      <div className="mt-4">
        <h3 className={h3Style}>A Geek</h3>
        <p className={pStyle}>
          I was getting interested in tech during my study in a French Business School. Big Data was the hot word back then, and I felt having more chances to get a job in tech in Europe compared to more generic business jobs (both right and wrong). After lots of trial and error, I finally integrated a coding bootcamp and got my credentials. This web application is an opportunity to combine what I love personally and where I want to go professionally. It's already a success if you're reading this. Enjoy!
        </p>
      </div>


    </div>
  )
}
