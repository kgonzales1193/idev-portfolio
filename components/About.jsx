'use client';

import Image from 'next/image';

import {
  User2,
  HomeIcon,
  PhoneCall,
  MailIcon,
  GraduationCap,
  Briefcase,
} from 'lucide-react';
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { qualicationData, skillData } from '@/constants';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Kevin Paul Gonzales',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+63 (961) 449-9827',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'kgonzales1193@gmail.com',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor of Science in Information Technology',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Toril District, Davao City, Davao del Sur 8000 PH',
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24 mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About Me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* IMAGE */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/about.svg'
            />
          </div>
          {/* TABS */}
          <div className='flex-1'>
            <Tabs defaultValue='personalInfo'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='personalInfo'
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs contents */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal info */}
                <TabsContent value='personalInfo'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualicationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualicationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualicationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualicationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Tools I Use Everyday</h3>
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tech Stack
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='items-center justify-center gap-x-8 gap-y-6 grid grid-cols-6 xl:grid-rows-3 xl:justify-start'>
                        {getData(skillData, 'tech stack').data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={60}
                                  height={60}
                                  alt='tools'
                                  priority
                                  className='hover:scale-125 shadow-md p-2 rounded-md transition-all duration-300'
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
