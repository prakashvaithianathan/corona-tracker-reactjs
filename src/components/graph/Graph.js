import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import style from './Graph.module.css'

const Graph = ({data:{confirmed,recovered,deaths},country}) => {

const [dailyData, setDailyData] = useState([])

useEffect(()=>{
    const fetchApi = async()=>{
        try {
            const fetchData = await fetchDailyData()
            setDailyData(fetchData)
        } catch (error) {
            console.log(error);
        }
    }
    fetchApi();
},[])

const lineChart =(
    dailyData.length ? (
        <Line
        
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[
                     { 
                         data:dailyData.map(({confirmed})=>confirmed),
                      label:'Infected',
                      borderColor:"blue",
                      fill:true

                    },
                    { 
                        data:dailyData.map(({deaths})=>deaths),
                     label:'Deaths',
                     borderColor:"red",
                     backgroundColor:"tomato",
                     fill:true

                   }
            ]
             
        }}

        ></Line>
    ):null
)

const barChart = (
    confirmed ?(
 <Bar
 
 data={{
     labels:["Infected","Recovered","Deaths"],
     datasets:[
         {
             label:"People",
             backgroundColor:["blue","green","red"],
             data:[confirmed.value,recovered.value,deaths.value]
         }
     ]
 }}
 
 ></Bar>
    ):null
)
    
    return (
        <div className={style.graph}>
            {
                country ? barChart :lineChart
            }
        </div>
    )
}

export default Graph
