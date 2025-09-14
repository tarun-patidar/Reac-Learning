import "./../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "fantasy",
          zIndex: 10,
        }}
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
    </header>
  );
}
