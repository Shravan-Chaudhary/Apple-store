import Image from 'next/image'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'

function Header() {
  const session = false
  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
          <div className='relative  h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image src='/apple-logo.png' alt='logo' fill objectFit='contain' />
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a href='' className='headerLink'>
          Products
        </a>
        <a href='' className='headerLink'>
          Explore
        </a>
        <a href='' className='headerLink'>
          Support
        </a>
        <a href='' className='headerLink'>
          Business
        </a>
      </div>
      <div className='flex items-center justify-center gap-x-4 md:w-1/5 md:gap-x-6'>
        <BsSearch className='headerIcon h-5 w-5' />
        <Link href='/checkout'>
          <div className='relative cursor-pointer'>
            <span className=' gradient absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white'>
              5
            </span>
            <HiOutlineShoppingBag className='headerIcon h-6 w-6' />
          </div>
        </Link>

        {session ? (
          <Image
            src=''
            alt=''
            className='cursor-pointer rounded-full'
            width={34}
            height={34}
            onClick={() => {}}
          />
        ) : (
          <BiUser className='headerIcon h-6 w-6' />
        )}
      </div>
    </header>
  )
}

export default Header
