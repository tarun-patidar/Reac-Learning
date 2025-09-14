import Spline from '@splinetool/react-spline';
import './../styles/HeroBanner.css'; 

interface HeroBannerProps {
    className?: string;
    title?: string;
    subtitle?: string;
}

function HeroBanner({ className='', title, subtitle }: HeroBannerProps) {
  return (
    <div className={`hero-banner ${className}`}>
      <div className='hero-banner__content' data-aos="fade-right">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Spline className="hero-banner__spline" style={{width: '760px', height: '560px'}} scene="https://prod.spline.design/JRHicUWCAQCOpfWX/scene.splinecode" />
    </div>
  );
}

export default HeroBanner;
