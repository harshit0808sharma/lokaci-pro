'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsChat } from "react-icons/bs";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { responses } from '@/public/chatData';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const pathname = usePathname();
  const navRefs = useRef([]);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const containerRef = useRef(null)
  const navbarRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

   useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpenChat(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

   useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const activeIndex = navLinks.findIndex((link) => link.href === pathname);
    if (activeIndex === -1) {
      setUnderlineProps({ left: 0, width: 0 });
      return;
    }
    const activeLink = navRefs.current[activeIndex];
    if (activeLink) {
      setUnderlineProps({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [pathname]);


  useEffect(() => {
    if (!menuOpen) setShowNumbers(false);
  }, [menuOpen]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages(prev => [...prev, { type: "user", text: input }]);
    setInput("");

    const userInput = input.toLowerCase(); //hi
    const matchedResponse = responses.find(r => r?.keywords.some(k => userInput.includes(k)));
    const botReplay = matchedResponse ? matchedResponse.reply : "Sorry, I'm not sure?"

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: "bot", text: botReplay }
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative">

        {/* Our Logo */}
        <Link href="/" className="flex items-center h-12">
          <h1 className="text-black font-bold text-4xl">Lokaci <span className='text-yellow-500'>Pro</span></h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-gray-700 font-medium relative whitespace-nowrap">
          {navLinks.map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              ref={(el) => (navRefs.current[index] = el)}
              className={`relative px-2 py-1 rounded hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${pathname === href ? 'text-blue-500 font-semibold' : ''
                }`}
            >
              {label}
            </Link>
          ))}
          {underlineProps.width > 0 && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 h-[2px] bg-blue-500 rounded"
              style={{
                left: underlineProps.left,
                width: underlineProps.width,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4 relative">

          {/* Call Us Button */}
          <div className="relative">
            <button
              onClick={() => setShowNumbers(!showNumbers)}
              className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-haspopup="true"
              aria-expanded={showNumbers}
              aria-controls="phone-numbers-dropdown"
            >
              <FaPhoneAlt aria-hidden="true" /> Call Us
            </button>

            {/* Phone Numbers List */}
            <AnimatePresence>
              {showNumbers && (
                <motion.div
                  id="phone-numbers-dropdown"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 bg-white border rounded-lg shadow-lg p-3 text-gray-700 w-48 max-w-[90vw] z-50"
                >
                  <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 py-0.5">
                    <FaPhoneAlt /> +91 98765 43210
                  </a>
                  <a href="tel:+919123456789" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 py-0.5">
                    <FaPhoneAlt /> +91 91234 56789
                  </a>
                  <a href="tel:+919988776655" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 py-0.5">
                    <FaPhoneAlt /> +91 99887 76655
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Free Demo Button */}
          <Link
            href="/contact"
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Free Demo
          </Link>

          {/* <CiLight className='text-black text-4xl cursor-pointer'/> */}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsOpenChat(!isOpenChat)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-yellow-600 text-white shadow-lg flex items-center justify-center hover:bg-yellow-700 transition"
      >
        {isOpenChat ? <FaTimes className="text-2xl" /> : <BsChat className="text-2xl" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpenChat && (
          <motion.div
          ref={containerRef}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-80 max-w-sm max-h-96 bg-white rounded-xl shadow-xl flex flex-col"
          >

            {/* Header */}
            <div className="bg-yellow-600 text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-bold text-lg">Lokaci Chat</h3>
              <button onClick={() => setIsOpenChat(!isOpenChat)}><FaTimes /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto h-64 space-y-3 custom-scrollbar" ref={scrollRef}>
              {messages.length === 0 && (
                <p className="text-gray-600 text-sm">Hi! How can I help you today?</p>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-xs break-words ${msg.type === "user" ? "bg-yellow-600 text-white" : "bg-gray-200 text-gray-800"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                onClick={sendMessage}
                className="bg-yellow-600 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            ref={navbarRef}
            className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3 overflow-hidden"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${pathname === href ? 'text-blue-500 font-semibold' : ''
                  }`}
              >
                {label}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-2 px-3">
              <button
                onClick={() => setShowNumbers(!showNumbers)}
                className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-haspopup="true"
                aria-expanded={showNumbers}
                aria-controls="phone-numbers-dropdown-mobile"
              >
                <FaPhoneAlt aria-hidden="true" /> Call Us
              </button>

              <AnimatePresence>
                {showNumbers && (
                  <motion.div
                    id="phone-numbers-dropdown-mobile"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border rounded-lg shadow-lg p-3 text-gray-700 w-full"
                  >
                    <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 py-0.5">
                      <FaPhoneAlt /> +91 98765 43210
                    </a>
                    <a href="tel:+919123456789" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 py-0.5">
                      <FaPhoneAlt /> +91 91234 56789
                    </a>
                    <a href="tel:+919988776655" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-400 rounded px-1 py-0.5">
                      <FaPhoneAlt /> +91 99887 76655
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/contact"
                className="bg-black text-white rounded-lg px-4 py-2 text-center hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                Free Demo
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
