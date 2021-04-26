import React from 'react'
import './Social.scss';
import { ReactComponent as ICGitlab } from '../../../images/icons/gitlab.svg';
import { ReactComponent as ICGithub } from '../../../images/icons/github.svg';
import { ReactComponent as ICLinkedin } from '../../../images/icons/linkedin.svg';

const socialMedia = [
    {
        icon: <ICGithub />,
        link: "https://github.com/Bokkoa"
    },
    {
        icon: <ICGitlab />,
        link: "https://gitlab.com/Bokkoa"
    },
    {
        icon: <ICLinkedin />,
        link: "https://www.linkedin.com/in/jesus-felipe-cruz-navarro-929572167/"
    }
];

const Social = ({neon}) => {
    return (
        <div className={ neon ? 'social__neon' : 'social'}>
            {socialMedia.map( (item, key)  => {

                return (
                    <a  href={item.link} 
                        target="_blank" 
                        key={key}
                        rel="noreferrer noopener">
                        {item.icon}
                    </a>
                )

            })}
            
        </div>
    )
}

export default Social
