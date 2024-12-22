import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
  return (
    <section className="flex justify-center mt-5 md:absolute md:">
      <form className="lg:w-[1100px] flex items-center gap-2 bg-greyShades-300 rounded-xl border-[1px] border-greyShades-400 py-[10px] pl-[18px] pr-[10px]">
        <input type="text" className="bg-greyShades-300 py-[10px] pl-[18px] pr-[10px] outline-none" />
        <button className="flex items-center gap-[6px] bg-purple-200 py-[14px] px-[20px] rounded-lg cursor-pointer">
          <CiSearch className="w-5 text-white-200"/>
          <span className="hidden md:block font-medium text-sm">Find Properties</span>
        </button>
      </form>
    </section>
  );
};

export default SearchInput;
