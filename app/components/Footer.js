import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              hello@lokaci.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-400" />
              +91-XXXXX-XXXXX
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              +91-XXXXX-XXXXX
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" />
              Ahmedabad, Gujarat, India
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Lokaci</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Support Center</a></li>
            <li><a href="#" className="hover:underline">Book Demo</a></li>
          </ul>
        </div>

        {/* Social & Proof */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaInstagram className="text-pink-500" />
              <a href="#" className="hover:underline">@lokacipro</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              WhatsApp Updates
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook className="text-blue-500" />
              Lokaci Pro
            </li>
          </ul>
          <p className="text-xs text-gray-400 mt-6">
            🇮🇳 Proudly Made in India ❤️ for Indian Salons
          </p>
        </div>

        {/* Mini Case Study */}
        <div>
          <h3 className="font-bold text-lg mb-4">📈 Success Story</h3>
          <p className="text-sm italic mb-2">
            "Increased revenue by 52% and reduced admin time by 70% in just 2 months with Lokaci Pro. Now I can focus on what I love – making customers beautiful."
          </p>
          <p className="text-sm font-semibold">– Neha Gupta, Green Leaf Salon, Pune</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lokaci Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
