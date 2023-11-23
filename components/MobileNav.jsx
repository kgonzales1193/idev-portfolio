'use client';

import { usePathname } from 'next/navigation';

import Logo from './Logo';

import Socials from './Socials';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Navbar';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
          </div>
          <Socials
            containerStyles='flex gap-x-4 justify-center items-center'
            iconStyles='mt-5 text-foreground rounded-md text-[32px] shadow-xl p-3 hover:text-primary transition-all hover:scale-110 duration-300'
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
