import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";

import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "../components/ui/color-mode.jsx"


import { Container,Flex,Text, HStack,Button } from "@chakra-ui/react"
import {Link} from "react-router-dom"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    
  return (
<Container maxW={"1140px"} px="4">
        <Flex h={16}
            alignItems={"center"}
            justifyContent= {"space-between"}
            flexDir={{
                base: "Column",
                sm:"row"
            }}><Text color="#FF5733" fontSize="1.5rem"><Link to={"/"}>Product Store</Link></Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus />
                    </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode==="light"? "light":"dark"
                        }
                        <LuSunMoon />
                    </Button>

                </HStack>
        </Flex>

    </Container>
  )
}

export default Navbar