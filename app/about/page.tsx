import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='relative w-full h-64 md:h-96'>
        <Image
          src='/lab.jpg'
          alt='JC Consulting hero image'
          fill
          style={{ objectFit: 'cover' }}
          priority // preload for better LCP
        />
      </div>

      <main className='flex-grow py-32'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8'>
              About
            </h1>
            <div className='prose prose-lg max-w-none'>
              <p>
                At JC Consulting, we are a dedicated engineering consultancy
                start-up based in Mechelen with a key focus on the
                pharmaceutical industry. Our mission is to provide expert
                solutions that not only deliver on time and within budget, but
                also prioritize our employees&#39; well-being and work-life
                balance. We are driven by our passion to make a difference in
                the world and help develop and produce life-saving medicine for
                people in need. This passion is matched by our commitment to our
                employees and their professional development. At JC Consulting,
                we believe that a happy and fulfilled workforce leads to better
                results and improved services for our clients. Our focus on the
                pharmaceutical industry and commitment to delivering quality
                solutions sets us apart in the market. Whether you are looking
                to improve your facilities, streamline production processes, or
                undertake a complex project, JC Consulting has the expertise and
                dedication to bring your vision to life. Contact us today to
                learn more about how we can help your business succeed.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
