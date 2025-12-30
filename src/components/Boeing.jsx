import { Link } from "react-router-dom";

function Boeing() {
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
        <div className="navbar">
          <div className="icon">
            <h2 className="logo">
              <img src="/images/boeinglogo.jpg" width="300" height="100" alt="Boeing Logo" />
            </h2>
          </div>
        </div>
      </div>

      <h2 className="section-title">INTRODUCTION</h2>
      <p className="content-text">
        <b>Boeing</b> is one of the most trusted companies in the aircraft manufacturing
        industry. It manufactures both commercial and defense aircraft and has played
        a major role in global aviation.
      </p>

      <div className="image-row">
        <img src="/images/bo1.jpg" alt="" />
        <img src="/images/bo2.jpg" alt="" />
        <img src="/images/bo3.jpg" alt="" />
      </div>

      <hr />

      <h2 className="section-title">HISTORY</h2>
      <div className="center">
        <img src="/images/bo4.jpg" alt="" />
      </div>

      <p className="content-text">
        Boeing was founded in 1916 by William Boeing in Seattle, Washington. Over the
        years, it became one of the world’s leading aerospace manufacturers producing
        commercial aircraft, military jets, satellites, and space systems.
      </p>

      <h2 className="section-title">SAFETY AND SPECIFICATION</h2>
      <div className="image-row">
        <img src="/images/bo5.png" alt="" />
        <img src="/images/bo6.jpg" alt="" />
        <img src="/images/bo7.jpg" alt="" />
      </div>

      <p className="content-text">
        Boeing manufactures aircraft such as the 737, 747, 777, and 787 with varying
        range, capacity, and efficiency. The company has enhanced safety systems after
        incidents involving the 737 MAX.
      </p>

      <h2 className="section-title">SERVICES</h2>
      <div className="image-row">
        <img src="/images/bo8.jpg" alt="" />
        <img src="/images/bo9.jpg" alt="" />
        <img src="/images/bo10.jpg" alt="" />
      </div>

      <p className="content-text">
        Boeing provides upgrades, maintenance, repair, training, and simulation services
        to airlines and defense organizations worldwide.
      </p>

      <h2 className="section-title">CAREERS AND JOB OPPORTUNITIES</h2>
      <div className="image-row">
        <img src="/images/bo14.jpg" alt="" />
        <img src="/images/bo15.jpg" alt="" />
        <img src="/images/bo16.jpg" alt="" />
      </div>

      <p className="content-text">
        Boeing offers careers in engineering, manufacturing, IT, and aerospace research,
        along with internships for undergraduate and postgraduate students.
      </p>

      <footer>
        <p>© 2023 Altitude Alchemy. All Rights Reserved | info@altitudealchemy.com</p>
      </footer>
    </>
  );
}

export default Boeing;
