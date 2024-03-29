import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='bg-dotted-pattern md:py-10 bg-primary-50 py-5 bg-contain '>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className='p-regular-20 md:p-regular-24'>
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size='lg' asChild className='button w-full sm:w-fit'>
              <Link href='#events'>Explore Now</Link>
            </Button>
          </div>
          <Image
            src='/assets/images/hero.png'
            width={1000}
            height={1000}
            alt='Hero'
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
          ></Image>
        </div>
      </section>
      <section
        id='events'
        className='flex flex-col gap-8 md:gap-12 wrapper my-8 '
      >
        <h2 className='h2-bold'>
          Trusted by <br />
          Thousands of events
        </h2>
        <div className='flex flex-col md:flex-row w-full gap-5'>search cF</div>
      </section>
    </>
  );
}
