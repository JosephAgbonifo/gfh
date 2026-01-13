export default function People() {
  return (
    <div className="bg-gray-200 h-[70vh] flex items-center justify-center md:py-20 ">
      <div className="flex w-[75%] m-auto">
        {" "}
        <div className="flex-1">
          <div className="text-center font-semibold md:text-left text-xl md:text-4xl text-brand-primary mb-2">
            Our People
          </div>
          <div className="text-center md:text-justify text-gray-500 text-sm leading-7">
            Our team brings together a diverse group of professionals with deep
            expertise in finance, technology, policy, and industry advocacy.
            Guided by a Board of Trustees & a strong Governing Council, our
            leadership is structured to drive the strategic vision of
            FintechNGR, while our dedicated staff manage operations and execute
            projects that strengthen Nigeria’s fintech ecosystem. Members of our
            team are passionate advocates for innovation and are committed to
            positioning Nigeria as a leader in digital financial services.
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          Image goes here
        </div>
      </div>
    </div>
  );
}
