import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiIndeed } from 'react-icons/si';

const HeaderSocials = () => {
  return (
      <div className="header__socials">
    <a href="https://github.com/HeitorMontenegro"><AiOutlineGithub/></a>
    <a href="https://www.linkedin.com/in/heitor-montenegro-8723a5227/"><AiFillLinkedin/></a>
    <a href="https://my.indeed.com/resume?hl=pt&co=BR&from=gnav-messaging--messaging-webapp"><SiIndeed/></a>
    </div>
  );
}

export default HeaderSocials;