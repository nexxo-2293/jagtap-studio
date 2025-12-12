// app/services/page.tsx
import { SERVICES } from "../data";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment & Packages</h1>
        <p className="text-gray-400">Transparent pricing for professional quality.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="border border-neutral-800 bg-neutral-900/50 p-8 rounded-2xl hover:border-amber-500/50 transition duration-300">
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <div className="text-amber-500 text-3xl font-bold mb-4">{service.price}</div>
            <p className="text-gray-400 mb-8 h-12">{service.description}</p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-amber-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              href={`/book?service=${service.title}`}
              className="block w-full py-3 text-center bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
            >
              Select Package
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}