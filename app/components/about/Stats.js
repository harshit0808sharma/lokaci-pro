"use client";

export default function StatsSection() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        The top-rated destination <br className="hidden md:block" /> 
        for beauty and wellness
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        One solution, one software. Trusted by the best in the beauty and wellness industry
      </p>

      {/* Stats */}
      <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* 1 million+ */}
        <div>
          <p className="text-4xl md:text-5xl font-bold">
            1 <span className="text-yellow-500">Million+</span>
          </p>
          <p className="mt-2 text-gray-700">Appointments booked</p>
        </div>

        {/* 1120+ salons */}
        <div>
          <p className="text-4xl md:text-5xl font-bold">
            1200+ <span className="text-yellow-500">Salons</span>
          </p>
          <p className="mt-2 text-gray-700">using our platform</p>
        </div>

        {/* 130,000+ partners */}
        <div>
          <p className="text-4xl md:text-5xl font-bold">
            130,000+
          </p>
          <p className="mt-2 text-gray-700">partner businesses</p>
        </div>

        {/* 45K+ stylists */}
        <div>
          <p className="text-4xl md:text-5xl font-bold">
            45K+
          </p>
          <p className="mt-2 text-gray-700">stylists and professionals</p>
        </div>

      </div>
    </section>
  );
}

