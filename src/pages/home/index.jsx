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
            <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb3fBUPULQ_aaWwpLBujlJIgiNX3cgpPCl1CL4mjBCIL56kaQXOj_c9czIuTWinGXURIW5aUQiT_vMu4iims47xSbwYEu0_XA=w958-h944-rw-v1" alt="" />
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
              <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbRP2Is1kS39PRrSkuN94zyxgPhjKjsnTvP1jzJVe7yQQ52TLAYXvnW9DHRswT13V2I7aFYeWcSMoMRktQuGu93nfakr0Gi4j0=w958-h944" alt="" />
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
                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZJDVJ6P7pr5NLBbVvrJpt02H4kYMw52NwPuRqF83nhxrsT-OIu4Em027bWVBufm8E88-swjjklsxOBrlbFMq1uaYC9OLaZsg=w958-h944" alt="" />
                <h3>Beragam Pilihan Tanaman</h3>
              </div>

              <div className="img-wrapper">
                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihanF2FX2eBLUb39ROj_ytXywWUX2LtXy_XC9XQJkgdUwIR97PqBTGslI4sT3_DNOjQkXFllTQRFpmsyDxvIAazmbgq9tyeDVw=w958-h944" alt="" />
                <h3>Pembelian yang mudah</h3>
              </div>

              <div className="img-wrapper">
                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaIhNPQp3TWa3WypVIUs2RxmQisqwwf9RKpSxm4otRCnipaaE7zDHeSd907HTzMvfU4hpqf1erKmaLJ0Bgq1t2zjfO9_yfzheU=w958-h944-rw-v1" alt="" />
                <h3>Bantuan Profesional</h3>
              </div>
            </div>
          </section>
        </div>

        <div className="side">
          <div className="left">
            <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZiG5SaAEZEHePQrwLjlQe5ZT3cf1gAkR-1bGsYr43APmJE4OO9s199TcCdhKgHM6FASK_6edpfiIaX0IlPeZJX4vkrEEnsOrI=w958-h944" alt="" />
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
            <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb8m4jwSjueyGix97YDNiP1IWTrDRgDWzm4MQWxUF4lJWiENNeyyd01WFeJN54etK-bVRtf09ZC7-OwXDXkN6kmFbPAaYWclC8=w958-h944-rw-v1" alt="" />
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