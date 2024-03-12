import React from "react";
import "./Hero.css";
import { HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup"
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Leftside */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most suitable <br />
              property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter searchbar">
            <HiLocationMarker color="var(--blue)" size={30} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9190} duration={4} />

                <span>+</span>
              </span>
              <span className="secondaryText">Premium products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2010} duration={4} />

                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />

                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winnings</span>
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
