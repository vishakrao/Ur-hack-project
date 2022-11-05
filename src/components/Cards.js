import React, {useState} from 'react'
import { Card, Image, Text, Button, Modal, Alert, Group} from "@mantine/core"
import { useVarsContext } from '../contexts/VarsContext'
import { ethers } from 'ethers'
import { useEffect } from 'react'


export default function Cards(props) {
  const {signer} = useVarsContext()
  const [err, setErr] = useState()
  const [opened, setOpened] = useState()
  const [tx, setTx] = useState({})

  const [openedS, setOpenedS] = useState(false)
  // const [toAddr, setToAddr] = useState("0xE3811DeFd98AF92712e54b0b3E1735c1051C86D6")
  // // const [amount, setAmount] = useState(props.amt)

    const pay = async () =>{ 
        try{
          setTx(await signer.sendTransaction({
          to: "0xE3811DeFd98AF92712e54b0b3E1735c1051C86D6",
          value: ethers.utils.parseEther(`${props.amt}`)
          }))
          console.log(tx)
      }
        catch(err){
          // setErr(err)
          // setOpened(true)
          console.log(err)
        }
    }


  return (
    <>
      <Card className='box' withBorder>
        <Group position='center'>

        <Image className="wh" src={props.url} alt="" />
            <Text> {props.amt} Eth</Text>
        {/* Add button functionalities - ethers.js */}
        <Button onClick={pay}> Buy Now </Button> 
        
        </Group>
      </Card>


        {/* Error Modal */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>

      { tx && tx.hash  }

      {/* Order confirmed */}
    <Modal opened={openedS} onClose={() => setOpened(false)} title="Order confirmed">
      Confirmed
    </Modal>

    </>
  )
}

