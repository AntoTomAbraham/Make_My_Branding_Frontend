import React from "react";
import { useState } from "react";
import axios from 'axios';  

function FeatureScreen() {
  const [city, setCity] = useState("");
  const [poi, setPoi] = useState([]);

  const handleChange = async event =>  {
    //event.preventDefault();
    // setCity("");
    // setPoi([]);
    console.log(event.target.value);
    setCity(event.target.value);
    console.log(city);
    await axios.post("http://localhost:8080/api/getOverview",{"city":event.target.value}).then(res=>{
      console.log(res.data['response']['poi']);
      setPoi(res.data['response']['poi'])
    })
    console.log(poi);  
  };

  return (
    <div class="py-0">
      <h3 class=" py-0 text-gray-800 font-bold leading-tight text-5xl mt-0 mb-2 px-16">
        100x your Business 🚀🚀
      </h3>
      <br />
      <br />
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 ">
          <label for="forms-labelLeftInputCode">State</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                value={city}
                onChange={handleChange}
              >
                <option selected>Select your City</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kochi">Kochi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label for="forms-labelLeftInputCode">Location</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select the Location</option>
                <option value="1">Jwellery</option>
                <option value="2">Textile</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label for="forms-labelLeftInputCode">Business Type</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select your Business market</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureScreen;
