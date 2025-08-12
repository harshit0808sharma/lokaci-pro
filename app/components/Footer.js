import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaEnvelope className="text-pink-500" size={20} />
              <a href="mailto:hello@lokaci.com" className="hover:underline">
                hello@lokaci.com
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaPhone className="text-pink-500" size={20} />
              <a href="tel:+91XXXXX" className="hover:underline">
                +91-XXXXX-XXXXX
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaWhatsapp className="text-green-400" size={20} />
              <a
                href="https://wa.me/91XXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-XXXXX-XXXXX
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaMapMarkerAlt className="text-red-400" size={20} />
              Ahmedabad, Gujarat, India
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Lokaci
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition">
                Support Center
              </Link>
            </li>
            <li>
              <Link href="/video" className="hover:text-white transition">
                Book Demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Proof */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Follow Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaInstagram className="text-pink-500" size={20} />
              <a
                href="https://instagram.com/lokacipro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @lokacipro
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaWhatsapp className="text-green-400" size={20} />
              WhatsApp Updates
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaFacebook className="text-blue-600" size={20} />
              Lokaci Pro
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">
            🇮🇳 Proudly Made in India ❤️ for Indian Salons
          </p>
        </div>

        {/* Mini Case Study */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">📈 Success Story</h3>
          <p className="text-sm italic mb-4 text-gray-300 leading-relaxed">
            "Increased revenue by 52% and reduced admin time by 70% in just 2 months with Lokaci Pro. Now I can focus on what I love – making customers beautiful."
          </p>
          <p className="text-sm font-semibold text-pink-500">
            – Neha Gupta, Green Leaf Salon, Pune
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Lokaci Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
