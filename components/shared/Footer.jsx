import Socials from '../Socials';

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles=' flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconStyles='text-primary dark:text-white/70 hover:dark:text-primary text-[32px] hover:text-white transition-all duration-300 hover:scale-110'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright &copy; {new Date().getFullYear()}. Kevin Paul Gonzales.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
