import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className='wrapper'>
      <div className="box">
                <a href="/blank">
                <img src="https://i.ibb.co/CKkbx4g/logo.png" alt="logo" />
                </a>
            </div>
            <div className="box">
            <a href="/blank">
                Shop</a>

            </div>
            <div className="box">
                <a href="/blank">
                    <div className="blank">
                    
                    </div> 
                Recording</a>
            </div>
            <div className="box">
                <a href="/blank">
                    <div className="blank">
                    
                    </div> 
                  Miscellaneous Works </a>
            </div>
            <div className="box">
                <a href="/blank">
                    <div className="blank">
                    
                    </div> 
                Contact</a>
            </div>
            {/*<img src="https://i.ibb.co/cNGX4bq/logo.png" alt="logo" />*/}
        </div>
    </div>
  )
}
