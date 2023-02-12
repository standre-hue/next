import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import pic from '../public/pen.jpg'
import pic2 from '../public/two.jpg'
import pic3 from '../public/kirby.jpg'
import pic4 from '../public/eric.jpg'
import Image from 'next/image';
import { useRef } from 'react'


import '../app/globals.css'

function About() {
    const scrollRef =  useRef(null).current;
    return (  
        <div className='bg-[#EBE3CC] pb-0' ref={scrollRef}>
            <Header/>
            <div className='pt-8 px-4 max-w-[1000px] mx-auto'>
                <h1 className='font-semibold mb-2 text-2xl lg:text-3xl'>Philoxenia - φιλοξενια</h1>
                
                <div className='lg:flex '>
                <div>
                <div className='w-full h-[1px] bg-black mb-1'></div>
                <div className='w-full h-[1px] bg-black mb-8'></div>

                <p className='text-sm lg:text-base mb-4'>
                At Kokkari Estiatorio, we are driven by the concept of philoxenia, the art of making a stranger a friend. This philosophy
                 drives our efforts to create a cuisine fit for the gods with the hospitality of a proper Greek home — a restaurant that 
                 you would never want to leave
                </p>

                <p className='text-sm mb-4 lg:text-base'>
                Named after a small fishing village on the island of Samos in the Aegean Sea, Kokkari is the sister restaurant to acclaimed 
                Evvia Estiatorio in Palo Alto, California.
                </p>

                <p className='text-sm mb-4 lg:text-base'>
                Legendary Kokkari is the site where Orion, son of the Greek god Poseidon, fell in love with the daughter of the King of 
                Chios. For her love, Orion foraged the island for wild game and seafood to prepare elaborate banquets: Cuisine fit for 
                the gods.
                </p>
                <p className='text-sm mb-4 lg:text-base'>
                On entering Kokkari, guests experience the old-world charm of a rustic Mediterranean country inn. An inviting fireplace, 
                extensive woodwork, hand-made pottery and freshly picked flowers all reflect the warmth and tradition of ages-old hospitality.
                </p>
                </div>
                <div className='w-full h-[500px] relative lg:ml-4'>
                <Image src={pic2} 
                  layout='fill'
				  objectFit='container'
				  objectPosition='left'/>
                </div>

                </div>

                <div className='w-full h-[1px] bg-black mb-1 mt-8'></div>
                <div className='w-full h-[1px] bg-black mb-8'></div>

                <div className='flex justify-between flex-wrap'>

                <div className='lg:w-1/2 mx-auto pl-4 items-start flex flex-col'>
                <div className='  max-w-[350px] p-8 border border-l-2  border-black flex flex-col items-center'>
                    <p className='font-bold text-xl text-left w-full'>KOKKARI ESTIATORIO</p>
                    <p className='font-bold text-xl text-left w-full'></p>
                    <p className='text-center font-semibold w-64 my-2'>200 Jackson Street (at From St.) San francisco, CA 941111</p>
                    <p>p:415.941.0983</p>
                    <p>fx:415.941.0983</p>
                    <p className='my-2 text-center'>Reservations & hoursDirection via mobile map</p>

                </div>

                <div className='p-8 flex flex-col items-center'>
                    <div className='flex justify-center  w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Managing Partener </h1>
                        <h1 className='w-1/2'>Paul Kirby</h1>
                    </div>

                    <div className='flex justify-center w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Chef/Partner</h1>
                        <h1 className='w-1/2'>Erik Cosselmon</h1>
                    </div>

                    <div className='flex justify-center w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>General Manager</h1>
                        <h1 className='w-1/2'>William Boumier</h1>
                    </div>

                    <div className='flex justify-center w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Chef de cuisine</h1>
                        <h1 className='w-1/2'>Manuel Vera</h1>
                    </div>

                    <div className='flex justify-center w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Sous Chefs</h1>
                        <div className='w-1/2'>
                            <h1>Brian Beach</h1>
                            <h1>Miho Reis</h1>
                            <h1>Yaya isibor</h1>
                            
                        </div>
                        
                    </div>

                    <div className='flex justify-center w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Pastry</h1>
                        <div className='w-1/2'>
                            <h1>Brian Beach</h1>
                            <h1>Miho Reis</h1>
                       
                            
                        </div>
                        
                    </div>
                    
                    <div className='flex justify-center w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Managers</h1>
                        <div className='w-1/2'>
                            <h1>Brian Beach</h1>
                            <h1>Miho Reis</h1>
                            <h1>Yaya isibor</h1>
                            <h1>Miho Reis</h1>
                            <h1>Yaya isibor</h1>
                            
                        </div>
                        
                    </div>

                    <div className='flex justify-center  w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Wine Buyer </h1>
                        <h1 className='w-1/2'>Paul Kirby</h1>
                    </div>

                    <div className='flex justify-center  w-96 mx-auto mb-2'>
                        <h1 className='font-semibold mr-2 w-1/2  text-right'>Event Manager </h1>
                        <h1 className='w-1/2'>Paul Kirby</h1>
                    </div>
                </div>
                </div>

                <div className='lg:w-1/2 mx-auto'>

                <p className=''>
                <Image src={pic3}
                  width='300'
                  height='300'
                  className='float-left p-0 m-0 m-4'
                  />
                <h1 className='font-bold  text-xl text'>Paul Kirby</h1><br/>
                <h1 className='font-medium text-base '>Managing Partner </h1><br/>

                “Running a restaurant is all about taking care of people,” says Paul Kirby who has been at 
                the helm of Kokkari Estiatorio since 2000. “From your 
                staff to each and every guest that comes into your establishment, it is 
                important to make everyone feel comfortable and welcome. <br/>Restaurant employees 
                that are valued and respected take pride in their ”
                <br/><br/>
                While Paul may be soft-spoken and charming 
                (qualities he attributes to his Southern upbringing), 
                he is extremely driven. His dedicated, hands-on approach 
                to management ensures the high standards of service and hospitality at 
                the restaurant have stayed consistent for over 15 years. Under Kirby, Kokkari’s
                 refreshing approach to service emphasizes the emotional elements of hospitality: Have a good 
                 time and above all, make sure the guests have a great time.

                Paul came to the West Coast after years managing w
                aterfront restaurant properties in The Hamptons outside 
                of New York City. <br/><br/>His first job in San Francisco was working
                 alongside acclaimed, Bay Area Chef, Reed Hearon as General Manager of Rose Pistola. 
                 After three years with Hearon he came to Kokkari Estiatorio bringing with him 
                 a genuine appreciation and knowledge of rustic Meditteranean cuisine and wines, an essential 
                 prerequisite for working at Kokkari.<br/><br/> In 2006 he was named Managing Partner 
                 of both Kokkari and Evvia in Palo Alto.
                </p>

                <p className='mt-16'>
                <Image src={pic4}
                  width='300'
                  height='300'
                  className='float-left p-0 m-0 m-4'
                  />
                <h1 className='font-bold  text-xl text'>Erik Cosselmon</h1><br/>
                <h1 className='font-medium text-base '>Chef/Partner</h1><br/>

                “Running a restaurant is all about taking care of people,” says Paul Kirby who has been at 
                the helm of Kokkari Estiatorio since 2000. “From your 
                staff to each and every guest that comes into your establishment, it is 
                important to make everyone feel comfortable and welcome. <br/>Restaurant employees 
                that are valued and respected take pride in their ”
                <br/><br/>
                While Paul may be soft-spoken and charming 
                (qualities he attributes to his Southern upbringing), 
                he is extremely driven. His dedicated, hands-on approach 
                to management ensures the high standards of service and hospitality at 
                the restaurant have stayed consistent for over 15 years. Under Kirby, Kokkari’s
                 refreshing approach to service emphasizes the emotional elements of hospitality: Have a good 
                 time and above all, make sure the guests have a great time.

                Paul came to the West Coast after years managing w
                aterfront restaurant properties in The Hamptons outside 
                of New York City. <br/><br/>His first job in San Francisco was working
                 alongside acclaimed, Bay Area Chef, Reed Hearon as General Manager of Rose Pistola. 
                 After three years with Hearon he came to Kokkari Estiatorio bringing with him 
                 a genuine appreciation and knowledge of rustic Meditteranean cuisine and wines, an essential 
                 prerequisite for working at Kokkari.<br/><br/> In 2006 he was named Managing Partner 
                 of both Kokkari and Evvia in Palo Alto.
                </p>

                </div>

                </div>

            



            </div>
            
            <Footer/>

        </div>
    );
}

export default About;
