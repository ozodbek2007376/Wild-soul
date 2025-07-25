import React from 'react'

export default function Section1() {
  return (
    <div className="container-fluid py-5 section-bg " >  
  <div className="container text-center">
    <div className="text-uppercase mb-5">Words From the Soul!</div>
    <div className="row justify-content-center align-items-start">
     
      <div className="col-md-5 mb-4">
        <img src="./img/lab-1.png" alt="Popangada" className="mb-3" />   {/* style="height: 80px;"  */}
        <h6 className="fw-bold">POPANGADA</h6>
        <p className="small">A different shop in the center of Athens grinds fruit, offers butter made from just one ingredient, and halva flavors that confirm that healthy can be delicious.</p>
      </div>

      
      <div className="col-md-5 mb-4">
        <img src="./img/lab-1.png" alt="Athens Voice" className="mb-3"  />   {/*style="height: 80px;" */}
        <h6 className="fw-bold">ATHENS VOICE</h6>
        <p className="small">Wild Souls works mainly with sesame and nut products (pistachio, hazelnut, almond, cashews), creating hellish spreads that you want to swallow with the jar.</p>
      </div>
    </div>

  
    <div className="mt-4">
      <span className="border border-dark rounded-circle d-inline-block me-2" ></span>  {/* style="width: 10px; height: 10px;" */}
      <span className="bg-dark rounded-circle d-inline-block" ></span> {/*style="width: 10px; height: 10px;" */}
    </div>
  </div>
</div>
   

  )
}
