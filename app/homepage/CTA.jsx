import Link from "next/link";
const CTA = () => {
  return (
    <section className="container flex flex-col gap-3 md:flex-row md:justify-between md:items-center md:mt-5 xl:mt-[100px]">
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold text-[28px]">
          Start Your Real Estate Journey Today
        </h3>
        <p className="font-medium text-sm text-greyShades-900 md:w-[490px] lg:w-[690px] xl:w-[979px] lg:text-lg xl:text-[18px]">
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <button className="py-[14px] px-5 bg-purple-200 text-white-200 rounded-lg">
        <Link href="/properties">Explore Properties</Link>
      </button>
    </section>
  );
};

export default CTA;
