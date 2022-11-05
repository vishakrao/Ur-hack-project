import React, {useState} from 'react'
import { Card, Image, Text, Button, Modal, Alert, Group, Avatar, Badge} from "@mantine/core"
import { useVarsContext } from '../contexts/VarsContext'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import ethLogo from "../assets/ethLogo.png"

export default function Cards(props) {
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


  return (
    <>
      <Card radius="lg" className='box' withBorder>

        <Group position='center' >
        <Image radius="lg" className="wh" src={props.url} alt="" />
          <Avatar size={40} color="orange">{props.amt}
          </Avatar>
            <Image src={ethLogo} height={"32px"} width="24px"/>
            <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={pay}>Buy now</Button>
          </Group>
          
      </Card>


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

