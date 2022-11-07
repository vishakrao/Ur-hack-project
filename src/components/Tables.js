import React, {useState} from 'react'
import { Card, Image, Text, Button, Modal, Alert, Group, Avatar, Table} from "@mantine/core"
import { useVarsContext } from '../contexts/VarsContext'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import ethLogo from "../assets/ethLogo.png"

export default function Tables(props) {
  const {signer} = useVarsContext()
  const [err, setErr] = useState()
  const [opened, setOpened] = useState()
  const [tx, setTx] = useState({})
  const [openedS, setOpenedS] = useState()

  // const [toAddr, setToAddr] = useState("0xE3811DeFd98AF92712e54b0b3E1735c1051C86D6")
  // // const [amount, setAmount] = useState(props.amt)

    const pay = async () =>{ 
        try{
          setTx(await signer.sendTransaction({
          to: "0xE3811DeFd98AF92712e54b0b3E1735c1051C86D6",
          value: ethers.utils.parseEther(`${props.amt}`)
          }))
          console.log(tx)
          setOpenedS(true) 
      }
        catch(err){
          setErr(err.message)
          setOpened(true)
          console.log(err)  
        }
    }
    const elements = [
      {url: props.url, amt: props.amt, volume: props.volume }
    ]

    const rows = elements.map((val)=>(
      <tr key={val.key}>
      <th> <Image onClick={pay} className="pointer mp8" radius="lg" src={val.url} height="56px" width="56px"/> </th>

      <th>  
          <Group>
            <Text size={16} color="grey">{val.amt} </Text>
            <Image src={ethLogo} height={"24px"} width="16px"/>
          </Group>
       </th>
       <th>
          <Text size={16} color="grey">{val.volume} ETH</Text>
       </th>
       
      </tr>
    ))

  return (
    <>
          <tbody>
           {rows}
          </tbody>
  
        {/* Error Modal */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>


      {/* Order confirmed */}
    <Modal overlayBlur={3} overlayOpacity={0.55} opened={openedS} onClose={() => setOpenedS(false)} title="Order Summary">
      <Alert>
        <Group position='center' className='cf'>
        <Text> Transaction processed </Text>
        <Text> {tx.hash}</Text>
        <a variant='light' target="_blank" color={"orange"} href={`https://goerli.etherscan.io/tx/${tx.hash}`} > View on etherscan </a>
        </Group>
      </Alert>
    </Modal>

    </>
  )
}
