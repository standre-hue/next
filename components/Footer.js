import Link from 'next/link'

function Footer() {
    return ( 
        <div className='h-[500px] flex flex-col items-center justify-center mt-16'>
            <ul className="mx-auto flex hidden sm:inline-flex">
                <li className="tracking-extrat font-thin mx-16 "><Link href='/'>PRESS ROOM</Link></li>
                <li className="tracking-extrat font-thin mx-16 ">PRESS ROOM</li>
                <li className="tracking-extrat font-thin mx-16 ">PRESS ROOM</li>
            </ul>
            <h1 className='font-thin mt-4 mb-12'>KOKKARI    |     EVVIA</h1>
            <h1 className='font-thin'>KOKKARI ESTIATORIO</h1>
            <h1 className='font-thin'>200 Jackson Street (at Front St.)</h1>
            <h1 className='font-thin'>San Francisco, CA 94111</h1>
            <h1 className='font-thin'>p: 415.981.0983 fx:415.982.0983</h1>

            <h1 className='font-thin mt-4'>reservations & hours</h1>
            <h1 className='font-thin mb-32'>directions</h1>

            <div className='items-center  flex justify-between px-2 lg:px-8 h-16 w-full mt-12 mb-0 b-0 bg-[#282A2B]'>
                <h1 className='font-thin text-white'>© 2015-2023 Kokkari </h1>
                <h1 className='font-thin text-white text-right'> Photos by Sara Remington | Site by TenayaPartner</h1>
            </div>
        </div>
     );
}

export default Footer;