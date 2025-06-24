import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import ResumeIcon from './icons/ResumeIcon';

const SocialLinks = ({ links }) => {
  const iconMap = {
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    resume: ResumeIcon
  };

  return (
    <div className="author__elsewhere">
      {links.map((link) => {
        const { type, url, href, download } = link;
        const IconComponent = iconMap[type];
        const linkUrl = url || href;  // Use whichever one exists
        
        return (
          <a 
            key={type} 
            href={linkUrl}
            {...(download && { download })}  // Only add download attribute if it exists
            aria-label={`Visit ${type} profile`}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;