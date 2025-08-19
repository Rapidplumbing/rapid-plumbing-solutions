import Image from 'next/image';
import AppointmentForm from '../components/AppointmentForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-gradient-to-r from-red-600 to-blue-700 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-6">
          <Image src="/van.png" alt="Rapid Plumbing Service Van" width={320} height={200} />
        </div>
        <h1 className="text-4xl font-bold mb-2">Rapid Plumbing Solutions</h1>
        <p className="text-lg mb-6">Fast, Reliable & Affordable Plumbing Services</p>
        <a href="tel:+19162998247" className="inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-xl">Call Now</a>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Drain Cleaning - $99 Special", desc: "Clear clogged drains quickly and effectively." },
            { title: "Pipe Repairs & Replacements", desc: "Professional repairs and full pipe replacements." },
            { title: "Water Heaters", desc: "Installations and repairs for all types." },
            { title: "Leak Detection", desc: "Accurate detection to prevent water damage." },
            { title: "Emergency Plumbing", desc: "24/7 rapid response when it matters." },
          ].map((s, i) => (
            <div key={i} className="shadow rounded-2xl p-6 text-center bg-white">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="tel:+19162998247" className="mr-3 inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-xl">Call for $99 Special</a>
          <a href="#book" className="inline-block bg-white border border-red-600 text-red-600 font-bold py-3 px-6 rounded-xl">Book Online</a>
        </div>
      </section>

      <section id="book" className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Book an Appointment</h2>
        <AppointmentForm />
      </section>

      <footer className="bg-gray-900 text-gray-200 py-8 text-center">
        <p>📍 Serving the Greater Sacramento Area</p>
        <p>📞 916-299-8247 &nbsp;|&nbsp; ✉️ rapidplumbingsolutionsllc@yahoo.com</p>
        <p>© {new Date().getFullYear()} Rapid Plumbing Solutions</p>
      </footer>
    </div>
  );
}
