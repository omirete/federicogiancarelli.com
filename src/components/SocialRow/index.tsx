import { CSSProperties, HTMLProps, ReactElement, useContext } from "react";
import { ReactComponent as IconGithub } from "assets/icons/github.svg";
import { ReactComponent as IconLinkedin } from "assets/icons/linkedin.svg";
import { ReactComponent as IconTwitter } from "assets/icons/twitter.svg";
import { ReactComponent as IconMail } from "assets/icons/envelope.svg";
import LangContext from "contexts/LangContext";

export interface SocialRowProps extends HTMLProps<HTMLDivElement> {
  iconClassName?: string;
}

export interface SocialNetworkProps {
  description: string;
  href: string;
  icon: ReactElement;
}

const iconClasses = "fill-white opacity-50 opacity-100-hover transition-all";
const iconStyles: CSSProperties = { width: "1em", height: "1em" };

const SocialRow: React.FC<SocialRowProps> = ({ iconClassName, ...props }) => {
  const lang = useContext(LangContext);

  const SocialNetworks: Array<SocialNetworkProps> = [
    {
      description: "linkedin",
      href: lang.text.url_linkedin,
      icon: <IconLinkedin style={iconStyles} />,
    },
    {
      description: "github",
      href: "https://github.com/omirete/",
      icon: <IconGithub style={iconStyles} />,
    },
    {
      description: "twitter",
      href: "https://www.twitter.com/fedegianca",
      icon: <IconTwitter style={iconStyles} />,
    },
    {
      description: "mail",
      href: "mailto:federico@automaticaconsultora.com",
      icon: <IconMail style={iconStyles} />,
    },
  ];

  return (
    <div {...props}>
      {SocialNetworks.map((sn, i) => (
        <a
          href={sn.href}
          role="button"
          target="_blank"
          rel="noreferrer"
          aria-label={sn.description}
          className={`${iconClasses} ${
            i + 1 === SocialNetworks.length ? "" : "me-2"
          }`}
        >
          {sn.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialRow;
