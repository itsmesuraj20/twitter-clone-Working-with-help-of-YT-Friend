import { BsSearch } from "react-icons/bs";
import LeftSidebar from "./components/LeftSidebar";
import MainComponents from "./components/MainComponents";

//Start with 1:00:10
const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Header */}
       <LeftSidebar/>
       <MainComponents/>
       <section className="fixed flex flex-col space-y-4">
       <div className="relative w-full h-full">
  <div className="absolute top-0 left-0 h-full flex items-center justify-center">
    <BsSearch className="w-5 h-5 text-gray-500" />
  </div>
  <input
    type="text"
    placeholder="Search Twitter"
    className="outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-8"
  />
</div>

       <div></div>
       <div></div>

       </section>
      </div>
    </div>
  );
};


export default page