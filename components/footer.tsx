export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JC-Consulting</h3>
            <address className="not-italic text-gray-300 leading-relaxed">
              Lakenmakersstraat 103
              <br />
              Mechelen, België
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">BE 0779.467.947</p>
            <a
              href="mailto:Jef.c.consulting@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Jef.c.consulting@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} JC-Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
