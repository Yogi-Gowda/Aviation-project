// AboutUs.jsx
import React from 'react';
import './styles/AboutUs.css';

function AboutUs() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/public/images/altitudealchemy.png" alt="altitudealchemy" />
        </div>
      </header>

      <nav>
        <a href="Homepage.html">HOME</a>
        <div className="dropdown">
          <button className="dropbtn">
            COMPANIES<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="Boeingyuv.html">Boeing </a>
            <a href="Hal.html">Hindustan Aeronatics</a>
            <a href="Airbus.html">Airbus</a>
            <a href="Dassault.html">Dassault Aviation</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            MODELS<i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="Boeing_models.html">Boeing </a>
            <a href="Hal_models.html">Hindustan Aeronatics</a>
            <a href="Airbus_models.html">Airbus</a>
            <a href="Dassault_models.html">Dassault Aviation</a>
          </div>
        </div>

        <a href="Updatespage.html">UPDATES</a>
        <a href="Aboutus.html">ABOUT US</a>
      </nav>

      <h1>About Us</h1>

      <h2>Welcome to our company!</h2>
      <p style={{ textAlign: "center" }}>
        At Altitude Alchemy, we take pride in being your premier destination for comprehensive information about aircraft. Whether you're an aviation enthusiast, a potential buyer, or someone eager to learn more about the fascinating world of aviation, you've come to the right place.
      </p>

      <h2>Aviation Education for Everyone</h2>
      <p>
        Altitude Alchemy goes beyond specifications and prices; we're passionate about aviation education. Our platform offers engaging content, articles, and guides to help demystify the world of aircraft. Learn about the latest technological advancements, industry trends, and the intricate details that make each aircraft unique. We believe that an informed audience is an empowered one.
      </p>

      <h2>Join Our Community</h2>
      <p>
        Altitude Alchemy is not just a website; it's a community of aviation enthusiasts, professionals, and curious minds. Connect with like-minded individuals, share your passion for flight, and stay updated on the latest developments in the aviation industry. Our forums and social media channels provide a space for discussions, insights, and networking.
      </p>
      <p style={{ textAlign: "center" }}>
        Whether you're here to explore aircraft specifications, understand prices, or simply indulge your curiosity about flying, Altitude Alchemy welcomes you on this exciting journey through the skies. Elevate your knowledge, soar with us, and let the fascination of flight inspire you.
      </p>
      <p style={{ textAlign: "center" }}>Fly high with Altitude Alchemy!</p>

      <h2>Our Story</h2>
      <p>
        We are the students of UG(undergraduation) studing at Chanakya University.
        As part of our academics we have done this web page.
      </p>

      <h2>Our Missions</h2>
      <p>
        Our website aims to provide a comprehensive resource for aviation enthusiasts, pilots, and industry professionals.
        We strive to offer up-to-date news and information on the latest developments in aviation technology, as well as reviews of
        airlines and aircraft. Our goal is to create a community of like-minded individuals who share a passion for aviation and a desire
        to stay informed about the latest trends and innovations in the industry. The is kind of outsourcing/third-party of other websites,
        it will include pilot , flight ,and many more with your and our suggestions
      </p>

      <h2>Here are the team members</h2>

      <div className="row">
        <div className="column">
          <div className="card" style={{ width: "200px" }}>
            <img src="/aboutus_1.jfif" alt="yateesh" style={{ width: "100%" }} />
            <h2>Yateesh T M</h2>
            <p className="title">Designer</p>
            <p>Student of Chanakya University persuing BCA degree.</p>
          </div>
        </div>

        <div className="column">
          <div className="card" style={{ width: "200px" }}>
            <img src="/aboutus_1.jfif" alt="kousumi" style={{ width: "100%" }} />
            <h2>Kousumi Paul</h2>
            <p className="title">Designer</p>
            <p>Student of Chanakya University persuing BCA degree.</p>
          </div>
        </div>

        <div className="column">
          <div className="card" style={{ width: "200px" }}>
            <img src="/aboutus_1.jfif" alt="yogesh" style={{ width: "100%" }} />
            <h2>Yogesh K Gowda</h2>
            <p className="title">Designer</p>
            <p>Student of Chanakya University persuing BCA degree.</p>
          </div>
        </div>

        <div className="column">
          <div className="card" style={{ width: "200px" }}>
            <img src="/aboutus_1.jfif" alt="yuvaraj" style={{ width: "100%" }} />
            <h2>A Yuvaraj</h2>
            <p className="title">Designer</p>
            <p>Student of Chanakya University persuing BCA degree.</p>
          </div>
        </div>
      </div>

      <br />

      <article className="all-browsers">
        <h1 style={{ textAlign: "center" }}>References & Credits:</h1>

        <article className="browser">
          <p style={{ textAlign: "center" }}>https://www.dassault-aviation.com/en/ </p>
        </article>

        <article className="browser">
          <p style={{ textAlign: "center" }}>https://hal-india.co.in/ </p>
        </article>

        <article className="browser">
          <p style={{ textAlign: "center" }}>https://www.boeing.com/ </p>
        </article>

        <article className="browser">
          <p style={{ textAlign: "center" }}>https://www.airbus.com/en </p>
        </article>

        <article className="browser">
          <p style={{ textAlign: "center" }}>
            Pinterest (pinterest) - Profile | Pinterest
          </p>
        </article>

        <article className="browser">
          <p style={{ textAlign: "center" }}>www.w3schools.com</p>
        </article>
      </article>

      <br />

      <footer>
        <p>&copy; 2023 Altitude Alchemy. All Rights Reserved | info@altitudealchemy.com</p>
        <br />
        <h3>Follow Us on:</h3>
        <p>Whatsapp : </p>
        <p>X : </p>
        <p>Instagram : </p>
        <p>G-mail : </p>
      </footer>
    </>
  );
}

export default AboutUs;