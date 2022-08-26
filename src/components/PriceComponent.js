import React from 'react'

function PriceComponent({price}) {
    if(price !== ""){
  return (
    <div class="py-5 text-blue-700 bg-white flex items-center justify-center">
      <h3>Price:</h3>
      <p class="text-5xl font-bold">
        ₹{price}
      </p>
      <p class="text-xs uppercase">Per Month</p>
    </div> 
  )
}
}

export default PriceComponent