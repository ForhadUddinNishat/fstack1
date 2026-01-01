import React from 'react'

import { Container,Button,VStack,Heading,Box, Input} from "@chakra-ui/react"
import { toaster } from "../components/ui/toaster"
import {useState} from 'react'
import {useProductStore} from "../store/product.js"

import {
  useColorModeValue,
} from "../components/ui/color-mode.jsx"


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  });

  const {createProduct} = useProductStore();

  const handleAddProduct = async() =>{
    const {success, message} =await createProduct(newProduct);
    //console.log("Success: ", success);
    //console.log("Message: ", message);
    if(success===true){
      toaster.create({
      type: 'success',
      title: 'Product Added',
      description: message,
      closable: true,
    })
    }else{
      toaster.create({
      type: 'Failed',
      title: 'Error',
      description: message,
      closable: true,
    })
    }
    setNewProduct({name:"", price:"", image:""});
  };

  return (
    <Container maxW={"100vh"} >
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create new Product</Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>

            <VStack spacing={4}>
              <Input placeholder="Product Name" name="name" value={newProduct.name}
              onChange={ (e) =>{ setNewProduct({...newProduct, name:e.target.value})}}>

              </Input>

              <Input placeholder="Price" name="price" type="number" value={newProduct.price}
              onChange={ (e) =>{ setNewProduct({...newProduct, price: e.target.value})}}>
              </Input>

              <Input placeholder="Image URL" name="image" value={newProduct.image} 
              onChange= {(e) =>{setNewProduct({...newProduct, image:e.target.value})}}>
              </Input>
              <Button onClick={handleAddProduct} w="full">
                Add product
              </Button>

            </VStack>
        </Box>

      </VStack>

    </Container>
    
  )
}

export default CreatePage