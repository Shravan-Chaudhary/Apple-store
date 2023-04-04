import { Tab } from '@headlessui/react'

interface Props {
  categories: any
  showProducts: any
}

function TabComponent({ categories, showProducts }: Props) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className='flex justify-center'>
          {categories.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg px-5 py-3 text-sm font-light outline-none md:px-6 md:py-4 md:text-base ${
                  selected
                    ? 'borderGradient bg-[#35383C] text-white'
                    : 'border-b-2 border-[#35383C] text-[#747474]'
                }`
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mx-auto max-w-fit pb-24 pt-10 sm:px-4'>
          <Tab.Panel className='tabPanel'>{showProducts(0)}</Tab.Panel>
          <Tab.Panel className='tabPanel'>{showProducts(1)}</Tab.Panel>
          <Tab.Panel className='tabPanel'>{showProducts(2)}</Tab.Panel>
          <Tab.Panel className='tabPanel'>{showProducts(3)}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TabComponent
