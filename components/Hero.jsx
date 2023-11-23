'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from './DevImg';
import Socials from './Socials';
import Badge from './Badge';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ['<Developer/>', '<Freelancer/>', '<Designer/>'],
    loop: {},

    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* TEXT */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Fullstack Web Developer
            </div>
            <h1 className='h1'>
              Hi, I&apos;m{' '}
              <span className='text-primary'>Kevin Paul Gonzales</span>
              . A
              <br />
              <span className='text-6xl '>
                {typeEffect} <Cursor cursorStyle='|' />
              </span>
            </h1>
            <p className='pt-5 subtitle max-w-[490px] mx-auto xl:mx-0'>
              Hi! I’m Kevin, a Full-Stack Web Developer based in the
              Philippines. I create user-friendly interfaces for fast-growing
              startups.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link
                href='/Kevin Paul Gonzales-CV.pdf'
                download={true}
                target='_blank'
              >
                <Button variant='secondary' className='gap-x-2'>
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* SOCIALS */}
            <Socials
              containerStyles=' flex gap-x-6 mx-auto xl:mx-0'
              iconStyles='text-foreground rounded-md text-[32px] shadow-xl p-3 hover:text-primary transition-all hover:scale-110 duration-300'
            />
          </div>
          {/* IMAGE */}
          <Tilt>
            <div className='hidden xl:flex relative'>
              {/* Badge 1 */}
              <Badge
                containerStyles='absolute top-[24%] -left-[5rem]'
                icon={<RiBriefcase4Fill />}
                endCountNum={2}
                badgeText='Years Of Developer Exp.'
              />
              {/* Badge 2 */}
              <Badge
                containerStyles='absolute top-[70%] -left-[1rem]'
                icon={<RiTodoFill />}
                endCountNum={14}
                badgeText='Finished Projects'
              />
              {/* Badge 3 */}
              <Badge
                containerStyles='absolute top-[50%] -right-8'
                icon={<RiTeamFill />}
                endCountNum={5}
                badgeText='Happy Clients'
              />
              <div className='bg-hero_shape2_light dark:bg-hero_shape3_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
              <DevImg
                containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                imgSrc='/hero/hero.svg'
              />
            </div>
          </Tilt>
        </div>
        {/* ICONS */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
