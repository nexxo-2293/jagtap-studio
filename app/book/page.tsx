// app/book/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function BookingForm() {
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // REPLACE 'YOUR_FORMSPREE_ID' BELOW WITH YOUR ACTUAL ID
    const response = await fetch("https://formspree.io/f/movgywzg", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-neutral-900 border border-green-900/50 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-green-500 mb-2">Request Received!</h3>
        <p className="text-gray-400">
          Thanks for reaching out. We will review your project details and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className="mt-6 text-sm text-white underline hover:text-green-400"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ROW 1: Name and Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Name</label>
          <input required name="name" type="text" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 focus:border-amber-500 focus:outline-none transition" placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Mobile Number</label>
          <input required name="phone" type="tel" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 focus:border-amber-500 focus:outline-none transition" placeholder="+91 98765 43210" />
        </div>
      </div>

      {/* ROW 2: Email and Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Email</label>
          <input required name="email" type="email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 focus:border-amber-500 focus:outline-none transition" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Service Required</label>
          <select name="service" defaultValue={preSelectedService} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 focus:border-amber-500 focus:outline-none transition">
            <option value="General Inquiry">-- Select a Service --</option>
            <option value="Wedding Cinema">Wedding Cinema</option>
            <option value="Brand Commercials">Brand Commercials</option>
            <option value="Event Coverage">Event Coverage</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* ROW 3: Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Project Details</label>
        <textarea name="message" required rows={4} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 focus:border-amber-500 focus:outline-none transition" placeholder="Tell us about dates, location, and your vision..."></textarea>
      </div>

      <button 
        disabled={status === "submitting"}
        type="submit" 
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-neutral-800 disabled:text-gray-500 text-white font-bold py-4 rounded-lg transition duration-300"
      >
        {status === "submitting" ? "Sending..." : "Submit Booking Request"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
}

export default function BookPage() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Book a Shoot</h1>
        <p className="text-gray-400 mb-10">Tell us about your project.</p>
        <Suspense fallback={<div>Loading form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </main>
  );
}