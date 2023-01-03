import React from "react";
import HomePageStyle from "../src/Styles/Home.module.css";
import blogLogo from "../src/Img/3.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={HomePageStyle.container}>
      <section
        className={`${HomePageStyle.sections} ${HomePageStyle.section1}`}
      >
        <div>
          <img src={blogLogo} alt="" />
        </div>

        <div className={HomePageStyle.title}>
          <p>
            I am <span> Nedjar Anis</span> Welcome to my <span>Homepage</span>
          </p>
        </div>
        <div className={HomePageStyle.bottomNav}>
          <p>
            You can browse my page with the
            <span>
              <Link className={HomePageStyle.link} to="/Contacts">
                Contacts
              </Link>
            </span>
            or
            <span>
              <Link className={HomePageStyle.link} to="/Blog">
                Blog
              </Link>
            </span>
            links
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
