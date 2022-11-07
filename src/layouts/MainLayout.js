import Navbar1 from "../components/Navbar1";
import CardWrapper from "../components/CardWrapper"
import MyNavbar from "../components/MyNavbar"
import TableWrapper from "../components/TableWrapper"
import { Group, Text } from "@mantine/core";

export default function MainLayout() {
  return (
    <>
        <MyNavbar/>

        <Group spacing="xl">
          <Navbar1/>
          <TableWrapper/>
        </Group>

      <Group className="m88" position="center">
        <Text variant="gradient" gradient={{ from: 'indigo', to: 'purple', deg: 45 }} className="m88" size={40} >Explore our NTF collections</Text>
        <Group position="center"> 
          <CardWrapper/>
        </Group>
      </Group>

    </>
  )
}
