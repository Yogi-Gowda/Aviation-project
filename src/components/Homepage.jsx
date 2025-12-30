import { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  { img: "/assets/images/homepage_1.jpg", text: "Boeing 727" },
  { img: "/assets/images/homepage_2.jfif", text: "Airbus A330" },
  { img: "/assets/images/homepage_3.jpg", text: "Sukhoi su-27" },
  { img: "/assets/images/homepage_4.jpg", text: "Boeing F-15" },
  { img: "/assets/images/homepage_5.jpg", text: "Mikoyan MIG-29K" },
  { img: "/assets/images/homepage_6.jpg", text: "Harrier Jump Jet" },
  { img: "/assets/images/homepage_7.jpg", text: "Boeing 747" },
  { img: "/assets/images/homepage_8.jpg", text: "Lockheed P-38" },
  { img: "/assets/images/homepage_9.jpg", text: "Airbus 380" },
  { img: "/assets/images/homepage_10.jpg", text: "Boeing F-22 Raptor" }
];

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setSlideIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

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

      {/* Slideshow */}
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img
            src={slides[slideIndex].img}
            style={{ width: "900px", height: "500px", border: "15px solid #555" }}
            alt=""
          />
          <div className="text">{slides[slideIndex].text}</div>
        </div>

        <span className="prev" onClick={prevSlide}>❮</span>
        <span className="next" onClick={nextSlide}>❯</span>
      </div>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font"><b>ALTITUDE ALCHEMY</b></h1>
            <h1 style={{ color: "MediumSeaGreen" }}>
              <b>Let's dive into the world of Steel Birds</b>
            </h1>
            <p>
              <span style={{ fontSize: "36px" }}>
                The World of Aviation Enthusiasts!
              </span>{" "}
              Explore the latest news and insights into aviation.
            </p>
          </div>
          <div className="column-33">
            <img src="/assets/images/home_3.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Read More Section */}
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="row">
          <div className="column-33">
            <img src="/assets/images/home_2.jpg" alt="" />
          </div>
          <div className="column-66">
            <h1 className="xlarge-font"><b>Revolution</b></h1>
            <p>
              Believe that sustainable aviation will change the future
              {readMore && (
                <> by reducing emissions and improving passenger experience.</>
              )}
            </p>
            <button
              className="button-73"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>
          © 2023 Altitude Alchemy. All Rights Reserved |
          info@altitudealchemy.com
        </p>
      </footer>
    </>
  );
}

export default Home;
