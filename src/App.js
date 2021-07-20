import React,{useEffect,useState} from 'react'
import Title from './components/title/Title'
import Card from './components/card/Card'
import style from './App.module.css'
import {fetchData} from './api'
import CountryPicker from './components/countryPicker/CountryPicker'
import Graph from './components/graph/Graph'

const App = () => {

  const [state, setState] = useState({
    data:{},
    country:''
  })

 useEffect(()=>{
   const mount = async()=>{
    const data= await fetchData()
    setState({data})
   }
  mount();
 },[])

const handleChange = async(country)=>{
  try {
    const data = await fetchData(country)
    setState({data:data,country:country})
        
  } catch (error) {
    console.log(error);
  }
}  

 const {data,country} = state;

 

  return (
    <div className={style.container}>
      <Title></Title>
      <Card data={data}></Card>
      <CountryPicker handleChange={handleChange}></CountryPicker>
      <Graph data={data} country={country}></Graph>
    </div>
  )
}

export default App
