import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export default function CtaSection({
  title,
  content,
  buttonText,
  buttonLink,
}: CtaSectionProps) {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6'>
            {title}
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed mb-8'>
            {content}
          </p>
          <Link
            href={buttonLink}
            className='inline-block bg-gray-900 text-white font-medium px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300'
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
