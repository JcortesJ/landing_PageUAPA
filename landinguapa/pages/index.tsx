import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Infodiv from '../components/divFeat'
import Form from '../components/formU'
import InfoCon from '../components/divCont'
import Footer from '../components/footC'

const Home: NextPage = () => {
  return (

      <><Head>
      <title>Landing UAPA</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/landing.ico" />
    </Head><main className={styles.main}>
        <article className={styles.fondoBlanco}>
          <section className={styles.fondoImagen}>
            <Navbar></Navbar>
            <h1 className={styles.letrasIniciales} id="Home">
              The best products start with Figma
            </h1>
            <h4 className={styles.letrasMedio}><p>Most calendars are designed for teams.</p><p> Slate is designed  for freelancers</p>
            </h4>
            <button className={styles.botonFancy}>
              Try For Free
            </button>
            {/*
    <div className={styles.flex1}>
      <div className={styles.trianguloIzq}></div>
      <div className={styles.trianguloDer}></div>
    </div> */}
          </section>

          <section className={styles.features}>
            <h2 className={styles.tituloF} id="Product">Features</h2>
            <h4 className={styles.subtituloF}>
              <p>Most calendars are designed for teams.  </p>
              <p>Slate is designed for freelancers</p>
            </h4>
            <div className={styles.flex2}>
              <Infodiv {...["/circ_cuad.png", "OpenType features Variable fonts", "Slate helps you see how many more days you need to work to reach your financial goal."]} />
              <Infodiv {...["/lapiz_trazo.png", "Design with real data", "Slate helps you see how many more days you need to work to reach your financial goal."]} />
              <Infodiv {...["/lapiz.png", "Fastest way to take action", "Slate helps you see how many more days you need to work to reach your financial goal."]} />

            </div>
            <div>
              <img src={"/screen.png"} width={1000} height={600} className={styles.imgGrande}></img>
              <img src={"/play.png"} width={150} height={150} className={styles.playB} />
              <img src={"/trianguloP.png"} width={38} height={38} className={styles.playTB} />

            </div>
          </section>
          <section className={styles.formulario}>
            <h2 className={styles.tituloF} id="Contact">Contact</h2>
            <h4 className={styles.subtituloF}><p>Most calendars are designed for teams. </p>

              <p>Slate is designed for freelancers</p>
            </h4>
            <div className={styles.flex3}>
              <Form></Form>
              <div className={styles.flex4}>
                <div className={styles.flex6}>
                  <InfoCon {...["/ubicacion.png", "6386 Spring St undefined Anchorage,Georgia 12473 United States"]}></InfoCon>
                  <InfoCon {...["/cel.png", "(843) 555-0130"]}></InfoCon>
                  <InfoCon {...["/mens.png", "willie.jennings@example.com"]}></InfoCon>
                </div>
                <img src={"/mapa.png"} height={230} width={383} className={styles.mapa}></img>
                <div className={styles.flex6}>
                  <img src={"/tw_azul.png"} height={25} width={25}></img>
                  <img src={"/fb_azul.png"} height={25} width={25}></img>
                  <img src={"/in_azul.png"} height={25} width={25}></img>
                </div>

              </div>
            </div>
          </section>
        </article>





        <Footer></Footer>


      </main></>
  
  )
}

export default Home
