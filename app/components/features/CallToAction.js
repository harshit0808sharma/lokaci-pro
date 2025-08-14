import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center text-black">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to transform your look?
        </h2>
        <p className="text-lg mb-8">
          Join our membership today and enjoy exclusive benefits tailored just for you.
        </p>
        <Link href="/contact"
          className="px-10 py-4 bg-white text-black border border-black font-semibold rounded-full hover:bg-gray-800 hover:text-gray-50 transition"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
}
