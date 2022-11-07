import { Group, Loader } from '@mantine/core'
import axios from 'axios' // Install axios if not yet installed 
import React, {useEffect, useState } from 'react'
import Cards from './Cards'

export default function CardWrapper() {

    const [loading ,setLoading] = useState(true)
    const [apiData , setApiData] = useState([])

    const fetchApi = async () =>{      
      //Fetch api using axios 
        axios.get('https://pixabay.com/api/?key=31152728-003c97f1d6cc96cffebe29dfd&q=nfts'   
        ).then( mydata => setApiData(mydata.data.hits)
        ).then(setLoading(false))
        }

    // console.log(apiData)
    useEffect(()=>{
      fetchApi()
    }, [])

  return (
    <>
    {loading && <Loader/>}
    <Group position="center" className='w88'>

        {!loading && apiData.map(val =>(
          <Cards url={val.largeImageURL} amt={(Math.random() *0.1  + 0.01).toFixed(2)} key={val.id}/> 
          ))}

    </Group>
    </>
  )
}
