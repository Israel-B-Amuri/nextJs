import React,{TextareaHTMLAttributes} from 'react'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import style from '../../styles/Home.module.css'
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  rows:number;
  cols:number;
}

const hello = (props:TextAreaProps) => {
  return (
    <main className={style.main}>
      <Header/>
      <div className={style.container}>
        <form className={style.form} >
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text"name='name' id='name' />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text"name='email' id='email' />
          </div>
          <div>
            <label htmlFor="tel">Phone Number:</label>
            <input type="text"name='tel' id='tel' />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={20} rows={4}></textarea>
          </div>
 
          <button type='button'>Send</button>
        </form>
      </div>
      <Footer/>
    </main>
  )
}

export default hello