import Image from "next/image";

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[700px]'>
            <Image
                src='https://links.papareact.com/0fm'
                layout='fill'
                objectFit='cover'
                alt='Hero Banner'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm font-semibold sm:text-lg'>
                    Note sure where to go? Perfect.
                </p>
                <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                    I&apos;m flexible
                </button>
            </div>
        </div>
    );
};

export default Banner;
