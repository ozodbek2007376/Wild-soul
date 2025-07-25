import React from 'react'

export default function Footer1() {
  return (

    
<div className="recipes-section">
  <h1>Wild Recipes</h1>
  <p>Take a look at the keyhole of our Wild kitchen! Get ideas on how to turn your own kitchen into a Wild.</p>

  <div className="recipes-grid">
  
    <div className="recipe-card">
      <img src="./img/12img.png" alt="" className="footer-1-img" />
      <div className="recipe-type">SALTY</div>
      <div className="recipe-title">Coleslaw with High Fibre Tahini</div>
    </div>

  
    <div className="recipe-card">
      <img src="./img/123img.png" alt="Wild Hummus" />
      <div className="recipe-type">SALTY</div>
      <div className="recipe-title">Wild Hummus</div>
    </div>

   
    <div className="recipe-card">
      <img src="./img/1234img.png" alt="" className="footer-1-img" />
      <div className="recipe-type">SWEET</div>
      <div className="recipe-title">Wild 6 Ingredient Granola</div>
    </div>
  </div>
</div>
  )
}
