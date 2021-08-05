import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon} from "@heroicons/react/solid";

function Footer() {
    return (
        <footer className="gap-y-10 text-gray-600 items-center
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-32 py-14
        bg-gray-100
        ">
            <div className="space-y-4 text-xs">
                <h5 className="uppercase font-bold">About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Say hi</p>
                <p>Another Section</p>
                <p>Final thoughts</p>
            </div>
            <div className="space-y-4 text-xs">
                <h5 className="uppercase font-bold">Community</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Say hi</p>
                <p>Another Section</p>
                <p>Final thoughts</p>
            </div>
            <div className="space-y-4 text-xs">
                <h5 className="uppercase font-bold">Host</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Say hi</p>
                <p>Another Section</p>
                <p>Final thoughts</p>
            </div>
            <div className="space-y-4 text-xs">
                <h5 className="uppercase font-bold">Support</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Say hi</p>
                <p>Another Section</p>
                <p>Final thoughts</p>
            </div>
        </footer>
    )
}

export default Footer