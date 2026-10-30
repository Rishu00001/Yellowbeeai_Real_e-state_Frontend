import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Profile() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-full bg-[#f3f6fa] px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-[768px]">
        <section className="rounded-[5px] border border-[#e8ebf0] bg-white px-5 pb-[18px] pt-4 sm:px-[18px]">
          {/* Heading */}
          <h1 className="border-b border-[#edf0f4] pb-[18px] text-[14px] font-semibold text-[#282c31]">
            Profile Details
          </h1>

          {/* Agent Details */}
          <div className="flex items-center gap-3 pt-4">
            <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-[#f7f8fa] p-1">
              <img
                src="https://images.unsplash.com/photo-1551839400-9743e8b4f4a4?auto=format&fit=crop&w=200&q=85"
                alt="Lisa Clark"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-[14px] font-semibold text-[#30343a]">
                Lisa Clark
              </h2>
              <p className="mt-1 text-[12px] text-[#777d85]">
                Agent of Property
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-5 space-y-4 border-b border-[#edf0f4] pb-4 text-[12px]">
            <p className="flex items-center gap-4 text-[#777d85]">
              <MapPin
                size={14}
                className="shrink-0 text-[#ff385c]"
              />
              <span>302 Av Park, New York</span>
            </p>

            <a
              href="tel:+1234020017813"
              className="flex items-center gap-4 text-[#0784ff] hover:underline"
            >
              <Phone
                size={14}
                className="shrink-0 text-[#ff385c]"
              />
              <span>(234) 0200 17813</span>
            </a>

            <a
              href="mailto:lisa@gmail.com"
              className="flex items-center gap-4 text-[#0784ff] hover:underline"
            >
              <Mail
                size={14}
                className="shrink-0 text-[#ff385c]"
              />
              <span>lisa@gmail.com</span>
            </a>
          </div>

          {/* Inquiry Form */}
          <form onSubmit={handleSubmit} className="pt-4">
            <h2 className="mb-[14px] text-[13px] font-semibold text-[#30343a]">
              Request Inquiry
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                aria-label="Full Name"
                required
                className="h-[37px] w-full rounded-[2px] border border-[#dfe5ec] px-3 text-[11px] outline-none placeholder:text-[#7b7f84] focus:border-[#ff385c]"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                aria-label="Phone Number"
                required
                className="h-[37px] w-full rounded-[2px] border border-[#dfe5ec] px-3 text-[11px] outline-none placeholder:text-[#7b7f84] focus:border-[#ff385c]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-label="Email Address"
                required
                className="h-[37px] w-full rounded-[2px] border border-[#dfe5ec] px-3 text-[11px] outline-none placeholder:text-[#7b7f84] focus:border-[#ff385c]"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                aria-label="Message"
                required
                rows={4}
                className="min-h-[80px] w-full resize-y rounded-[2px] border border-[#dfe5ec] px-3 py-[10px] text-[11px] outline-none placeholder:text-[#7b7f84] focus:border-[#ff385c]"
              />

              <button
                type="submit"
                className="flex h-[35px] w-full items-center justify-center bg-[#ff385c] px-4 text-[11px] font-medium text-white transition hover:bg-[#e72e50]"
              >
                Submit Request
              </button>

              {submitted && (
                <p
                  role="status"
                  className="text-[12px] text-[#159b62]"
                >
                  Your inquiry has been submitted successfully.
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}