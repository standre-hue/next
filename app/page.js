import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function Restaurent() {
    return ( 
        <div className='w-screen h-screen bg-yellow-200'>
            <Header/>
            ryryry
            <Footer/>
        </div>
     );
}





export default Restaurent;
