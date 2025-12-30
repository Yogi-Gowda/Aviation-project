import { Link } from "react-router-dom";

function BoeingModels() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/images/altitudealchemy.PNG" alt="altitudealchemy" />
        </div>
      </header>

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
            <Link to="/hal-models">Hindustan Aeronautics</Link>
            <Link to="/airbus-models">Airbus</Link>
            <Link to="/dassault-models">Dassault Aviation</Link>
          </div>
        </div>

        <Link to="/updates">UPDATES</Link>
        <Link to="/about">ABOUT US</Link>
      </nav>

      <h1>Products of Boeing</h1>
      <hr />
      <h2>Welcome to the Aircraft Specifications Portal</h2>

      <video autoPlay loop controls>
        <source
          src="/videos/Final Boeing 747 in production.mp4"
          type="video/mp4"
        />
      </video>

      <h2>
        Explore detailed specifications of various aircraft variants under
        production and development.
      </h2>

      <div className="row">
        <div className="column">
          <div className="content">
            <img src="/images/mo_15.webp" alt="707" width="100%" height="280" />
            <h3>BOEING 707</h3>
            <p>
              The Boeing 707 was the first successful commercial jet airliner,
              marking the beginning of the jet age in aviation.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="content">
            <img src="/images/mo_16.jpg" alt="717" width="100%" height="280" />
            <h3>BOEING 717</h3>
            <p>
              The Boeing 717 is a short- to medium-range narrow-body airliner
              originally developed as the MD-95.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="content">
            <img src="/images/mo_17.jpg" alt="727" width="100%" height="280" />
            <h3>BOEING 727</h3>
            <p>
              The Boeing 727 was designed for short and medium routes and became
              one of the most successful trijet aircraft.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="content">
            <img src="/images/mo_18.jpg" alt="737" width="100%" height="280" />
            <h3>BOEING 737</h3>
            <p>
              The Boeing 737 is the world’s best-selling commercial jet aircraft
              family.
            </p>
          </div>
        </div>
      </div>

      <div className="white-box">
        <div className="content">
          <img src="/images/mo_19.jpg" alt="767" width="60%" height="280" />
          <h3>BOEING 767</h3>
          <p>
            The Boeing 767 is a wide-body aircraft designed for medium- to
            long-haul flights with high fuel efficiency.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2023 Altitude Alchemy. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default BoeingModels;
