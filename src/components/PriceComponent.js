import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function PriceComponent({price}) {
    if(price !== ""){
  return (
    //<div class="py-5 text-blue-700 bg-white flex items-center justify-center grid grid-cols-2 gap-4"></div>
    <div class="px-12 text-blue-700 bg-white items-center justify-center grid grid-cols-2 gap-4">
      <div class="justify-center">
      <h3>Price:</h3>
      <p class="text-5xl font-bold">
        ₹{price}
      </p>
      <p class="text-xs uppercase">Per Month</p>
      </div>
      <div class="h-64 justify-center">
      <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>
      </div>
    </div> 
  )
}
}

export default PriceComponent