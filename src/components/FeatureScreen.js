import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';  
import Overview from "./Overview";
import Select from 'react-select'
import PriceScreen from "./PriceScreen";
import PriceComponent from "./PriceComponent";
import Footer from "./Footer"
import Works from "./Works";


function FeatureScreen() {
  const [city, setCity] = useState("");
  const [ooh, setooh] = useState("");
  const [locType, setlocType] = useState("");
  const [nature, setnature] = useState("");
  const [islight, setislight] = useState("");
  const [age, setage] = useState("");
  const [poi, setPoi] = useState([]);
  const [cityResult, setcityResult] = useState([]);
  const [siz, setsiz] = useState([]);
  const [cityOutput, setcityOutput] = useState([]);

  const [locTypes, setlocTypes] = useState("");
  const [natures, setnatures] = useState("");
  const [oohs, setoohs] = useState("");
  const [islights, setislights] = useState("");
  const [ages, setages] = useState("");
  const [pois, setPois] = useState([]);
  const [cityResults, setcityResults] = useState([]);
  const [sizs, setsizs] = useState([]);
  const [price, setprice] = useState("");

  const [natureOfLocation, setnatureOfLocation] = useState([]);
  const [light, setlight] = useState([]);
  const [Age, setAge] = useState([]);
  const [loc, setloc] = useState([]);
  const [size, setsize] = useState([]);
  const [Ooh, setOoh] = useState([]);

  const getData=async event => {
    console.log(siz+" "+islight+" "+nature+" "+locType+" "+city+" "+age+" "+ooh)
    //`http://localhost:5000/predict?Location=${city}&NOL=${nature}&LocType=${locType}&Category=Hoardings&Size=${siz}&PPI=Low&Light=${islight}`
    await axios.post(`http://localhost:5000/predict?Location=${city}&NOL=${nature}&LocType=${locType}&Category=Hoardings&Size=${siz}&PPI=Low&Light=${islight}&AgeGroup=${age}&Category=${ooh}`).then(res=>{
      console.log("getting res");
      console.log(res.data["price"]);
      setprice(res.data["price"])
      console.log(price)
    })
    await axios.post("http://localhost:8080/api/readCsv",{"city":city,"Light": islight,"NatureOfLocation": nature,"LocationType": locType}).then(res=>{
      console.log(res)
      console.log(res.data['response']['cityResult']);
      var unique=res.data['response']['cityResult'].filter((v, i, a) => a.indexOf(v) === i);
      console.log(unique)
      setcityResult(unique)
      setcityOutput(unique)
      console.log("This is city output and length");
      console.log(cityOutput);
      console.log(cityOutput.length);
      // console.log(cityResult)
    })
    await axios.post("http://localhost:8080/api/getOverview",{"city":city}).then(res=>{
      console.log("getting res");
      console.log(res.data['response']['poi']);
      setPoi(res.data['response']['poi'])
    })
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
  console.log("readCSV")
  }

  if(city!==""){}
  console.log(poi);  
  };

  const styles = {
    container: base => ({
      ...base,
      flex: .5
    })
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

    await axios.post("http://localhost:8080/api/readAgeGroup",{"city":city}).then(res=>{
      console.log("getting res");
      console.log(res.data['response']['sizeResult']);
      setAge(res.data['response']['sizeResult'])
      console.log("nature of location")
      console.log(size);
    })

    await axios.post("http://localhost:8080/api/readHoardingCategory",{"city":city}).then(res=>{
      console.log("getting res");
      console.log(res.data['response']['sizeResult']);
      setOoh(res.data['response']['sizeResult'])
      //console.log("nature of location")
      //console.log(size);
    })
    }
    }  
    getdata()
 }, [city] );

  return (
    <div class="py-0 dark:text-slate-400">
      <h3 class=" py-0 dark:text-white text-gray-800 font-bold leading-tight text-5xl mt-0 mb-2 px-16">
        Determine your Ad Rates
      </h3>
      <br />
      <br />
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode ">District</label>
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
                styles={styles}
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
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Location */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode">Location Type</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
        <Select
        id="locType"
        placeholder="Select location..."
        styles={styles}
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
      </div>
      </div>
      <br />

      {/* Nature of Location */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode">Enter size of Advertisment</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
        <Select
        id="size"
        placeholder="Select Size of the hoardings"
        styles={styles}
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
      </div>
      </div>
      <br />

      {/* Nature of Location */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode">Nature of location</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
        <Select
        id="nature"
        placeholder="Select Location type"
        styles={styles}
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
      </div>
      </div>
      <br />

      {/* LIGHT */}
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode">Do you want illumination</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
        <Select
        id="light"
        placeholder="Do you need Illumination"
        styles={styles}
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
      </div>
      </div>
      <br />
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode">Enter Age Group</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
        <Select
        id="age"
        placeholder="Select Age Group"
        styles={styles}
        value={ages}
        className="age"
        onChange={(e)=>{
          const elem = e.currentTarget;
          console.log(e.value)
          console.log("value")
          console.log(elem)
          setages(elem)
          setage(e.value);
          console.log(age)
        }}
        options={Age}
      />
      </div>
      </div>
      </div>
      <br />
      <div class="text-gray-700 md:flex md:items-center px-16">
        <div class="mb-1 md:mb-0 md:w-1/3 dark:text-white">
          <label for="forms-labelLeftInputCode">Select OOH Category</label>
        </div>
        <div class="md:w-2/3 md:flex-grow ">
          <div class="flex justify-center">
      <Select
        id="ooh"
        placeholder="Select OOH Category"
        styles={styles}
        class="flex w-full"
        value={oohs}
        className="ooh"
        onChange={(e)=>{
          const elem = e.currentTarget;
          console.log(e.value)
          console.log("value")
          console.log(elem)
          setoohs(elem)
          setooh(e.value);
          console.log(age)
        }}
        options={Ooh}
      />
      </div>
      </div>
      </div>
      <br />
      <br />
      <div class="grid place-content-center">
      <button onClick={getData} type="button" class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
          Get Price
      </button>
      </div>
      <br />
     
      
      {/* <PriceScreen cityarr={cityResult} /> */}
      <PriceComponent price={price}/>
      <PriceScreen cityarr={cityResult}/>
      {/* <Works /> */}
      <Footer />
      {/* <Overview arr={poi} /> */}
      <br />
    </div>
  );
}

export default FeatureScreen;
