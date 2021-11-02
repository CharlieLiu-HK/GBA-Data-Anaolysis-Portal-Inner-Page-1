import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Select from 'react-select';
import './index.css';
import BackgroundImage from './Images/Background.png';

const cityChoices = [
  {value: 'HK', label: 'Hong Kong'},
  {value: 'MC', label: 'Macau'},
  {value: 'SZ', label: 'Shen Zhen'},
  {value: 'ZH', label: 'Zhu Hai'},
  {value: 'DG', label: 'Dong Guan'},
  {value: 'HZ', label: 'Hui Zhou'},
  {value: 'ZS', label: 'Zhong Shan'},
  {value: 'FS', label: 'Fo Shan'},
  {value: 'JM', label: 'Jiang Men'},
  {value: 'ZQ', label: 'Zhao Qing'},
  {value: 'GZ', label: 'Guang Zhou (Canton)'}
]
const plotChoices1 = [
  {value: 1, label: 'Total Population and Labour Force of GBA Cities'},
  {value: 2, label: 'Permenent Population and Mobile Population of GBA Cities'},
  {value: 3, label: 'Population Density of GBA Cities'}
]
const plotChoices2 = [
  {value: 1, label: 'GDP of GBA cities over the years'},
  {value: 2, label: 'Per Capita GDP of GBA cities over the years'},
  {value: 3, label: 'Per Capita Disposable Income'}
]
const plotChoices3 = [
  {value: 1, label: 'Government Revenue'},
  {value: 2, label: 'Government Revenue as of % GDP'},
  {value: 3, label: 'Per Capita Government Revenue'},
  {value: 4, label: 'Government Expenditure'},
  {value: 5, label: 'Government Expenditure as of % GDP'},
  {value: 6, label: 'Per Capita Government Expenditure'}
]
const plotChoices4 = [
  {value: 1, label: 'Total External Trading Volume'},
  {value: 2, label: 'External Trading Volume as of % GDP'},
  {value: 3, label: 'Per Capita External Trading Volume'}
]
const plotChoices5 = [
  {value: 1, label: 'Unemployment Rate in Percentage for GBA Cities'}
]
const plotChoices6 = [
  {value: 1, label: 'Hlth, Edu, Env & Welfare Spending'},
  {value: 2, label: 'Hlth, Edu, Env & Welfare Spending as of % GDP'},
  {value: 3, label: 'Per Capita Hlth, Edu, Env & Welfare Spending'}
]
const plotChoices7 = [
  {value: 1, label: 'City Wide R&D Funding'},
  {value: 2, label: 'R&D Funding as of % GDP'},
  {value: 3, label: 'Per Capita R&D Funding'},
  {value: 4, label: 'R&D Personnal Count for each City'},
  {value: 5, label: 'Patent Filed for each City'}
]
const plotChoices8 = [
  {value: 1, label: 'Number of Hospitals'},
  {value: 2, label: 'Number of Hopital Beds'},
  {value: 3, label: 'Number of Hospital Staff'},
  {value: 4, label: 'Number of Hospital Beds Per 1000 People'},
  {value: 5, label: 'Number of Hospital Staff Per 1000 People'}
]

const PageLayout = () => {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [showWidgit, setShowWidgit] = useState(false);

  const [buttonTab1, setButtonTab1] = useState(0);
  const citiesTab1 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab1 = useRef({});
  const [image1Tab1, setImage1Tab1] = useState('');
  const [image2Tab1, setImage2Tab1] = useState('');
  const [image3Tab1, setImage3Tab1] = useState('');


  const [buttonTab2, setButtonTab2] = useState(0);
  const citiesTab2 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab2 = useRef({});
  const [image1Tab2, setImage1Tab2] = useState('');
  const [image2Tab2, setImage2Tab2] = useState('');

  const [buttonTab3, setButtonTab3] = useState(0);
  const citiesTab3 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab3 = useRef({});
  const [image1Tab3, setImage1Tab3] = useState('');
  const [image2Tab3, setImage2Tab3] = useState('');

  const [buttonTab4, setButtonTab4] = useState(0);
  const citiesTab4 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab4 = useRef({});
  const [image1Tab4, setImage1Tab4] = useState('');
  const [image2Tab4, setImage2Tab4] = useState('');

  const [buttonTab5, setButtonTab5] = useState(0);
  const citiesTab5 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab5 = useRef({});
  const [image1Tab5, setImage1Tab5] = useState('');
  const [image2Tab5, setImage2Tab5] = useState('');

  const [buttonTab6, setButtonTab6] = useState(0);
  const citiesTab6 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab6 = useRef({});
  const [image1Tab6, setImage1Tab6] = useState('');
  const [image2Tab6, setImage2Tab6] = useState('');
  const [image3Tab6, setImage3Tab6] = useState('');
  const [image4Tab6, setImage4Tab6] = useState('');
  const [image5Tab6, setImage5Tab6] = useState('');

  const [buttonTab7, setButtonTab7] = useState(0);
  const citiesTab7 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab7 = useRef({});
  const [image1Tab7, setImage1Tab7] = useState('');
  const [image2Tab7, setImage2Tab7] = useState('');

  const [buttonTab8, setButtonTab8] = useState(0);
  const citiesTab8 = useRef([cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]);
  const imageNumTab8 = useRef({});
  const [image1Tab8, setImage1Tab8] = useState('');
  const [image2Tab8, setImage2Tab8] = useState('');

  useEffect(() => {
    setImage1Tab1(`https://gba-backend.jundeliu.com:8080/Page1Tab1/${citiesTab1.current.map(({value}) => value).join('')}/${imageNumTab1.current.value}`);
    setImage2Tab1(`https://gba-backend.jundeliu.com:8080/Page1Tab1/${citiesTab1.current.map(({value}) => value).join('')}/${3 + imageNumTab1.current.value}`);
    setImage3Tab1(`https://gba-backend.jundeliu.com:8080/Page1Tab1/${citiesTab1.current.map(({value}) => value).join('')}/${6 + imageNumTab1.current.value}`);
    citiesTab1.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab1])

  useEffect(() => {
    setImage1Tab2(`https://gba-backend.jundeliu.com:8080/Page1Tab2/${citiesTab2.current.map(({value}) => value).join('')}/${2 * imageNumTab2.current.value - 1}`);
    setImage2Tab2(`https://gba-backend.jundeliu.com:8080/Page1Tab2/${citiesTab2.current.map(({value}) => value).join('')}/${2 * imageNumTab2.current.value}`);
    citiesTab2.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab2])

  useEffect(() => {
    setImage1Tab3(`https://gba-backend.jundeliu.com:8080/Page1Tab3/${citiesTab3.current.map(({value}) => value).join('')}/${2 * imageNumTab3.current.value - 1}`);
    setImage2Tab3(`https://gba-backend.jundeliu.com:8080/Page1Tab3/${citiesTab3.current.map(({value}) => value).join('')}/${2 * imageNumTab3.current.value}`);
    citiesTab3.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab3])

  useEffect(() => {
    setImage1Tab4(`https://gba-backend.jundeliu.com:8080/Page1Tab4/${citiesTab4.current.map(({value}) => value).join('')}/${2 * imageNumTab4.current.value - 1}`);
    setImage2Tab4(`https://gba-backend.jundeliu.com:8080/Page1Tab4/${citiesTab4.current.map(({value}) => value).join('')}/${2 * imageNumTab4.current.value}`);
    citiesTab4.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab4])

  useEffect(() => {
    setImage1Tab5(`https://gba-backend.jundeliu.com:8080/Page1Tab5/${citiesTab5.current.map(({value}) => value).join('')}/${2 * imageNumTab5.current.value - 1}`);
    setImage2Tab5(`https://gba-backend.jundeliu.com:8080/Page1Tab5/${citiesTab5.current.map(({value}) => value).join('')}/${2 * imageNumTab5.current.value}`);
    citiesTab5.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab5])

  useEffect(() => {
    setImage1Tab6(`https://gba-backend.jundeliu.com:8080/Page1Tab6/${citiesTab6.current.map(({value}) => value).join('')}/${5 * imageNumTab6.current.value - 4}`);
    setImage2Tab6(`https://gba-backend.jundeliu.com:8080/Page1Tab6/${citiesTab6.current.map(({value}) => value).join('')}/${5 * imageNumTab6.current.value - 3}`);
    setImage3Tab6(`https://gba-backend.jundeliu.com:8080/Page1Tab6/${citiesTab6.current.map(({value}) => value).join('')}/${5 * imageNumTab6.current.value - 2}`);
    setImage4Tab6(`https://gba-backend.jundeliu.com:8080/Page1Tab6/${citiesTab6.current.map(({value}) => value).join('')}/${5 * imageNumTab6.current.value - 1}`);
    setImage5Tab6(`https://gba-backend.jundeliu.com:8080/Page1Tab6/${citiesTab6.current.map(({value}) => value).join('')}/${5 * imageNumTab6.current.value}`);
    citiesTab6.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab6])

  useEffect(() => {
    setImage1Tab7(`https://gba-backend.jundeliu.com:8080/Page1Tab7/${citiesTab7.current.map(({value}) => value).join('')}/${2 * imageNumTab7.current.value - 1}`);
    setImage2Tab7(`https://gba-backend.jundeliu.com:8080/Page1Tab7/${citiesTab7.current.map(({value}) => value).join('')}/${2 * imageNumTab7.current.value}`);
    citiesTab7.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab7])

  useEffect(() => {
    setImage1Tab8(`https://gba-backend.jundeliu.com:8080/Page1Tab8/${citiesTab8.current.map(({value}) => value).join('')}/${2 * imageNumTab8.current.value - 1}`);
    setImage2Tab8(`https://gba-backend.jundeliu.com:8080/Page1Tab8/${citiesTab8.current.map(({value}) => value).join('')}/${2 * imageNumTab8.current.value}`);
    citiesTab8.current = [cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]
  }, [buttonTab8])

  const MainTitle = () => {
    return(
      <div className="main-title-div text-center text-5xl mx-36 py-6 px-10 shadow-3xl rounded-2xl bg-sky-300 bg-opacity-80 text-blueGray-800 hover:bg-rose-400 hover:text-blueGray-100 transition duration-1000">
        Part One &nbsp;&nbsp;&nbsp;&nbsp; Data Visualization
      </div>
    )
  }
  const IntroParagraph = () => {
    return(
      <div className="intro-paragraph-div text-center text-3xl mx-48 px-24 py-10 leading-loose rounded-3xl shadow-3xl bg-blueGray-700 bg-opacity-40 text-coolGray-200 hover:bg-sky-300 hover:text-coolGray-900 transition duration-1000">
        Compiled from the annual statistics digests of the 11 GBA cities, our data covers various aspects including population, GDP, government revenue, education, social welfare spending etc. Given the variety of the variables, we deem that it is only appropriate to present the data by utilizing interactive data visulization technologies power by R, which maximize the information that can be drawn from the analysis. Click on the "Show Widgit" button below to proceed to the data visulization tool. When the widgit is successfully loaded, use the selectors on the left to choose which cities' data to use as well as which plot to see, before clicking on the "Generate Plot" button to show the graph. Also, you can toggle between different tabs to switch between different variables.
      </div>
    )
  }
  const Tab1 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab1.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab1.current = inputValue}} options={plotChoices1} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab1(buttonTab1 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-3 grid-flow-col mx-40">
          <div className="my-9 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img src={image1Tab1} onError={(event) => event.target.style.display = 'none'} className="max-h-screen"></img>
          </div>
          <div className="my-9 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img src={image2Tab1} onError={(event) => event.target.style.display = 'none'} className="max-h-screen"></img>
          </div>
          <div className="my-9 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img src={image3Tab1} onError={(event) => event.target.style.display = 'none'} className="max-h-screen"></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab2 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab2.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab2.current = inputValue}} options={plotChoices2} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab2(buttonTab2 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-2 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab2} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab2} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab3 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab3.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab3.current = inputValue}} options={plotChoices3} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab3(buttonTab3 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-2 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab3} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab3} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab4 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab4.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab4.current = inputValue}} options={plotChoices4} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab4(buttonTab4 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-2 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab4} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab4} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab5 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab5.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab5.current = inputValue}} options={plotChoices5} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab5(buttonTab5 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-2 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab5} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab5} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab6 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab6.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab6.current = inputValue}} options={plotChoices6} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab6(buttonTab6 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-5 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab6} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab6} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image3Tab6} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image4Tab6} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image5Tab6} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab7 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab7.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab7.current = inputValue}} options={plotChoices7} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab7(buttonTab7 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-2 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab7} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab7} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }
  const Tab8 = () => {
    return(
      <div className="flex">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose the cities (At least 2) :
          <Select onChange={inputValue => {citiesTab8.current = inputValue}} options={cityChoices} isMulti className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" defaultValue={[cityChoices[0], cityChoices[1], cityChoices[2], cityChoices[3], cityChoices[4], cityChoices[5], cityChoices[6], cityChoices[7], cityChoices[8], cityChoices[9], cityChoices[10]]} closeMenuOnSelect={false} />
          2. Choose which plot to see :
          <Select onChange={inputValue => {imageNumTab8.current = inputValue}} options={plotChoices8} placeholder="Select Plot" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" />
          <br></br>
          <button type="button" onClick={() => {setButtonTab8(buttonTab8 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="grid grid-rows-2 grid-flow-col mx-40">
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image1Tab8} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="my-6 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img className="max-h-screen" src={image2Tab8} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }

  const routes = [
    { path: '/tab1', name: 'Tab1', Component: Tab1 },
    { path: '/tab2', name: 'Tab2', Component: Tab2 },
    { path: '/tab3', name: 'Tab3', Component: Tab3 },
    { path: '/tab4', name: 'Tab4', Component: Tab4 },
    { path: '/tab5', name: 'Tab5', Component: Tab5 },
    { path: '/tab6', name: 'Tab6', Component: Tab6 },
    { path: '/tab7', name: 'Tab7', Component: Tab7 },
    { path: '/tab8', name: 'Tab8', Component: Tab8 }
  ]

  return(
    <div className="container-2xl w-screen h-xl bg-contain" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="main-title" unmountOnExit>
        <MainTitle />
      </CSSTransition>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="intro-paragraph" unmountOnExit>
        <IntroParagraph />
      </CSSTransition>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="main-button" unmountOnExit>
        <div>
          <button type="button" className="main-button-div bg-opacity-80 rounded-xl p-6 text-2xl bg-rose-600 text-gray-100 z-50 hover:bg-gray-100 hover:text-gray-600 shadow-3xl transition duration-1000 font-bold" onClick={()=>{setButtonClicks(buttonClicks + 1);}}>Proceed to the Widget</button>
          <div className="main-button-ring ring-2 rounded-xl p-6 text-2xl ring-rose-600 text-transparent z-40">Proceed to the Widget</div>
        </div>
      </CSSTransition>
      <CSSTransition in={showWidgit} timeout={500} classNames="main-widget" unmountOnExit>
        <div>
          <div>
            <NavLink to="/tab1" exact className="link-1 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Population Related</NavLink>
            <NavLink to="/tab2" exact className="link-2 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>GDP</NavLink>
            <NavLink to="/tab3" exact className="link-3 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Government Revenue & Expenditure</NavLink>
            <NavLink to="/tab4" exact className="link-4 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>External Trading</NavLink>
            <NavLink to="/tab5" exact className="link-5 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Unemployment Rate</NavLink>
            <NavLink to="/tab6" exact className="link-6 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Health Care, Education, Social Welfare & Environment Spending</NavLink>
            <NavLink to="/tab7" exact className="link-7 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Research & Development</NavLink>
            <NavLink to="/tab8" exact className="link-8 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Health Care Facilities</NavLink>
          </div>
          <div>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={700}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <PageLayout />
  </Router>,
  document.getElementById('root')
);