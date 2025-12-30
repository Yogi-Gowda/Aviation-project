import { Link } from "react-router-dom";

function Dassault() {
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

      <h1>Dassault Aviation</h1>

      <div className="bg"></div>

      <h2>INTRODUCTION</h2>
      <div className="image-row">
        <img src="/images/da2.jfif" alt="" />
        <img src="/images/da3.jfif" alt="" />
        <img src="/images/da4.jpg" alt="" />
      </div>

      <p>
        <b>DASSAULT AVIATION</b> is a French aerospace company that designs and builds
        military aircraft, business jets and space systems. With over 10,000 aircraft
        delivered in more than 90 countries, Dassault has earned global recognition.
      </p>

      <h2>HISTORY</h2>
      <div className="image-row">
        <img src="/images/da5.jpg" alt="" />
        <img src="/images/da6.jpg" alt="" />
        <img src="/images/da7.jpg" alt="" />
      </div>

      <p>
        Founded in 1929 by Marcel Dassault, the company gained international fame through
        aircraft such as the Mirage and Rafale series. Dassault later expanded into
        business aviation with the Falcon family.
      </p>

      <h2>AIRCRAFTS MANUFACTURED</h2>

      <div className="card">
        <div className="bothside">
          <div className="both">
            <h3>Military Aircrafts</h3>
            <div1>
              <img src="/images/da8.jpg" alt="" />
            </div1>
            <div className="info">
              <div className="right-text">
                <p>
                  Dassault’s Mirage and Rafale aircraft are globally respected for their
                  agility, advanced avionics, and multirole capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="bothside">
          <div className="both">
            <h3>Business Jets</h3>
            <div1>
              <img src="/images/da9.jpg" alt="" />
            </div1>
            <div className="info">
              <div className="right-text">
                <p>
                  The Falcon business jet series represents luxury, safety, and
                  efficiency, making Dassault a leader in business aviation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>SPECIFICATIONS OF MAJOR AIRCRAFTS</h2>

      <div className="card">
        <h3>Dassault Falcon 7X</h3>
        <div className="holder">
          <img src="/images/da10.jfif" alt="" />
          <table>
            <tbody>
              <tr><th>Name</th><th>Values</th></tr>
              <tr><td>Engine</td><td>PW307A turbofans</td></tr>
              <tr><td>Max Range</td><td>5,870 nmi</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3>Dassault Rafale</h3>
        <div className="holder">
          <img src="/images/da11.webp" alt="" />
          <table>
            <tbody>
              <tr><th>Name</th><th>Values</th></tr>
              <tr><td>Engine</td><td>Snecma M88-2</td></tr>
              <tr><td>Max Speed</td><td>Mach 1.4</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>FINANCIAL GROWTH</h2>
      <div className="card">
        <div className="bothside">
          <div className="both">
            <img src="/images/da15.png" alt="" />
          </div>
          <div className="info">
            <div className="right-text">
              <p>
                Dassault has shown consistent growth through innovation in military and
                business aviation, maintaining a strong global presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>© 2023 Altitude Alchemy. All Rights Reserved | info@altitudealchemy.com</p>
      </footer>
    </>
  );
}

export default Dassault;
