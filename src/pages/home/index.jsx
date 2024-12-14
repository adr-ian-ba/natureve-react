// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='home-page'>
        <Navbar />

        <div className="hero-wrapper">
          <div className="img-wrapper">
            <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/ZVYF9gjpBgYrLnBunCg7GX.jpg?raw=true" alt="" />
          </div>

          <div className="info">
            <h1>Tumbuhkan Tanaman sendiri</h1>
            <h1>Dalam Ruangan Tanpa Repot</h1>
            <p>Solusi anda dalam mencari serta menumbuhkan tanaman anda sendiri</p>
            <Link to="/gallery">
              <button className='but-1'>
                Lihat Koleksi
              </button>
            </Link>
            <a href="#pelajari">
              <button className='but-2'>
                Pelajari
              </button>
            </a>
          </div>
        </div>

        <section id='pelajari'>
          <div className="apakah-wrapper" >

            <div className="img-wrapper">
              <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/ks5GkR0b6XiTontpvkVkyFFHsOtUjq5nZtIQS74I.jpg?raw=true" alt="" />
            </div>

            <div className="info">
              <h1>Apakah ruangan anda sudah sehat?</h1>

              <p>Tanaman dalam ruangan dapat membantu memurnikan udara dengan menyerap racun, meningkatkan kadar oksigen, dan mengurangi karbon dioksida.</p>
              <p>Meningkatkan produktivitas penghuni ruangan hingga 15%</p>
              <p>Memberikan perasaan tenang dan meningkatkan suasana hati penghuni ruangan</p>
              <p>Tanaman membantu meningkatkan kelembapan udara, yang bisa bermanfaat terutama di ruangan ber-AC atau pada musim kering.</p>
              <p>memberikan kesan ruang hijau</p>
            </div>
          </div>
        </section>

        <div className="wujudkan-outer">
          <section className='wujudkan-section'>
            <h1>Wujudkan Tempat Nyaman Bersama Kami</h1>
            <div className="wujudkan-wrapper">

              <div className="img-wrapper">
                <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/5ec489c2ea6a8.jpg?raw=true" alt="" />
                <h3>Beragam Pilihan Tanaman</h3>
              </div>

              <div className="img-wrapper">
                <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/laptop.jpeg?raw=true" alt="" />
                <h3>Pembelian yang mudah</h3>
              </div>

              <div className="img-wrapper">
                <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/02cbe8c7fa5faa8f8ba0b4475009e911-man-gardening_l.jpg?raw=true" alt="" />
                <h3>Bantuan Profesional</h3>
              </div>
            </div>
          </section>
        </div>

        <div className="side">
          <div className="left">
            <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/featured-image-23.jpg?raw=true" alt="" />
          </div>
          <div className="right">
            <h1>Beli Tanaman</h1>
            <h3>Tumbuhkan tanamanmu sekarang juga !</h3>
            <p>Beli Tanaman dalam jumlah satuan atau paket</p>

            <p>cocok jika ingin memuaskan hobi, atau ingin membuat rumah terasa lebih nyaman dan lebih hijau</p>
            <button>Buy Now !</button>
          </div>
        </div>

        <div className="side2">
          <div className="left">
            <img src="https://github.com/adr-ian-ba/photo-host/blob/main/natureeve%20photo/5cb6c-image-asset.jpeg?raw=true" alt="" />
          </div>
          <div className="right">
            <h1>Katalog Yang Luas</h1>
            <h3>Temukan Tanaman Yang cocok dengan rumah anda</h3>
            <p>Temukan tanaman yang sesuai dengan keadaan, kondisi serta kebutuhan rumah anda</p>

            <p>carilah tanaman yang tidak hanya memperhijau tapi juga memperindah rumah anda, kami menyediakan tanaman yang anda butuhkan dan anda inginkan</p>
            <Link to="/gallery">
              <button>
                Browse
              </button>
            </Link>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default index