import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} alt="Logo" /> */}
          <a href="mycv.pdf" download="My_CV.pdf">
            <button type="button" className="download">
              Download CV
            </button>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mahnoor-tariq-021249214/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/mahnoor.tariq.1401/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/the_sidd_art?igsh=MTdzOTZ5ZmkzcHR4ZA==">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <Nav.Link href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}>

            <button className="vvd"  onClick={() => console.log("connect")}>
              <span> let's connect</span>
            </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
