import React from 'react'

function Overview({arr}) {
  return (
    //"grid grid-cols-6 px-12 pt-6"
    <div class="flex flex-wrap space-x-2 px-12 grid-cols-8 gap-4">
      {arr.map(title => {
       // return <Chip color="blue" value={title} />
        return <span
        class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
        {title}
      </span>
        //return <div key={title}>{title}</div>;
      })}
      {/* <br/>
      <br/>
      <br/>
      {cityarr.map(title => {
       // return <Chip color="blue" value={title} />
       return <h1>arr element is there</h1>
        //return <div key={title}>{title}</div>;
      })} */}
    </div>
  )
}

export default Overview