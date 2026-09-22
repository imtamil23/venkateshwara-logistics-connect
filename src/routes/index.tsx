import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Truck,
  Package,
  Route as RouteIcon,
  Navigation,
  MessageCircle,
  CalendarDays,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";
import loadingImage from "@/assets/loading-parcels.jpg";
import brandMark from "@/assets/favicon-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sree Venkateswaraa Regular Service — Logistics in Dharmapuri",
      },
      {
        name: "description",
        content:
          "Sree Venkateswaraa Regular Service is a logistics service at RC RiceMill, 47, Dharmapuri–Pennagaram Main Rd, Kumarasamypettai, Dharmapuri, Tamil Nadu 636701. Open daily until 11:30 PM. Call 04342 414 817.",
      },
      {
        property: "og:title",
        content: "Sree Venkateswaraa Regular Service — Logistics in Dharmapuri",
      },
      {
        property: "og:description",
        content:
          "Trusted logistics service in Kumarasamypettai, Dharmapuri. Open daily until 11:30 PM. Call 04342 414 817.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "04342 414 817";
const PHONE_TEL = "tel:+914342414817";
const MOBILES = [
  { display: "+91 63822 10003", tel: "tel:+916382210003", wa: "916382210003" },
  { display: "+91 97869 57249", tel: "tel:+91786957249", wa: "91786957249" },
];
const VEHICLE_TYPES = [
  "Auto",
  "Mini truck / Tempo",
  "Lorry",
  "Tractor with trailer",
  "Not sure — advise me",
];
const SERVICE_TYPES = [
  "Goods transport",
  "Parcels & deliveries",
  "Regular service runs",
  "Something else",
];
const ADDRESS =
  "RC RiceMill, 47, Dharmapuri - Pennagaram Main Rd, Kumarasamypettai, Dharmapuri, Tamil Nadu 636701";
const MAP_QUERY =
  "Sree Venkateswaraa Regular Service, RC RiceMill, 47, Dharmapuri - Pennagaram Main Rd, Kumarasamypettai, Dharmapuri, Tamil Nadu 636701";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY
)}&z=15&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_QUERY
)}`;

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <QuickFacts />
        <Services />
        <RequestForm />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={brandMark}
            alt="Sree Venkateswaraa Regular Service logo"
            className="h-10 w-10 rounded-xl"
            width={40}
            height={40}
          />
          <span className="font-display text-sm leading-tight tracking-wide uppercase sm:text-base">
            Sree Venkateswaraa
            <span className="block text-muted-foreground">Regular Service</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">
            Services
          </a>
          <a href="#request" className="hover:text-foreground">
            Request a service
          </a>
          <a href="#location" className="hover:text-foreground">
            Location
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href={PHONE_TEL}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call now</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary">
      <img
        src={heroImage}
        alt="Goods vehicles loaded with parcels on a Dharmapuri street"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 text-primary-foreground sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
          <Star className="h-4 w-4 fill-current" aria-hidden />
          5.0 rated on Google
        </span>
        <h1 className="max-w-3xl font-display text-4xl leading-tight uppercase sm:text-5xl lg:text-6xl">
          Sree Venkateswaraa Regular Service
        </h1>
        <p className="max-w-2xl text-lg text-primary-foreground/90">
          Your trusted logistics partner in Dharmapuri. From a single parcel to
          a full load — we move your goods regularly, reliably, and on time.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Navigation className="h-5 w-5" aria-hidden />
            Get directions
          </a>
        </div>
        <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
          <Clock className="h-4 w-4" aria-hidden />
          Open daily · Closes 11:30 PM
        </p>
      </div>
    </section>
  );
}

function QuickFacts() {
  const facts = [
    {
      icon: Star,
      title: "5.0 on Google",
      text: "Rated 5.0 by customers on Google Maps.",
    },
    {
      icon: Clock,
      title: "Open late",
      text: "Open every day until 11:30 PM.",
    },
    {
      icon: MapPin,
      title: "Easy to reach",
      text: "Right on the Dharmapuri–Pennagaram Main Road, next to RC RiceMill.",
    },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        {facts.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Truck,
      title: "Goods transport",
      text: "Local movement of goods around Dharmapuri and nearby towns along the Pennagaram route.",
    },
    {
      icon: Package,
      title: "Parcels & deliveries",
      text: "Pickup and drop of parcels and consignments, big or small.",
    },
    {
      icon: RouteIcon,
      title: "Regular service runs",
      text: "Scheduled, repeat trips for shops, mills and businesses that move goods every day.",
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What we do
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">
            Logistics, the regular way
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Call us and tell us what you need moved — we will confirm the
          vehicle, timing and price over the phone.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 grid items-center gap-6 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
        <img
          src={loadingImage}
          alt="Parcels being loaded for delivery"
          className="h-64 w-full object-cover md:h-80"
          loading="lazy"
          width={1200}
          height={900}
        />
        <div className="p-6 md:pr-10">
          <h3 className="font-display text-2xl uppercase">
            One call, goods on the move
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Whether it is a rush delivery or a daily run, ring us at{" "}
            <a
              href={PHONE_TEL}
              className="font-semibold text-primary underline underline-offset-4"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            and we will take it from there.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

function RequestForm() {
  const [vehicleType, setVehicleType] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentTo, setSentTo] = useState<string | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  function localPhone() {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
    return digits;
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!vehicleType) next.vehicleType = "Please choose a vehicle type.";
    if (!service) next.service = "Please choose the service you need.";
    if (!date) next.date = "Please pick a date.";
    else if (date < today) next.date = "Please pick today or a later date.";
    if (!/^[6-9]\d{9}$/.test(localPhone()))
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function waLink(waNumber: string) {
    const lines = [
      "Hello Sree Venkateswaraa Regular Service, I would like to request a service.",
      `Vehicle type: ${vehicleType}`,
      `Service needed: ${service}`,
      `Preferred date: ${formatDate(date)}`,
      `My number: ${localPhone()}`,
    ];
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }

  function handleSubmit(waNumber: string) {
    if (!validate()) return;
    window.open(waLink(waNumber), "_blank", "noopener,noreferrer");
    setSentTo(waNumber);
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
  const errorClass = "mt-1 flex items-center gap-1 text-xs text-destructive";

  return (
    <section id="request" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Book a pickup
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">
            Request a service
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Tell us what you need moved and when. Your request opens in
            WhatsApp, ready to send straight to our team — we will confirm the
            vehicle, timing and price back to you.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Pick the vehicle type that fits your load",
              "Choose the service you need",
              "We reply on WhatsApp or call you back",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
          {sentTo ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <CheckCircle2 className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="font-display text-2xl uppercase">
                Thanks for contacting us!
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Your request was opened in WhatsApp for{" "}
                <span className="font-semibold text-foreground">
                  {sentTo === MOBILES[0].wa
                    ? MOBILES[0].display
                    : MOBILES[1].display}
                </span>
                . Just press send there, and we will confirm your booking
                shortly. You can also reach us on the other number if needed.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {MOBILES.filter((m) => m.wa !== sentTo).map((m) => (
                  <button
                    key={m.wa}
                    type="button"
                    onClick={() => handleSubmit(m.wa)}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Send to {m.display}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setSentTo(null);
                    setErrors({});
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  New request
                </button>
              </div>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(MOBILES[0].wa);
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="vehicleType"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  Vehicle type
                </label>
                <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select a vehicle</option>
                  {VEHICLE_TYPES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                {errors.vehicleType && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                    {errors.vehicleType}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  Required service
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select a service</option>
                  {SERVICE_TYPES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                    {errors.service}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  Preferred date
                </label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={fieldClass}
                />
                {errors.date && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                    {errors.date}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  Your phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  className={fieldClass}
                />
                {errors.phone && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                    {errors.phone}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Send request on WhatsApp
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Or call us directly:{" "}
                <a
                  href={PHONE_TEL}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Find us
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">
          Location
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3">
            <iframe
              title="Map showing Sree Venkateswaraa Regular Service, Dharmapuri"
              src={MAP_EMBED_URL}
              className="h-80 w-full lg:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div
            id="contact"
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 lg:col-span-2"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href={PHONE_TEL}
                  className="mt-1 block text-sm font-medium text-primary underline underline-offset-4"
                >
                  {PHONE_DISPLAY}
                </a>
                {MOBILES.map((m) => (
                  <a
                    key={m.wa}
                    href={m.tel}
                    className="mt-1 block text-sm font-medium text-primary underline underline-offset-4"
                  >
                    {m.display}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Open daily · Closes 11:30 PM
                </p>
              </div>
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src={brandMark}
            alt=""
            className="h-9 w-9 rounded-lg"
            width={36}
            height={36}
          />
          <div>
            <p className="font-display text-sm uppercase tracking-wide">
              Sree Venkateswaraa Regular Service
            </p>
            <p className="text-xs text-primary-foreground/70">
              Logistics service · Dharmapuri, Tamil Nadu
            </p>
          </div>
        </div>
        <div className="text-xs text-primary-foreground/70">
          <p>{ADDRESS}</p>
          <p>
            <a
              href={PHONE_TEL}
              className="font-semibold text-primary-foreground underline underline-offset-4"
            >
              {PHONE_DISPLAY}
            </a>
            {MOBILES.map((m) => (
              <span key={m.wa}>
                {" · "}
                <a
                  href={m.tel}
                  className="font-semibold text-primary-foreground underline underline-offset-4"
                >
                  {m.display}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
