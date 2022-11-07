import { Loader, Table, Input, Group, Text} from '@mantine/core'
import axios from 'axios' // Install axios if not yet installed 
import React, {useEffect, useState, useRef} from 'react'
import Tables from './Tables'


export default function TableWrapper() {
    const ipRef = useRef("anime")
    const [loading ,setLoading] = useState(true)
    const [apiData , setApiData] = useState([])

    const fetchApi = async () =>{      
      //Fetch api using axios 
        axios.get(`https://pixabay.com/api/?key=31152728-003c97f1d6cc96cffebe29dfd&q=${ipRef.current.value}&per_page=10`  
        ).then( mydata => setApiData(mydata.data.hits)
        // ).then( mydata => console.log(mydata)
        ).then(setLoading(false))
        }

    console.log(apiData)
    useEffect(()=>{
      fetchApi()
    }, [])

  return (
    <>

    <Group position="apart" className='w64 mt104'>
      
    <Text variant="gradient" gradient={{ from: 'indigo', to: 'purple', deg: 45 }} size={48} >Trending Now</Text>
    
    {loading && <Loader/>}
    <Input className="" ref={ipRef} onChange={fetchApi} placeholder="Browse by category" />
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Asset</th>
          <th>Price</th>
          <th>Volume</th>
        </tr>
      </thead>
      
  
    {!loading && apiData.map(val =>(
      <Tables  key={val.id} url={val.largeImageURL} amt={(Math.random() *0.1  + 0.01).toFixed(2)}
      volume={(Math.random() *100  + 0.01).toFixed(2)}
      /> 
      ))}

      </Table>

    </Group>
</>
  )
}
