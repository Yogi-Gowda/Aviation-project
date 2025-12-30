import { useRef } from "react";

const Updates = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="/assets/images/altitudealchemy.PNG" alt="altitudealchemy" />
        </div>
      </header>

      <nav>
        <a href="/">HOME</a>

        <div className="dropdown">
          <button className="dropbtn">COMPANIES</button>
          <div className="dropdown-content">
            <a href="/boeing">Boeing</a>
            <a href="/hal">Hindustan Aeronautics</a>
            <a href="/airbus">Airbus</a>
            <a href="/dassault">Dassault Aviation</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">MODELS</button>
          <div className="dropdown-content">
            <a href="/boeing-models">Boeing</a>
            <a href="/hal-models">Hindustan Aeronautics</a>
            <a href="/airbus-models">Airbus</a>
            <a href="/dassault-models">Dassault Aviation</a>
          </div>
        </div>

        <a href="/updates">UPDATES</a>
        <a href="/about">ABOUT US</a>
      </nav>

      <h1>Aviation Updates</h1>

      <div className="container">
        <div id="slide" ref={slideRef}>
          <div
            className="item"
            style={{ backgroundImage: "url(/assets/images/updates_1.jfif)" }}
          >
            <div className="content">
              <div className="name">FUTURE OF AVIATION</div>
              <div className="des">
                Aviation can be an Enabler of Global Connectivity and Peace
              </div>
              <button>
                <a
                  href="https://www.business-standard.com/content/press-releases-ani/aviation-can-be-an-enabler-of-global-connectivity-and-peace-states-jaideep-mirchandani-group-chairman-of-sky-one-123121500396_1.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </button>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: "url(/assets/images/updates_2.jfif)" }}
          >
            <div className="content">
              <div className="name">CIVIL AVIATION</div>
              <div className="des">
                Civil Aviation Ministry puts onus on Puducherry government
              </div>
              <button>
                <a
                  href="https://www.thehindu.com/news/cities/puducherry/civil-aviation-ministry-puts-onus-on-puducherry-government-for-bearing-cost-of-land-acquisition-for-runway-expansion/article67640904.ece"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </button>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: "url(/assets/images/updates_3.jpeg)" }}
          >
            <div className="content">
              <div className="name">JOB OPPORTUNITIES</div>
              <div className="des">
                Pilot training for civil aviation in India
              </div>
              <button>
                <a
                  href="https://www.msn.com/en-in/news/other/pilot-training-for-civil-aviation-in-india/ar-AA1lxCYn"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handlePrev}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>
      </div>

      <footer>
        <p>
          © 2023 Altitude Alchemy. All Rights Reserved | info@altitudealchemy.com
        </p>
      </footer>
    </>
  );
};

export default Updates;
