'use client';

import Link from 'next/link';

import {
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

const icons = [
  {
    path: 'https://github.com/kgonzales1193',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.linkedin.com/in/kevin-paul-gonzales-726402256',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://facebook.com/kebbsz',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://instagram.com/kebbsz',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
