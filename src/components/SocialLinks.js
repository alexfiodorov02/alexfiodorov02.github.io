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
      {links.map(({ type, url }) => {
        const IconComponent = iconMap[type];
        return (
          <a key={type} href={url} aria-label={`Visit ${type} profile`}>
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;