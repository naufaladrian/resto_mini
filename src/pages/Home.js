import React from "react";
import ProductCarousel from "../component/ProductCarousel";
import Data from "../data.json";

export default function Home() {
  return (
    <>
      <ProductCarousel />
      <main className="container">
        {/* Intro */}
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-auto text-center">
              <img
                src="https://final-project-resto.vercel.app/static/media/makanan.b2f2e3a7ffa4748d7994.webp"
                alt="makanan"
                style={{ width: "400px" }}
              />
            </div>
            <div className="col">
              <h2>Selamat Datang di Restoran Mini Course</h2>
              <p>
                Restoran Mini Course telah berdiri sejak tahun 1999 hingga saat
                ini. Kami bergerak dibagian mengelola makanan bintang lima
                dengan harga yang merakyat, dimana alasan untuk mendirikan rumah
                makan ini karena seiring perkembangan jaman kebanyakan orang
                menginginkan makanan mewah dengan harga yang terjangkau
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* intro-end */}
        {/* Menu */}
        <h2 className="text-center mb-5" id="menu">
          Menu Kami
        </h2>
        <div className="row row-cols-3 text-center g-0 mb-5 mt-5">
          {Data.map((e) => {
            return (
              <>
                <div className="col">
                  <img
                    src={e.image}
                    alt={e.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <h3>{e.name}</h3>
                </div>
              </>
            );
          })}
        </div>
        <hr />
        {/* Menu-end */}
      </main>
    </>
  );
}
