import React from 'react'

function PriceScreen({cityarr,location,natureOflocation,ooh}) {
  //const uniqueArr = cityarr.filter((x, i, a) => a.indexOf(x) === i)
  return (
    <div class="flex flex-wrap space-x-3 px-12 grid-cols-12 gap-8 mb-8">
      <br/>
      <br/>
      <br/>
      <br/>
       {
       cityarr.map( (title,i) => {
        if(title['LocationType']==="Urban" && title['NatureOfLocation']==="CBD" && title['Category']==="Hoardings"){
           // return <h1>{title['Place']}</h1>
           return <div class="flex justify-center">
           <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
             <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{title['Place']}</h5>
             <p class="text-gray-700 text-base mb-1">
               Size : {title['Size(sqft)']}
             </p>
             <p class="text-gray-700 text-base mb-1">
               IncomeLevel : {title['IncomeLevel']}
             </p>
             <p class="text-gray-700 text-base mb-1">
             AgeGroup : {title['AgeGroup']}
             </p>
             <p class="text-gray-700 text-base mb-1">
             PPI : {title['PPI']}
             </p>
             <p class="text-gray-700 text-base mb-4">
             Light : {title['Light']}
             </p>
             <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">₹ {title['Rate(1month)']}</button>
           </div>
         </div>
        }
       })}
    </div>
  )
}

export default PriceScreen