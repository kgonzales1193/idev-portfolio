import { Blocks, Gem, GanttChartSquare } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'I value simple content structure, clean design patterns, and thoughtful interactions.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description:
      'Crafting user-friendly apps with innovative technology for seamless digital experiences.',
  },
];
const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          What I Do
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className=' w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px]  dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
