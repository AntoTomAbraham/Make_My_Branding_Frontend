import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';  
import Overview from "./Overview";
import Select from 'react-select'
//import AsyncSelect from 'react-select/async';
//import PriceScreen from "./PriceScreen";

function FeatureScreen() {
  const [city, setCity] = useState("");
  const [ooh, setooh] = useState("");
  const [locType, setlocType] = useState("");
  const [nature, setnature] = useState("");
  const [islight, setislight] = useState("");
  const [poi, setPoi] = useState([]);
  const [cityResult, setcityResult] = useState([]);
  const [siz, setsiz] = useState([]);

  const [locTypes, setlocTypes] = useState("");
  const [natures, setnatures] = useState("");
  const [islights, setislights] = useState("");
  const [pois, setPois] = useState([]);
  const [cityResults, setcityResults] = useState([]);
  const [sizs, setsizs] = useState([]);

  const [natureOfLocation, setnatureOfLocation] = useState([]);
  const [light, setlight] = useState([]);
  const [loc, setloc] = useState([]);
  const [size, setsize] = useState([]);

  const getData=async event=>{
    console.log(siz+" "+islight+" "+nature+" "+locType+" "+city)
  }

  const handleChange = async (event) =>  {
    event.preventDefault();
    console.log("inside handlechange")
    const getval=event.target.value;
    //setCity("");
    //setCity(getval);
    if(event.target.id==="city"){
      setCity(event.target.value);
    }
    if(event.target.id === "locType"){
      setlocType(event.target.value);
    }
    if(event.target.className === "nature"){
      setnature(event.target.value);
    }
    if(event.target.id==="ooh"){
      setooh(event.target.value);
    }
    console.log(city);

    if(city!==""){
    //gettingoverview
    await axios.post("http://localhost:8080/api/getOverview",{"city":city}).then(res=>{
      console.log("getting res");
      console.log(res.data['response']['poi']);
      setPoi(res.data['response']['poi'])
    })
  console.log("readCSV")
  setcityResult([]);
  }

  if(city!==""){
    await axios.post("http://localhost:8080/api/readCsv",{"city":city}).then(res=>{
      console.log("getting res for readCsv");
      console.log(res.data['response']['cityResult']);
      setcityResult(res.data['response']['cityResult'])
      console.log(cityResult)
      var uniquecityResult = cityResult.filter((v, i, a) => a.indexOf(v) === i);
      console.log(uniquecityResult)
      setcityResult(uniquecityResult)
    })

    // await axios.post("http://localhost:8080/api/readNatureOfLocation",{"city":city}).then(res=>{
    //   console.log("getting res");
    //   console.log(res.data['response']['sizeResult']);
    //   setnatureOfLocation(res.data['response']['sizeResult'])
    //   console.log("nature of location")
    //   console.log(natureOfLocation);
    // })

    // await axios.post("http://localhost:8080/api/readLight",{"city":city}).then(res=>{
    //   console.log("getting res");
    //   console.log(res.data['response']['sizeResult']);
    //   setlight(res.data['response']['sizeResult'])
    //   console.log("nature of location")
    //   console.log(light);
    // })

    // await axios.post("http://localhost:8080/api/readLocationtype",{"city":city}).then(res=>{
    //   console.log("getting res");
    //   console.log(res.data['response']['sizeResult']);
    //   setloc(res.data['response']['sizeResult'])
    //   console.log("nature of location")
    //   console.log(light);
    // })

    // await axios.post("http://localhost:8080/api/readSize",{"city":city}).then(res=>{
    //   console.log("getting res");
    //   console.log(res.data['response']['sizeResult']);
    //   setsize(res.data['response']['sizeResult'])
    //   console.log("nature of location")
    //   console.log(size);
    // })
  }

  console.log(cityResult);  
  console.log(poi);  
  };
  

  useEffect(()=>{
    const getdata= async () =>  {
      if(city!==""){
        await axios.post("http://localhost:8080/api/readNatureOfLocation",{"city":city}).then(res=>{
          console.log("getting res");
          console.log(res.data['response']['sizeResult']);
          setnatureOfLocation(res.data['response']['sizeResult'])
          console.log("nature of location")
          console.log(natureOfLocation);
      })
      await axios.post("http://localhost:8080/api/readLight",{"city":city}).then(res=>{
        console.log("getting res");
        console.log(res.data['response']['sizeResult']);
        setlight(res.data['response']['sizeResult'])
        console.log("nature of location")
        console.log(light);
      })
      await axios.post("http://localhost:8080/api/readLocationtype",{"city":city}).then(res=>{
      console.log("getting res");
      console.log(res.data['response']['sizeResult']);
      setloc(res.data['response']['sizeResult'])
      console.log("nature of location")
      console.log(light);
    })
    await axios.post("http://localhost:8080/api/readSize",{"city":city}).then(res=>{
      console.log("getting res");
      console.log(res.data['response']['sizeResult']);
      setsize(res.data['response']['sizeResult'])
      console.log("nature of location")
      console.log(size);
    })
    }

    }   //console.log("enter")
    getdata()
 }, [city] );

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
                //aria-label="Default select example"
                value={city}
                defaultValue={city}
                id="city"
                onChange={
                  handleChange
                }
              >
                <option selected>Select your City</option>
                <option value="Bangalore">Bangalore</option>
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
      {/* Location */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label for="forms-labelLeftInputCode">Location</label>
        </div>
        <Select
        id="locType"
        value={locTypes}
        className="locType"
        onChange={(e)=>{
          const elem = e.currentTarget;
          console.log(elem)
          setlocType(e.value);
          setlocTypes(elem)
          console.log(locType)
        }}
        options={loc}
      />
      </div>
      <br />

      {/* Nature of Location */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label for="forms-labelLeftInputCode">Enter size of location</label>
        </div>
        <Select
        id="size"
        value={sizs}
        className="size"
        onChange={(e)=>{
          const elem = e.currentTarget;
          console.log(elem)
          setsizs(elem)
          setsiz(e.value);
          console.log(nature)
        }}
        options={size}
      />
      </div>
      <br />

      {/* Nature of Location */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label for="forms-labelLeftInputCode">Nature of location</label>
        </div>
        <Select
        id="nature"
        value={natures}
        className="nature"
        onChange={(e)=>{
          const elem = e.currentTarget;
          console.log(elem)
          setnatures(elem)
          setnature(e.value);
          console.log(nature)
        }}
        options={natureOfLocation}
      />
      </div>
      <br />

      {/* LIGHT */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label for="forms-labelLeftInputCode">Do you want light</label>
        </div>
        <Select
        id="light"
        value={islights}
        className="light"
        onChange={(e)=>{
          const elem = e.currentTarget;
          console.log(e.value)
          console.log("value")
          console.log(elem)
          setislights(elem)
          setislight(e.value);
          console.log(islight)
        }}
        options={light}
      />
      </div>
      <br />
      <br />
      <div class="grid place-content-center">
      <button onClick={getData} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Get Price
      </button>
      </div>
      <br />
      {/* <PriceScreen cityarr={cityResult} location={locType} natureOflocation={nature} ooh={ooh}/> */}
      <Overview arr={poi} />
      <br />
    </div>
  );
}

export default FeatureScreen;
