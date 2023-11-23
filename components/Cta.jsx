import Link from 'next/link';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
            Ready to turn your ideas into reality? I am here to help.
          </h2>
          <Link href='/contact'>
            <Button className='gap-x-2'>
              Contact Me <Send size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
