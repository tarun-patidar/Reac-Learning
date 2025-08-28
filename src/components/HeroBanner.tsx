import './../styles/HeroBanner.css';

interface HeroBannerProps {
    image: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

function HeroBanner({ image, className='', title, subtitle }: HeroBannerProps) {
  return (
    <div className={`hero-banner ${className}`} style={{ backgroundImage: `url(${image}),linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default HeroBanner;
