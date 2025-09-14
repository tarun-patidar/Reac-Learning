
import './../styles/ProfileCard.css';
import profileLogo from '../assets/profile.jpg';
import projectsLogo from '../assets/project.jpg';
import { useNavigate } from 'react-router-dom';

const cardDetails = [
    {
        title: "Profile",
        summary: "Summary of the profile goes here.",
        imageSource: profileLogo,
        location: "/profile"
    },
    {
        title: "Projects",
        summary: "Summary of the projects goes here.",
        imageSource: projectsLogo,
        location: "/projects"
    },
    {
        title: "Learning",
        summary: "Summary of the learning goes here.",
        imageSource: profileLogo,
        location: "/learning"
    },
    
    {
        title: "keep Track",
        summary: "Summary of keep Track goes here.",
        imageSource: profileLogo,
        location: "/keep-track"
    }
]

function Cards() {
    const navigate = useNavigate();
    return (
        <div className='cards-container'>
            {cardDetails.map(card => (
                <div
                    className='profile-card'
                    key={card.title}
                    tabIndex={0}
                    role='button'
                    onClick={() => navigate(card.location)}
                    style={{ cursor: 'pointer' }}
                >
                    <h3 className='profile-card__title'>{card.title}</h3>
                    <img className='profile-card__pic' src={card.imageSource} alt={card.title} />
                    <p className='profile-card__summary'>
                        {card.summary}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Cards