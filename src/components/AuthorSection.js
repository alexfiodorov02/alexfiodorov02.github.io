import alexImage from '../assets/Alex2.jpg';
import SocialLinks from './SocialLinks';

const AuthorSection = () => {
  const authorData = {
    name: "Alexander Fiodorov-Miller",
    website: "https://alexf.pro/",
    image: alexImage,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/in/alexfiodorov02' },
      { type: 'github', url: 'https://github.com/alexfiodorov02' },
      { type: 'resume', url: 'https://alexf.pro/resume.pdf' }
    ]
  };

  return (
    <div className="author">
      <a className="author__logo" href={authorData.website}>
        <div>
          <img 
            src={authorData.image} 
            alt={authorData.name} 
            width="100" 
          />
        </div>
      </a>
      <div className="author__site-text">
        <a href={authorData.website} className="author__site-title">
          {authorData.name}
        </a>
        <SocialLinks links={authorData.socialLinks} />
      </div>
    </div>
  );
};

export default AuthorSection;