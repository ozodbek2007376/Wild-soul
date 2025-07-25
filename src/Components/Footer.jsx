import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
  <div>
  <img src="./img/footer-logo.png" alt="" className="footer-logo justify-content-center d-flex align-content-center" />
  </div>
  <div className="container-fluid">
    <div className="row gy-4">

      <div className="col-lg-3 col-md-6">
        <div className="footer-title">Stay Wild!</div>
        <input type="email" placeholder="Write your email" className="email-input" />
        <p className="mt-3 mb-1">Follow Us</p>
        <div className="social-icons gap-3 d-flex">
          <a href="#"><img src="./img/insta.png" alt="" /></a>
          <a href="#"><img src="./img/fecbook.png" alt="" /></a>
        </div>
        <div className="footer-icons mt-3">
          <img src="./img/viza.png" alt="" />
          <img src="./img/master.png" alt="" />
          <img src="./img/paypal.png" alt="" />
        </div>
        <div className="copyright">
          &copy; 2021 Wild Souls
          Website by Big Horror + No Matter
        </div>
      </div>

      
      <div className="col-lg-2 col-md-6 footer-links">
        <h6 className="fw-bold">Products</h6>
        <a href="#">Sesame Butter  Tahini</a>
        <a href="#">Nut Butters</a>
        <a href="#">Honey</a>
        <a href="#">Marmalades</a>
        <a href="#">Halva</a>
        <a href="#">Dry Nuts</a>
        <a href="#">Open Sesame</a>
        <a href="#">Gift Card</a>
      </div>

      
      <div className="col-lg-2 col-md-6 footer-links">
        <h6 className="fw-bold">Company</h6>
        <a href="#">Who We Are</a>
        <a href="#">Our Wild Way</a>
        <a href="#">Concept Store</a>
        <a href="#">The Five Treasures</a>
        <a href="#">Recipes</a>
      </div>

      
      <div className="col-lg-2 col-md-6 footer-links">
        <h6 className="fw-bold">Help</h6>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">Payment Methods</a>
        <a href="#">Shipping & Returns</a>
      </div>

      
      <div className="col-lg-3 col-md-6 footer-links">
        <h6 className="fw-bold">Contact</h6>
        <p>info@wildsouls.gr</p>
        <p>+30 210 3231 438</p>
      </div>

    </div>

    
    <div className="row text-center mt-4">
      <div className="col-12 d-flex flex-wrap justify-content-between footer-bottom-icons">
        <img src="./img/kaktus.png" alt="" className='img img-fluid' />
        <img src="./img/text.png" alt="" className='img img-fluid' />
        <img src="./img/qol.png" alt="" className='img img-fluid' />
        <img src="./img/text1.png" alt="" className='img img-fluid' />
        <img src="./img/lab-1.png" alt="" className='img img-fluid' />
        <img src="./img/bitle.png" alt="" className='img img-fluid' />
      </div>
    </div>
  </div>
</div>
  )
}
