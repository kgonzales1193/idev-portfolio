'use client';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { getProjects } from '@/sanity/lib/queries';
import ProjectCard from './ProjectCard';

const Work = () => {
  const [categories, setCategories] = useState(['all projects']);
  const [category, setCategory] = useState('all projects');
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Sanity.io
    const fetchProjectData = async () => {
      try {
        const projects = await getProjects();
        console.log(projects);

        // Remove duplicates from categories
        const uniqueCategories = [
          'all projects',
          ...new Set(
            projects.map((item) => item.category?.category || 'Uncategorized')
          ),
        ];

        setCategories(uniqueCategories);
        setProjectData(projects);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    // Call the function to fetch data
    fetchProjectData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
      ? project
      : project.category?.category === category;
  });

  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
