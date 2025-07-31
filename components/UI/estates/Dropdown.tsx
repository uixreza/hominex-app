import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IoMdStarOutline } from "react-icons/io";
import Link from "next/link";
import { BsSortUpAlt } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { useState } from "react";
export default function Dropdown() {
  const [tag, setTag] = useState("دسته بندی");
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset cursor-pointer">
        {tag}
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
        <div className="py-1">
          <MenuItem>
            <span
              onClick={() => setTag("پربازدید")}
              className=" px-4 cursor-pointer flex flex-row items-center gap-2 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              <IoMdStarOutline /> پربازدید
            </span>
          </MenuItem>
          <MenuItem>
            <span
              onClick={() => setTag("قدیمی ترین")}
              className=" px-4 cursor-pointer flex flex-row items-center gap-2 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              <BsSortUpAlt /> قدیمی ترین
            </span>
          </MenuItem>
          <MenuItem>
            <span
              onClick={() => setTag("جدیدترین")}
              className=" px-4 cursor-pointer flex flex-row items-center gap-2 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              <BsSortDown /> جدیدترین
            </span>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
