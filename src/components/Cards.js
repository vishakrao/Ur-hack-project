import React from "react";
import { Card, Image, Text, Button } from "@mantine/core";

export default function Cards(props) {
  // const [randNum ,setRandNum] = useState(0)
  // setRandNum(Math.floor(Math.random() * 10) + 1 )

  return (
    <>
      <Card className="box" withBorder>
        <Image className="wh" src={props.url} alt="" />
        <Text> {props.amt} Eth</Text>

        {/* Add button functionalities - ethers.js */}
        <Button> Buy Now </Button>
      </Card>
    </>
  );
}
