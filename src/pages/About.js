import React from 'react';
import image1 from "../components/img/Mario_Adrian_1low.jpeg";
import image2 from "../components/img/Mario_Adrian_2up.jpg";
import "../CSS/About.css"

const aboutData = {
  title: "Little Lemon",
  subTitle: "Munich",
  description: "Little Lemon opened in 1995 by two Schmizt brothers. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years late ",
  image1,
  image2,
};

const About = () => {
  return (
    <section>
      <div className="app_section-about">
        <div className="app_about-content">
          <h1 className="app_about-title">{aboutData.title}</h1>
          <br />
          <h4 className="app_about-subtitle">{aboutData.subTitle}</h4>
          <br />
          <p className="app_about-description">
            {aboutData.description}
            <br />
          </p>
        </div>

        <div className="image-holder">
          <img className="about-1" src={image1} alt="Little Lemon restaurant cuisine 1" />
          <img className="about-2" src={image2} alt="Little Lemon restaurant cuisine 2" />
        </div>
      </div>
    </section>
  );
};

export default About;
