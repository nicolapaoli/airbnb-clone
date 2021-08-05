import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon} from "@heroicons/react/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10">
            {/* Logo */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Search */}
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 px-2">
                <input className="flex-grow bg-transparent outline-none pl-2 text-gray-600 placeholder-gray-400"
                       type="text" placeholder="Start your search.."/>
                <SearchIcon
                    className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"
                />
            </div>

            {/*    User */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex p-2 rounded-full items-center space-x-2 border-2 cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header