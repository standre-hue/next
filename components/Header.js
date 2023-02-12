import Link from 'next/link'
function Header() {
    return ( 
        <>
        <div className=' bg-[#EBE3CC] px-10  flex items-center justify-between bg-white'>
            <div className='hidden sm:inline-flex lg:mx-auto py-4'>
            <div className="sm:mx-auto">
                <p className='text-2xl lg:text-7xl font-semibold border-b border-b-black tracking-widest font-semibold  text-center pb-2 w-96 mx-auto'>KOKKARI</p>
                <p className='text-sm mx-auto text-center'>ESTATTORIO</p>
                <div className="hidden lg:inline-flex mt-2">
                    <ul className="flex p-8">
                        <li className="mx-6 tracking-wider font-thin text-2xl"><Link href='/about'>ABOUT</Link></li>
                        <li className="mx-6 tracking-wider font-thin text-2xl"><Link href='/cuisine'>CUISINE</Link></li>
                        <li className="mx-6 tracking-wider font-thin text-2xl"><Link href='/menu'>MENU</Link></li>
                        <li className="mx-6 tracking-wider font-thin text-2xl"><Link href='/reservation'>RERVATIONS</Link></li>
                        <li className="mx-6 tracking-wider font-thin text-2xl"><Link href='/private'>PRIVATE DINING</Link></li>
                    </ul>
                </div>

                
            </div>
            </div> 
        </div>

        <div className=' flex flex sm:hidden bg-white w-full h-32 pt-0 justify-between items-center '>
            <div className='mx-2'>
                <p className='text-2xl lg:text-7xl font-semibold border-b border-b-black tracking-widest font-semibold  text-center pb-2 w-32 mx-auto'>KOKKARI</p>
                <p className='text-sm mx-auto text-center'>ESTATTORIO</p>
            </div>
                <div className='flex flex-col space-between  mx-2'>
                <div className='w-8 border-2 h-[40px] bg-black mb-[2px]'></div>
                <div className='w-8 border-2 h-[4px] bg-black mb-[2px]'></div>
                <div className='w-8 border-2 h-[4px] bg-black mb-[2px]'></div>
                </div>
            </div>
        </>
     );
}
export default Header;