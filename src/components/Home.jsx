import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> Neen Tech</h1>
          <p>Solutions to all your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            "Welcome to NEEN TECH! We are a team of tech experts dedicated to
            providing top-quality services to our clients. Our mission is to
            help businesses and individuals achieve their technological goals by
            providing innovative solutions and exceptional customer support.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <br />
          <p>
            At <b>NEEN TECH</b>, we are a team of passionate tech enthusiasts
            dedicated to providing top-notch technology solutions to our
            clients. With years of experience in the field, and are committed to
            staying up-to-date with the latest advancements in technology to
            ensure that we always provide the best solutions for our clients.
            Our team of experts works closely with each client to understand
            their unique needs and goals, and develop customized solutions to
            help them achieve success
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div
              style={{
                animationDelay: "1.25s",
              }}
            >
              <AiFillLinkedin />
              <p>Linkedin</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
