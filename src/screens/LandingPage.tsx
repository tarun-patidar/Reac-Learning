import HeroBanner from "../components/HeroBanner";
import './../styles/LandingPage.css';
import { SocialIcon } from "react-social-icons";
import { useEffect } from "react";
import Header from "../components/Header";
import ProfilePage from "./ProfilePage";

function LandingPage() {

    useEffect(() => {
        document.title = "My Portfolio";
    },[]);

    return (
        <div className="landing-page" >
            <div className="spotlight"></div>
            <Header />
            <HeroBanner
                    className='hero-banner__landing-page'
                    title="Welcome to My Portfolio"
                    subtitle="This is my portfolio website where you can find more about me, my projects, 
                    learning journey and track reports. Feel free to explore! and share your feedback.
                    Let's connect and create something amazing together!"
            />
            <ProfilePage />
            <div className="footer">
            <div className='social-icons' aria-label='Social Media Links'>
                <SocialIcon aria-label='LinkedIn' target='_blank' network='linkedin' url='https://www.linkedin.com/in/tarunp17121997'/>
                <SocialIcon aria-label='GitHub' target='_blank' network='github' url='https://github.com/tarun-patidar'/>
                <SocialIcon aria-label='Email' target='_blank' bgColor='#28A8EA' network='email' url='mailto:trnpt97@gmail.com'/>
                <SocialIcon aria-label='Whatsapp' target='_blank' bgColor='#25D366' network='whatsapp' url='https://wa.me/+919926615431'/>
            </div>
            </div>
        </div>
    );
}

export default LandingPage;