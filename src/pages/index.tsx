import Image from 'next/image';
import { Inter } from 'next/font/google';
import  Header  from '@/src/components/Header';
import style from '../styles/Home.module.css'
import Footer from '../components/Footer';

export default function Home() {
  async function fetchFunction(){
    const response = await fetch('http://10.111.3.78:3000/api/employees');
    const data = await response.json()
    console.log(data);
  }
  return (
    <main className={style.main}>
        <Header/>
        <div className={style.imageContainer}>
          <Image src="/optima.png"
            alt="My Image"
            width={550}
            height={500}
          />
        </div>
        <button type='button' onClick={fetchFunction}>Fetch</button>
        <Footer className={style.footer}/>
    </main>
  )
} 