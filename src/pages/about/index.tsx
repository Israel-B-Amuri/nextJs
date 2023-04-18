import Header from '@/src/components/Header'
import React from 'react'
import Footer from '@/src/components/Footer'
import style from '../../styles/Home.module.css'
const index = () => {
  return (
    <main className={style.main}>
      <Header/>
      <div className={style.container}>
        <h1>About Us</h1>
        <div className='paragraph'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Repudiandae nobis recusandae quibusdam, aliquid fugiat necessitatibus 
             deserunt eius labore suscipit eaque tempora. Quo, illo repellendus 
             incidunt corporis fuga placeat veritatis nostrum.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Repudiandae nobis recusandae quibusdam, aliquid fugiat necessitatibus 
             deserunt eius labore suscipit eaque tempora. Quo, illo repellendus 
             incidunt corporis fuga placeat veritatis nostrum.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Repudiandae nobis recusandae quibusdam, aliquid fugiat necessitatibus 
             deserunt eius labore suscipit eaque tempora. Quo, illo repellendus 
             incidunt corporis fuga placeat veritatis nostrum.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Repudiandae nobis recusandae quibusdam, aliquid fugiat necessitatibus 
             deserunt eius labore suscipit eaque tempora. Quo, illo repellendus 
             incidunt corporis fuga placeat veritatis nostrum.
          </p>
        </div>
      </div>
      <Footer className={style.footer}/>
    </main>
  )
}

export default index
