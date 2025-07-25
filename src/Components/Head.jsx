import React from 'react'

export default function Head() {
  return (

<div className="container py-5 mb-5 mt-5">
  <div className="row g-4 justify-content-center">

   
    <div className="col-md-4 col-sm-6">
      <div className="card text-center p-4 circle-bg green">
        <img src="./img/img-1.png" className="img-fluid mb-3" alt="" />
        <h5 className="fw-bold">The Wild Peanut Butter</h5>
        <p className="mb-1">€4,90</p>
        <button className="btn btn-success">BUY NOW!</button>
      </div>
    </div>

  
    <div className="col-md-4 col-sm-6">
      <div className="card text-center p-4 circle-bg pink">
        <img src="./img/img-2.png" className="img-fluid mb-3" alt="" />
        <h5 className="fw-bold">Tahini with Cocoa & Honey</h5>
        <p className="mb-1">€5,90</p>
        <button className="btn btn-secondary">BUY NOW!</button>
      </div>
    </div>

 
    <div className="col-md-4 col-sm-6">
      <div className="card text-center p-4 circle-bg purple">
        <img src="./img/img-3.png" className="img-fluid mb-3" alt="" />
        <h5 className="fw-bold">The Wild Hazelnut Butter</h5>
        <p className="mb-1">€6,90</p>
        <button className="btn btn-primary">BUY NOW!</button>
      </div>
    </div>

  </div>
</div>

  )
}
