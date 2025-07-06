import { GraduationCap } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Future Focus Learning Centre</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students from Grade R to 12 with world-class education through IMPAQ, Cambridge, and GED
              curriculums.
            </p>
            <p className="text-gray-300 mb-2">📍 Links Avenue, Fancourt, George, South Africa</p>
            <p className="text-gray-300 mb-2">📞 071 381 9885</p>
            <p className="text-gray-300 mb-4">✉️ info@futurefocuslearningcentre.co.za</p>
            <p className="text-gray-400 text-sm">© 2024 Future Focus Learning Centre. All rights reserved.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#curriculums" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Curriculums
                </a>
              </li>
              <li>
                <a href="#grades" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Grade Levels
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a
              href="https://www.facebook.com/FutureFocusLearningCentre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors block mb-4"
            >
              Facebook Page
            </a>
            <img
              src="/lovable-uploads/d9d70b86-58d0-47a7-b0cc-629eb7051eac.png"
              alt="Eduvance"
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Eduvance branding */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Designed and managed by</span>
            <img
              src="/lovable-uploads/3bf46f1a-ae95-4315-8969-f077f1094009.png"
              alt="Eduvance"
              className="h-4 w-auto"
            />
            <span>Eduvance</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
