import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <h1>I am the Banner</h1>
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-md sm:text-xl text-gray-700">Not sure where to go? Perfect</p>
                <button
                    className="text-purple-500 bg-white py-4 px-10 rounded-full shadow-md
                    font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150
                    uppercase"
                >
                    Start here
                </button>
            </div>
        </div>
    )
}

export default Banner