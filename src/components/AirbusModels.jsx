import { Link } from "react-router-dom";

function AirbusModels() {
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

      <h1>Products of Air-Bus</h1>
      <hr />

      <h2>Welcome to the Aircraft Specifications Portal</h2>

      <video autoPlay loop controls>
        <source
          src="/videos/In the making_ Airbus’ first BelugaXL.mp4"
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
            <img src="/images/mo_10.jpg" alt="A300" width="100%" height="280" />
            <h3>Airbus A300</h3>
            <p>
              The Airbus A300 is a pioneering wide-body twin-engine aircraft and
              the first aircraft produced by Airbus. It played a crucial role in
              establishing Airbus as a global aviation manufacturer.
            </p>

            <h3>Airbus A300 Overview</h3>
            <ul>
              <li>
                <strong>Wide-Body Design:</strong> Two-aisle configuration
              </li>
              <li>
                <strong>Twin-Engine:</strong> Improved fuel efficiency
              </li>
              <li>
                <strong>Fly-by-Wire:</strong> First commercial adoption
              </li>
              <li>
                <strong>Versatility:</strong> Passenger & cargo roles
              </li>
            </ul>

            <h3>Airbus A300B6 Specifications</h3>
            {/* Table kept intact */}
            <table width="100%">
              <tr>
                <th>Specifications</th>
                <th>A300B4-200</th>
                <th>A300-600R</th>
                <th>A300-600F</th>
              </tr>
              <tr>
                <td>Cockpit crew</td>
                <td>Three</td>
                <td>Two</td>
                <td></td>
              </tr>
              <tr>
                <td>MTOW</td>
                <td>165,000 kg</td>
                <td>171,700 kg</td>
                <td>170,500 kg</td>
              </tr>
              <tr>
                <td>Range</td>
                <td>5,375 km</td>
                <td>7,500 km</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>

        <div className="column">
          <div className="content">
            <img src="/images/mo_11.jpg" alt="A320" width="100%" height="280" />
            <h3>Airbus A320 Family</h3>
            <p>
              The Airbus A320 family revolutionized aviation with digital
              fly-by-wire technology and side-stick controls.
            </p>

            <h3>Airbus A320 Family Specifications</h3>
            <table width="100%">
              <tr>
                <th>Subtype</th>
                <th>A318</th>
                <th>A319</th>
                <th>A320</th>
                <th>A321</th>
              </tr>
              <tr>
                <td>Cockpit crew</td>
                <td colSpan="4">Two</td>
              </tr>
              <tr>
                <td>Range</td>
                <td>5,700 km</td>
                <td>6,940 km</td>
                <td>6,100 km</td>
                <td>5,900 km</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="white-box">
        <div className="content">
          <img src="/images/mo_14.jpg" alt="A380" width="60%" height="280" />
          <h2>Airbus A380 Overview</h2>

          <ul className="myUL">
            <li>
              <strong>First Flight:</strong> April 27, 2005
            </li>
            <li>
              <strong>Capacity:</strong> Up to 853 passengers
            </li>
            <li>
              <strong>Engines:</strong> Rolls-Royce Trent 900 / GP7200
            </li>
          </ul>

          <h3>Legacy</h3>
          <p>
            Though production ended in 2019, the Airbus A380 remains an iconic
            aircraft in aviation history.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2023 Altitude Alchemy. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default AirbusModels;
