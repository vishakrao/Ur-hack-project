import { Loader } from '@mantine/core'
import axios from 'axios' // Install axios if not yet installed 
import React, {useEffect, useState } from 'react'
import Cards from './Cards'

export default function CardWrapper() {

    const [loading ,setLoading] = useState(true)
    const [apiData , setApiData] = useState([])

    const fetchApi = async () =>{      
      //Fetch api using axios 
        axios.get('https://picsum.photos/v2/list'   
        ).then( mydata => setApiData(mydata.data)
        ).then(setLoading(false))
        }

    // console.log(apiData)
    useEffect(()=>{
      fetchApi()
    }, [])

  return (
    <>
    {loading && <Loader/>}
    
    {!loading && apiData.map(val =>(
       <Cards url={val.download_url} amt={(Math.random() *0.1 ).toFixed(2)} key={val.id}/> 
    ))}
    </>
  )
}
