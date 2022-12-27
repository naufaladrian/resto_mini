import React from "react";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row mb-5 mt-5">
        <div className="col-8">
          <h5>Nav</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5>Gabung untuk mendapat notifikasi</h5>
          <p>Notifikasi bulanan tentang apa yang baru dan menarik dari kami</p>
          <form className="row">
            <input
              className="form-control col me-2"
              type="email"
              placeholder="youremail@gmail.com"
              aria-label="default input example"
            />
            <button type="submit" className="btn btn-primary col-3">
              gabung
            </button>
          </form>
        </div>
      </div>
      <hr />
      <footer className="container mb-3">
        © 2022 Mini Course, Inc. All rights reserved.
      </footer>
    </footer>
  );
}
