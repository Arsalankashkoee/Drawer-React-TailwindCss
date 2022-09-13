import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen ? (
        <div onClick={openDrawer}>
          <AiOutlineMenu className="w-6 h-6 text-cyan-500" />
        </div>
      ) : (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="w-screen h-screen fixed inset-0 bg-black z-20 opacity-20 duration-300"
          ></div>
        </>
      )}

      {/* drawer */}
      <div
        className={`bg-white fixed top-0 right-0 h-screen w-64 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
      >
        <div className="flex items-center justify-between m-5 pb-5 border-b border-b-gray-300">
          <span className="text-lg font-bold text-cyan-500 cursor-pointer">
            Tailwind.
          </span>

          <span onClick={() => setIsOpen(false)}>
            <IoMdClose className="w-6 h-6 text-gray-500" />
          </span>
        </div>

        <div className="m-5">
          <ul className="flex flex-col items-end gap-7  transition-all ease-in duration-500">
            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700 transition-all ease-in-out duration-300"
              >
                Home
              </a>
            </li>

            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700  transition-all ease-in-out duration-300"
              >
                Docs
              </a>
            </li>

            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700  transition-all ease-in-out duration-300"
              >
                About Us
              </a>
            </li>

            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700 transition-all ease-in-out duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
