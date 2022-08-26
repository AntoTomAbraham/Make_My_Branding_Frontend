import React from 'react'
import Chart from 'react-apexcharts';

function PriceComponent({price}) {
    if(price !== ""){
  return (
    //<div class="py-5 text-blue-700 bg-white flex items-center justify-center grid grid-cols-2 gap-4"></div>
    <div class="px-12 text-blue-700 dark:bg-slate-800 bg-white items-center justify-center grid grid-cols-2 gap-4">
      <div class="justify-center dark:text-white">
      <h3>Price:</h3>
      <p class="text-5xl font-bold">
        ₹{price}
      </p>
      <p class="text-xs uppercase">Per Month</p>
      </div>

      <div class="h-64 justify-center dark:text-white">
     <Chart
     type="pie"
     width={600}
     height={250}
     series={[23,45,67,89]}
     options={{
      labels:['A','B','C','D']
     }}
     >

     </Chart>
      </div>

    </div> 
  )
}
}

export default PriceComponent