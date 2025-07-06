import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to nurture your child's growth with the best education? Contact us today to learn more about our
            programs and enrollment process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="opacity-90">
              Links Avenue, Fancourt
              <br />
              George, South Africa
            </p>
          </div>

          <div className="text-center">
            <Phone className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="opacity-90">
              Phone: 071 381 9885
              <br />
              WhatsApp available
            </p>
          </div>

          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="opacity-90">info@futurefocuslearningcentre.co.za</p>
          </div>

          <div className="text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
            <p className="opacity-90">
              Mon - Fri: 8:00 AM - 4:00 PM
              <br />
              Sat: By appointment
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/FutureFocusLearningCentre"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Follow Us on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
