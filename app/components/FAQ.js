'use client'
import { FaQuestionCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';


const FAQ = () => {
  const { faqs } = useContext(HomeContext);
  return (
    <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Everything You Need to Know
        </h2>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-md p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-3 mb-2">
                <FaQuestionCircle className="text-indigo-600 mt-1" />
                <h3 className="font-semibold text-lg text-black">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
