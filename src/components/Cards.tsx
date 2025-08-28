
import './../styles/ProfileCard.css';
import profileLogo from '../assets/profile.jpg'

const cardDetails = [
    {
        title: "Profile",
        summary: "Summary of the profile goes here.",
        imageSource: profileLogo
    },
    {
        title: "Another Profile",
        summary: "Summary of another profile goes here.",
        imageSource: profileLogo
    },{
        title: "Projects",
        summary: "Summary of the projects goes here.",
        imageSource: profileLogo
    },
    {
        title: "Another Projects",
        summary: "Summary of another projects goes here.",
        imageSource: profileLogo
    },{
        title: "Learning",
        summary: "Summary of the learning goes here.",
        imageSource: profileLogo
    },
    {
        title: "Another Learning",
        summary: "Summary of another learning goes here.",
        imageSource: profileLogo
    },
    {
        title: "keep Track",
        summary: "Summary of keep Track goes here.",
        imageSource: profileLogo
    }
]

function Cards() {
  return (
    <div className='cards-container'>
        {cardDetails.map(card => (
            <div className='profile-card' key={card.title} tabIndex={0} role='button'>
                <h3 className='profile-card__title'>{card.title}</h3>
                <img className='profile-card__pic' src={card.imageSource} alt={card.title} />
                <p className='profile-card__summary'>
                    {card.summary}
                </p>
            </div>
        ))}
    </div>
 )
}

export default Cards