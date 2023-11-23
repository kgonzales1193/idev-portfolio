'use client';

import { links } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
