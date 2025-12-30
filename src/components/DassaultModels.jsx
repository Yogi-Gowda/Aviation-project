import { Link } from "react-router-dom";

function DassaultModels() {
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

      <div className="main">
        <h1>Products of Dassault Aviation</h1>
        <hr />

        <h2>Welcome to the Aircraft Specifications Portal</h2>

        <video autoPlay loop controls>
          <source
            src="/images/Dassault Aviation Reveals First Falcon 8X - Dassault Aviation.mp4"
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
              <img src="/images/mirage-5.jpg" alt="Mirage 5" />
              <h3>Mirage-5</h3>
              <p>
                The Dassault Mirage 5 is a French supersonic attack aircraft
                derived from the Mirage III, widely exported and combat-proven.
              </p>

              <h3>Aircraft Performance</h3>
              <ul>
                <li>Maximum speed: 2,350 km/h</li>
                <li>Cruise speed: 956 km/h</li>
                <li>Service ceiling: 18,000 m</li>
              </ul>

              <h3>General Characteristics</h3>
              <table>
                <tbody>
                  <tr><th>Parameter</th><th>Value</th></tr>
                  <tr><td>Crew</td><td>1</td></tr>
                  <tr><td>Length</td><td>15.55 m</td></tr>
                  <tr><td>Wingspan</td><td>8.22 m</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="column">
            <div className="content">
              <img src="/images/mo_6.jpg" alt="Alpha Jet" />
              <h3>Dassault Alpha Jet</h3>
              <p>
                The Alpha Jet is a light attack and advanced trainer aircraft
                jointly developed by Dassault and Dornier.
              </p>

              <h3>Aircraft Performance</h3>
              <ul>
                <li>Maximum speed: 1,000 km/h</li>
                <li>Service ceiling: 14,630 m</li>
                <li>Rate of climb: 57 m/s</li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="content">
              <img src="/images/mo_7.jpg" alt="Mirage F1" />
              <h3>Dassault Mirage F1</h3>
              <p>
                The Mirage F1 replaced the Mirage III series and served as
                France’s primary interceptor aircraft.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="content">
              <img src="/images/mo_8.jpg" alt="Falcon 8X" />
              <h3>Falcon 8X</h3>
              <p>
                The Falcon 8X is a long-range trijet business jet combining
                performance, luxury, and advanced avionics.
              </p>
            </div>
          </div>
        </div>

        <div className="white-box">
          <div className="content">
            <img src="/images/mo_9.jpg" alt="MB-800" />
            <h3>MB-800</h3>
            <p>
              The MB-800 was a historical aircraft design with multiple variants
              developed during World War II.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <p>
          © 2023 Altitude Alchemy. All Rights Reserved |
          info@altitudealchemy.com
        </p>
      </footer>
    </>
  );
}

export default DassaultModels;
