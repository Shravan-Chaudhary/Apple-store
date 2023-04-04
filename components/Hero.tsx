import Image from 'next/legacy/image'
import Link from 'next/link'
import Button from './Button'

function Hero() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
      {/* Text and Button Container */}
      <div className='space-y-8'>
        <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl'>
          <span className='gradient block bg-clip-text text-transparent'>
            Powered
          </span>
          <span className='block'>By Intellect</span>
          <span className='block'>Drivent By Values</span>
        </h1>

        <div className='space-x-8'>
          <Button title='Buy Now' />
          <Link href='/learn' className='link'>
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Container */}
      <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px]'>
        <Image
          src='/iphone.png'
          alt='iphone'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </section>
  )
}

export default Hero
