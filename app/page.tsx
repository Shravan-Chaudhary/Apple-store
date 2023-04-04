import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TabComponent from '@/components/TabComponent'
import { GetServerSideProps } from 'next'

export default function Home({ categories }) {
  return (
    <div>
      <Header />
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Hero />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
            New Promos
          </h1>
          {/* <TabComponent categories={categories} showProducts={showProducts} /> */}
        </div>
      </section>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const categories = await fetchCategories()

//   return {
//     props: {},
//   }
// }
