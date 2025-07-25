import React from 'react'

export default function Section() {
  return (

    <div className="container-fluid py-5 bg-orange">
  <div className="container">
    <div className="row align-items-center">

  
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h2 className="fw-bold"> <span className="wild-text">Our <br /> Wild Way</span></h2>
        <p className="my-3">
          Our philosophy is present in every stage of our production. We are endeavoring to contribute to the creation of a better world.
        </p>
        <button className="btn btn-dark rounded-pill px-4 py-2 ">DISCOVER MORE!</button>
      </div>

    
      <div className="col-lg-6 text-center">
        <img src="./img/Frame-img.png"
             className="img-fluid single-img"
             alt="" />
      </div>

    </div>
  </div>
</div>

  )
}
