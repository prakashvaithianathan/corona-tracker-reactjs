import React,{useEffect,useState} from 'react'
import { fetchCountries } from '../../api'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'

const countryPicker = ({handleChange}) => {

    const [fetchedCountry, setFetchedCountry] = useState([])

    useEffect(() =>{
        const fetchApi = async()=>{
           setFetchedCountry(await fetchCountries());
        }
       fetchApi();
    },[])
  
  

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event)=>handleChange(event.target.value)}>
                      <option value="">Global</option>
                     {
                         fetchedCountry.map((country,index)=>(
                             <option value={country} key={index}>
                                 {country}
                                 </option>
                         ))
                     }
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default countryPicker
