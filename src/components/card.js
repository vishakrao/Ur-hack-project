import React, {useState} from 'react'
import { Card, Image, Text, Button} from "@mantine/core"

export default function Cards(props) {

  return (
    <>
      <Card className='box' withBorder>
        <Image className="wh" src={props.url} alt="" />
        <Text>{Math.floor(Math.random() * 10) + 1 } Eth</Text>
        <Button> Buy Now </Button> 
      </Card>
    </>
  )
}