import Link from "next/link";

export default function First() {
  return (
    <section
      className={`min-h-[40vh] sm:min-h-[70vh] bg-brand-secondary/70 bg-[url("/hero/hero3.jpg")] bg-blend-multiply flex items-center sm:p-16 text-white relative overflow-hidden`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional subtle animated overlay for premium feel */}
      <div className="absolute inset-0 bg-black/20 animate-pulse"></div>

      <div className="relative text-left md:w-[80%] mx-auto md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-6 drop-shadow-lg w-3/5">
          Stay at The Forefront of Fintech Innovation By Joining FintechNGR’s
          Events.
        </h2>
        <p className=" md-m-0 w-4/5 sm:text-sm md:text-sm leading-7 text-justify">
          Our Events Bring Together Industry Pioneers, Regulatory Experts,
          Startups, Investors, andTechnology Enthusiasts For Insightful
          Discussions, Hands-on Workshops, and Unparalleled Networking
          Opportunities.
        </p>
        <Link
          href="Apropos"
          className="py-2 px-7 rounded inline-block mt-7 border-2 text-white border-white"
        >
          View upcoming events
        </Link>
      </div>
    </section>
  );
}
