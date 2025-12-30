import { Link } from "react-router-dom";

function HALModels() {
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
        <h1>Products of HAL</h1>
        <hr />

        <h2>Welcome to the Aircraft Specifications Portal</h2>

        <video autoPlay loop controls>
          <source
            src="/videos/Hindustan_Aeronautics_HAL_Promo.mp4"
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
              <img src="/images/mo_1.webp" alt="LCA Tejas" />

              <h3>LCA Tejas Fighter Jet</h3>
              <p>
                LCA Tejas is a 4.5 generation, all-weather multi-role fighter
                aircraft designed for air combat, ground attack, and maritime
                operations.
              </p>

              <h3>Key Characteristics</h3>
              <ul>
                <li>Smallest and lightest aircraft in its class</li>
                <li>Accident-free flight safety record</li>
                <li>Quadruplex Fly-by-Wire system</li>
                <li>AESA Radar and multi-role weapon capability</li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="content">
              <img src="/images/mo_2.jpg" alt="HAL Hawk" />
              <h3>HAL HAWK</h3>
              <p>
                The Hawk is a tandem-seat aircraft for flying and weapon training,
                featuring excellent aerobatic and flight stability
                characteristics.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="content">
              <img src="/images/mo_3.jfif" alt="Su-30 MKI" />
              <h3>Su-30 MKI</h3>
              <p>
                A twin-jet multirole air superiority fighter with thrust
                vectoring, long range, and advanced avionics.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="content">
              <img src="/images/mo_4.jpg" alt="HAL Dhruv" />
              <h3>HAL DHRUV</h3>
              <p>
                Advanced Light Helicopter designed for multi-role missions in
                extreme weather and terrain.
              </p>
            </div>
          </div>
        </div>

        <div className="white-box">
          <div className="content">
            <img src="/images/mo_5.jpg" alt="Dornier 228" width="250" />
            <h3>Dornier 228</h3>
            <p>
              The Dornier 228 is a twin-turboprop utility aircraft used for
              surveillance, transport, and search-and-rescue missions.
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

export default HALModels;
