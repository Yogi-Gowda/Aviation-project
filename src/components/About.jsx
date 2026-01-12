// AboutUs.jsx
import React from 'react';
import './styles/AboutUs.css';
// If you use images from public folder:
// import logo from '../public/altitudealchemy.PNG';
// import teamPhoto from '../public/aboutus_1.jfif';

const AboutUs = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="/altitudealchemy.PNG" alt="Altitude Alchemy Logo" />
        </div>
      </header>

      <nav>
        <a href="/">HOME</a>

        <div className="dropdown">
          <button className="dropbtn">
            COMPANIES <span style={{ fontSize: '12px' }}>▼</span>
          </button>
          <div className="dropdown-content">
            <a href="/boeing">Boeing</a>
            <a href="/hal">Hindustan Aeronautics</a>
            <a href="/airbus">Airbus</a>
            <a href="/dassault">Dassault Aviation</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            MODELS <span style={{ fontSize: '12px' }}>▼</span>
          </button>
          <div className="dropdown-content">
            <a href="/boeing-models">Boeing</a>
            <a href="/hal-models">Hindustan Aeronautics</a>
            <a href="/airbus-models">Airbus</a>
            <a href="/dassault-models">Dassault Aviation</a>
          </div>
        </div>

        <a href="/updates">UPDATES</a>
        <a href="/about-us">ABOUT US</a>
      </nav>

      <h1>About Us</h1>

      <h2>Welcome to our company!</h2>
      <p>
        At Altitude Alchemy, we take pride in being your premier destination for comprehensive information about aircraft. 
        Whether you're an aviation enthusiast, a potential buyer, or someone eager to learn more about the fascinating world of aviation, 
        you've come to the right place.
      </p>

      <h2>Aviation Education for Everyone</h2>
      <p>
        Altitude Alchemy goes beyond specifications and prices; we're passionate about aviation education. 
        Our platform offers engaging content, articles, and guides to help demystify the world of aircraft. 
        Learn about the latest technological advancements, industry trends, and the intricate details that make each aircraft unique. 
        We believe that an informed audience is an empowered one.
      </p>

      <h2>Join Our Community</h2>
      <p>
        Altitude Alchemy is not just a website; it's a community of aviation enthusiasts, professionals, and curious minds. 
        Connect with like-minded individuals, share your passion for flight, and stay updated on the latest developments in the aviation industry.
      </p>
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Fly high with Altitude Alchemy!
      </p>

      <h2>Our Story</h2>
      <p>
        We are the students of UG (undergraduation) studying at Chanakya University.
        As part of our academics we have done this web page.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our website aims to provide a comprehensive resource for aviation enthusiasts, pilots, and industry professionals.
        We strive to offer up-to-date news and information on the latest developments in aviation technology, as well as reviews of
        airlines and aircraft. Our goal is to create a community of like-minded individuals who share a passion for aviation.
      </p>

      <h2>Here are the team members</h2>

      <div className="row">
        {[
          { name: 'Yateesh T M', role: 'Designer' },
          { name: 'Kousumi Paul', role: 'Designer' },
          { name: 'Yogesh K', role: 'Designer' },
          { name: 'A Yuvaraj', role: 'Designer' },
        ].map((member, index) => (
          <div className="column" key={index}>
            <div className="card">
              <img
                src="/aboutus_1.jfif"
                alt={member.name}
                style={{ width: '100%' }}
              />
              <h2>{member.name}</h2>
              <p className="title">{member.role}</p>
              <p>Student of Chanakya University pursuing BCA degree.</p>
            </div>
          </div>
        ))}
      </div>

      <article className="all-browsers">
        <h1 style={{ textAlign: 'center' }}>References & Credits</h1>

        <div className="browser">
          <p style={{ textAlign: 'center' }}>
            <a href="https://www.dassault-aviation.com/en/" target="_blank" rel="noopener noreferrer">
              https://www.dassault-aviation.com/en/
            </a>
          </p>
        </div>

        <div className="browser">
          <p style={{ textAlign: 'center' }}>
            <a href="https://hal-india.co.in/" target="_blank" rel="noopener noreferrer">
              https://hal-india.co.in/
            </a>
          </p>
        </div>

        <div className="browser">
          <p style={{ textAlign: 'center' }}>
            <a href="https://www.boeing.com/" target="_blank" rel="noopener noreferrer">
              https://www.boeing.com/
            </a>
          </p>
        </div>

        <div className="browser">
          <p style={{ textAlign: 'center' }}>
            <a href="https://www.airbus.com/en" target="_blank" rel="noopener noreferrer">
              https://www.airbus.com/en
            </a>
          </p>
        </div>

        <div className="browser">
          <p style={{ textAlign: 'center' }}>Pinterest</p>
        </div>

        <div className="browser">
          <p style={{ textAlign: 'center' }}>www.w3schools.com</p>
        </div>
      </article>

      <footer>
        <p>&copy; 2023 Altitude Alchemy. All Rights Reserved | info@altitudealchemy.com</p>
        <h3>Follow Us on:</h3>
        <p>Whatsapp • X • Instagram • G-mail</p>
      </footer>
    </div>
  );
};

export default AboutUs;