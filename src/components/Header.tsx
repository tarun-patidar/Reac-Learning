import "./../styles/Header.css";
import 'boxicons/css/boxicons.min.css';
import { useState } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    const navSelector = document.querySelector('.header__nav');
    if (isMenuOpen) {
      navSelector?.classList.add('header__navMobile--open');
    } else {
      navSelector?.classList.remove('header__navMobile--open');
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <h1
        className="header__title"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        My Portfolio
      </h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a
              href="/"
              className="header__nav-link"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#profile"
              className="header__nav-link"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Profile
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="/projects"
              className="header__nav-link"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              Projects
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="/learning"
              className="header__nav-link"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
            >
              Learning
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="/keep-track"
              className="header__nav-link"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              Track Report
            </a>
          </li>
        </ul>
      </nav>
      <button className="header__menu-hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        <i className="bx bx-menu"></i>
      </button>
    </header>
  );
}
