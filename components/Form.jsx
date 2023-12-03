'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';

const Form = () => {
  const { toast } = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='text' id='name' name='user_name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input
          type='email'
          id='email'
          name='user_email'
          placeholder='Email Address'
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Textarea name='message' placeholder='Your Message' />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button
        type='submit'
        value='Send'
        className='flex items-center gap-x-2 max-w-[166px]'
        onClick={() => {
          toast({
            description: 'Your message has been sent.',
          });
        }}
      >
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};
export default Form;
