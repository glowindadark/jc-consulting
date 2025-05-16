import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='h-48 w-48 relative mb-6'>
              <Image
                src='/Pfizer-logo.jpg?height=96&width=192'
                alt='Pfizer logo'
                fill
                className='object-contain'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-800 text-center'>
              Expertise in Pfizer Covid Production and Process Engineering
            </h4>
          </div>

          <div className='flex flex-col items-center'>
            <div className='h-48 w-48 relative mb-6'>
              <Image
                src='/Novartis-Logo.jpg?height=192&width=384'
                alt='Novartis logo'
                fill
                className='object-contain'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-800 text-center'>
              Novartis
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
