import "./../styles/ProfilePage.css";
import { FaCss3, FaDatabase, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import ProgressBar from "../components/ProgressBar";

function ProfilePage() {
  const iconSize: number = 100;

  return (
    <div id="profile"className="container">
      <div className="timeline"></div>
      <div className="profile-page__content">
        <div className="profile-page__content-left">
          <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-ease="linear">About Me</h3>
          <p data-aos="fade-left" data-aos-duration="2000" data-aos-ease="linear" className="profile-page__description">
            Hello! I'm Tarun Patidar, a passionate developer and lifelong
            learner. I thrive on challenges and am always eager to expand my
            skill set. My journey in the tech world has been driven by curiosity
            and a desire to create impactful, scalable and best solutions. When
            I'm not coding, you can find me exploring new technologies, reading
            about the latest trends in the industry, or working on personal
            projects that excite me. I believe in continuous growth and am
            committed to becoming the best version of myself. Feel free to
            connect with me for collaboration, learning opportunities, or just
            to share ideas. Let's build something amazing together!
          </p>
        </div>
        <div className="profile-page__content-right">
          <h3 data-aos="fade-left" data-aos-duration="1000" data-aos-ease="linear" >My Role & Responsibilities</h3>
          <p className="profile-page__description"  data-aos="fade-right" data-aos-duration="2000" data-aos-ease="linear">
            Currently working as an AEM Developer at LTIMINDTREE and
            responsible for developing and maintaining web applications using
            Adobe Experience Manager (AEM) platform. My role involves
            collaborating with cross-functional teams to design, develop, and
            implement AEM solutions that meet business requirements. This includes
            creating and customizing AEM components, templates, and workflows to
            enhance the user experience and ensure seamless content management.
            Additionally, I'd love to troubleshoot and resolve the
            technical issues, optimizing performance, and staying updated with
            the latest AEM features and best practices. Overall, my role as an
            AEM Developer allows me to leverage my technical skills and
            creativity to deliver high-quality digital experiences.
            Open to new opportunities and challenges that allow me to grow and
            contribute to innovative projects in AEM as cloud service and
            advance my journey as Full Stack AEM Developer.
          </p>
        </div>
        <div className="profile-page__content-left">
          <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-ease="linear">Work Experience</h3>
          <p data-aos="fade-left" data-aos-duration="2000" data-aos-ease="linear" className="profile-page__description">
            I have over 6 years of experience in the IT industry where I worked with
            COGNIZANT(2019-2023) and LTIMINDTREE(2023-Present), with a strong
            background in software development and AEM Technologies. Throughout my
            career, I have worked on a variety of projects, ranging from small
            sites migration from AEM 6.1 to AEM 6.3, to medium level sites OOTB core
            form components enhancement to large-scale solutions to migrate business from
            SiteCore to AEM 6.5 with proven knowledge of Git Strategy and Agile Methodology.
            I have a proven track record of delivering high-quality software solutions on time.
          </p>
        </div>

        <div className="profile-page__content-right" data-aos="fade-up" data-aos-duration="2000" data-aos-ease="linear">
          <h3>Skills & Technologies</h3>
          <div className="profile-page__skills">
            <div>
              <div className="profile-page__skill-java">
                <FaJava size={iconSize} color="#f89820" title="Java" />
              </div>
              <ProgressBar value={75} max={100} color="#f89820" />
            </div>
            <div>
              <div className="profile-page__skill-database">
                <FaDatabase
                  size={iconSize}
                  color="#1c2050ff"
                  title="Database"
                />
              </div>
              <ProgressBar value={60} max={100} color="#1c2050ff" />
            </div>
            <div>
              <div className="profile-page__skill-react">
                <FaReact size={iconSize} color="#61DBFB" title="ReactJS" />
              </div>
              <ProgressBar value={40} max={100} color="#61DBFB" />
            </div>
            <div>
              <div className="profile-page__skill-html">
                <FaHtml5 size={iconSize} color="#e34c26" title="HTML5" />
              </div>
              <ProgressBar value={45} max={100} color="#e34c26" />
            </div>
            <div>
              <div className="profile-page__skill-css">
                <FaCss3 size={iconSize} color="#5926e4ff" title="CSS3" />
              </div>
              <ProgressBar value={40} max={100} color="#5926e4ff" />
            </div>
            <div>
              <div className="profile-page__skill-js">
                <FaJs size={iconSize} color="#007acc" title="JavaScript" />
              </div>
              <ProgressBar value={40} max={100} color="#007acc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
