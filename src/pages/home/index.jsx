// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const index = () => {
  return (
    <div className='home-page'>
        <Navbar />

        <div className="hero-wrapper">
          <div className="img-wrapper">
            <img src="src\assets\home\ZVYF9gjpBgYrLnBunCg7GX.jpg" alt="" />
          </div>

          <div className="info">
            <h1>Tumbuhkan Tanaman sendiri</h1>
            <h1>Dalam Ruangan Tanpa Repot</h1>
            <p>Solusi anda dalam mencari serta menumbuhkan tanaman anda sendiri</p>
            <button className='but-1'>Lihat Koleksi</button><button className='but-2'>Pelajari</button>
          </div>
        </div>

        <section>
          <div className="apakah-wrapper">

            <div className="img-wrapper">
              <img src="src\assets\home\ks5GkR0b6XiTontpvkVkyFFHsOtUjq5nZtIQS74I.jpg" alt="" />
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
                <img src="src\assets\home\5ec489c2ea6a8.jpg" alt="" />
                <h3>Beragam Pilihan Tanaman</h3>
              </div>

              <div className="img-wrapper">
                <img src="src\assets\home\laptop.jpeg" alt="" />
                <h3>Pembelian yang mudah</h3>
              </div>

              <div className="img-wrapper">
                <img src="src\assets\home\02cbe8c7fa5faa8f8ba0b4475009e911-man-gardening_l.jpg" alt="" />
                <h3>Bantuan Profesional</h3>
              </div>
            </div>
          </section>
        </div>

        <div className="side">
          <div className="left">
            <img src="src\assets\home\featured-image-23.jpg" alt="" />
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
            <img src="src\assets\home\5cb6c-image-asset.jpeg" alt="" />
          </div>
          <div className="right">
            <h1>Katalog Yang Luas</h1>
            <h3>Temukan Tanaman Yang cocok dengan rumah anda</h3>
            <p>Temukan tanaman yang sesuai dengan keadaan, kondisi serta kebutuhan rumah anda</p>

            <p>carilah tanaman yang tidak hanya memperhijau tapi juga memperindah rumah anda, kami menyediakan tanaman yang anda butuhkan dan anda inginkan</p>
            <button>Browse</button>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default index