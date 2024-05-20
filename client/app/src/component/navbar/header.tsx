

export default function Header() {
  return (
    <>
        <header className='z-[999] relative'>
            <div className='fixed top-[0.15rem] left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'>
            </div>
            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    <span className=" text-9xl">Home</span>
                    <span>About</span>
                    <span>Projects</span>
                </ul>
            </nav>
        </header>
    </>
  )
}