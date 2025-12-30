import { Link } from "react-router-dom";

function HAL() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/images/altitudealchemy.PNG" alt="altitudealchemy" />
        </div>
      </header>

      <nav>
        <Link to="/">HOME</Link>

        <div className="subnav">
          <button className="subnavbtn">COMPANIES</button>
          <div className="subnav-content">
            <Link to="/boeing">Boeing</Link>
            <Link to="/hal">Hindustan Aeronautics</Link>
            <Link to="/airbus">Airbus</Link>
            <Link to="/dassault">Dassault Aviation</Link>
          </div>
        </div>

        <div className="subnav">
          <button className="subnavbtn">MODELS</button>
          <div className="subnav-content">
            <Link to="/boeing-models">Boeing</Link>
            <Link to="/hal-models">Hindustan Aeronautics</Link>
            <Link to="/airbus-models">Airbus</Link>
            <Link to="/dassault-models">Dassault Aviation</Link>
          </div>
        </div>

        <Link to="/updates">UPDATES</Link>
        <Link to="/about">ABOUT US</Link>
      </nav>

      <h1>Hindustan Aeronautics Limited</h1>

      <div className="bg"></div>

      <h2>INTRODUCTION</h2>
      <div className="image-row">
        <img src="/images/hal_2.jpg" alt="HAL 1" />
        <img src="/images/hal_3.jpg" alt="HAL 2" />
        <img src="/images/hal_4.jpg" alt="HAL 3" />
      </div>

      <p>
        <b>Hindustan Aeronautics Limited (HAL)</b> stands as a cornerstone of
        India's aerospace and defense industry, embodying a legacy of over eight
        decades in aeronautical excellence. Established in 1940, HAL has evolved
        into one of Asia's largest aerospace and defense companies. With
        headquarters in Bangalore, Karnataka, HAL has been pivotal in designing,
        developing, and manufacturing a diverse range of aircraft, helicopters,
        and associated systems.
      </p>

      <hr />

      <h2>HISTORY</h2>
      <div className="image-row">
        <img src="/images/hal_5.jpg" alt="history 1" />
        <img src="/images/hal_6.jpg" alt="history 2" />
        <img src="/images/hal_7.jpg" alt="history 3" />
      </div>

      <p>
        <b>Hindustan Aeronautics Limited (HAL)</b> established in 1940, is a
        cornerstone of India's aerospace industry. Founded by Walchand
        Hirachand, HAL has played a pivotal role in shaping India's aviation
        landscape with indigenous programs like LCA Tejas, ALH Dhruv, and LCH.
      </p>

      <hr />

      <h2>HAL Research and Development Centers</h2>
      <table className="center">
        <tbody>
          <tr>
            <th>Sl. No.</th>
            <th>R & D Centre</th>
            <th>Activity</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Aircraft R&D Centre, Bangalore</td>
            <td>Fixed Wing Aircraft (LCA, UAV, HTT-40)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rotary Wing Aircraft R&D Centre</td>
            <td>Helicopters (LCH, LUH, IMRH)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aero Engine R&D Centre</td>
            <td>Engine Design & Testing</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>AIRCRAFTS MANUFACTURED</h2>
      <div className="image-row">
        <img src="/images/hal_8.webp" alt="manufactured 1" />
        <img src="/images/hal_9.jpg" alt="manufactured 2" />
        <img src="/images/hal_10.jpg" alt="manufactured 3" />
      </div>

      <hr />

      <h2>HAL Today</h2>
      <div className="container">
        <img
          src="/images/hal_to.webp"
          alt="HAL Today"
          style={{ width: "350px", borderRadius: "50%" }}
        />
        <p>
          HAL currently supports a wide range of aircraft and helicopter
          platforms including Su-30 MKI, Tejas, ALH Dhruv, Hawk, Jaguar, and
          Mirage upgrades. HAL also provides avionics, maintenance, and export
          services globally.
        </p>
      </div>

      <hr />

      <h2>GLOBAL RANKING</h2>
      <div className="container">
        <img
          src="/images/hal_11.webp"
          alt="HAL Ranking"
          style={{ width: "300px", borderRadius: "50%" }}
        />
        <p>
          HAL ranked <b>42nd</b> globally among defense manufacturers with a
          valuation of $5.1 billion, reflecting India's push toward
          self-reliance under Make-in-India initiatives.
        </p>
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

export default HAL;
