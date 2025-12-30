import { Link } from "react-router-dom";

function Airbus() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/images/altitudealchemy.PNG" alt="Altitude Alchemy" />
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

      <h1 className="page-title">AIRBUS</h1>

      <img className="hero-image" src="/images/ab_1.jfif" alt="Airbus" />

      <hr />

      <h2>HIGHLIGHTS</h2>
      <p className="text-large">
        Airbus is a global pioneer in the aerospace industry, operating commercial
        aircraft, helicopters, defence and space sectors. With over 50 years of
        innovation, Airbus is a leader in designing, manufacturing and delivering
        aerospace solutions worldwide.
      </p>

      <hr />

      <div className="image-row">
        <img src="/images/ab_2.jpg" alt="" />
        <img src="/images/ab_3.jpg" alt="" />
        <img src="/images/ab_4.jfif" alt="" />
      </div>

      <hr />

      <h2>HISTORY</h2>

      <div className="cen">
        <img src="/images/ab_5.jpeg" alt="" />
      </div>

      <p className="text-large">
        Airbus was formed in 1970 as a consortium of European aerospace firms to
        compete with American manufacturers. The A300 was the world’s first
        twin-engine wide-body aircraft. Airbus later introduced fly-by-wire
        technology with the A320 and launched the A380, the world’s largest
        passenger aircraft.
      </p>

      <div className="image-row">
        <img src="/images/ab_6.png" alt="" />
        <img src="/images/ab_7.jpg" alt="" />
        <img src="/images/ab_8.jfif" alt="" />
      </div>

      <hr />

      <h2>SERVICES</h2>
      <p>
        Airbus Services enhances safety, strengthens customer relationships and
        supports sustainability across the entire aircraft life cycle.
      </p>

      <div className="image-row">
        <img src="/images/ab_9.jpg" alt="" />
        <img src="/images/ab_10.jpg" alt="" />
        <img src="/images/ab_11.jfif" alt="" />
      </div>

      <hr />

      <h2>CAREERS AND JOB OPPORTUNITIES</h2>

      <div className="image-row">
        <img src="/images/ab_15.jpg" alt="" />
        <img src="/images/ab_16.jfif" alt="" />
        <img src="/images/ab_17.jfif" alt="" />
      </div>

      <p>
        Airbus offers global career opportunities in engineering, digital
        transformation, manufacturing, and aerospace innovation. Opportunities
        are also available in India, including Bengaluru.
      </p>

      <footer>
        <p>© 2023 Altitude Alchemy. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Airbus;
