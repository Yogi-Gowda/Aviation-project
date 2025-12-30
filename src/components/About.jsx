import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">
          <img
            src="/assets/images/altitudealchemy.PNG"
            alt="Altitude Alchemy"
          />
        </div>
      </header>

      {/* Navbar */}
      <nav>
        <Link to="/">HOME</Link>

        <div className="dropdown">
          <button className="dropbtn">COMPANIES</button>
          <div className="dropdown-content">
            <Link to="/boeing">Boeing</Link>
            <Link to="/hal">Hindustan Aeronautics</Link>
            <Link to="/airbus">Airbus</Link>
            <Link to="/dassault">Dassault Aviation</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">MODELS</button>
          <div className="dropdown-content">
            <Link to="/boeing-models">Boeing</Link>
            <Link to="/hal-models">HAL</Link>
            <Link to="/airbus-models">Airbus</Link>
            <Link to="/dassault-models">Dassault</Link>
          </div>
        </div>

        <Link to="/updates">UPDATES</Link>
        <Link to="/about">ABOUT US</Link>
      </nav>

      {/* Content */}
      <h1>About Us</h1>
      <h2>Welcome to our company!</h2>

      <p style={{ textAlign: "center" }}>
        At Altitude Alchemy, we take pride in being your premier destination
        for comprehensive information about aircraft.
      </p>

      <h2>Aviation Education for Everyone</h2>
      <p>
        Altitude Alchemy goes beyond specifications and prices; we're
        passionate about aviation education. Our platform offers engaging
        content, articles, and guides to help demystify the world of aircraft.
      </p>

      <h2>Join Our Community</h2>
      <p>
        Altitude Alchemy is not just a website; it's a community of aviation
        enthusiasts, professionals, and curious minds.
      </p>

      <p style={{ textAlign: "center" }}>
        Fly high with Altitude Alchemy!
      </p>

      <h2>Our Story</h2>
      <p>
        We are UG students studying at Chanakya University. As part of our
        academics, we developed this website.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our website aims to provide a comprehensive resource for aviation
        enthusiasts, pilots, and industry professionals by offering up-to-date
        information and community engagement.
      </p>

      {/* Team Section */}
      <h2>Here are the team members</h2>

      <div className="row">
        {[
          "Yateesh T M",
          "Kousumi Paul",
          "Yogesh K",
          "A Yuvaraj",
        ].map((name, index) => (
          <div className="column" key={index}>
            <div className="card" style={{ width: "200px" }}>
              <img
                src="/assets/images/aboutus_1.jfif"
                alt={name}
                style={{ width: "100%" }}
              />
              <h2>{name}</h2>
              <p className="title">Designer</p>
              <p>
                Student of Chanakya University pursuing BCA degree.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* References */}
      <article className="all-browsers">
        <h1 style={{ textAlign: "center" }}>References & Credits</h1>

        {[
          "https://www.dassault-aviation.com/en/",
          "https://hal-india.co.in/",
          "https://www.boeing.com/",
          "https://www.airbus.com/en",
          "Pinterest",
          "www.w3schools.com",
        ].map((ref, index) => (
          <article className="browser" key={index}>
            <p style={{ textAlign: "center" }}>{ref}</p>
          </article>
        ))}
      </article>

      {/* Footer */}
      <footer>
        <p>
          © 2023 Altitude Alchemy. All Rights Reserved |
          info@altitudealchemy.com
        </p>

        <h3>Follow Us on:</h3>
        <p>Whatsapp</p>
        <p>X</p>
        <p>Instagram</p>
        <p>G-mail</p>
      </footer>
    </>
  );
}

export default About;
