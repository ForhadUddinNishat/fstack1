import {Text,HStack, IconButton, Heading,Box, Image} from "@chakra-ui/react"
import React from 'react'
import { toaster } from "../components/ui/toaster"
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useProductStore } from "../store/product.js";

const ProductCard = ({product}) => {

    const {deleteProduct}=useProductStore()
    const handleDeleteProduct = async(pid) =>{
        const {success, message} = await deleteProduct(pid);
        if(success===true){
            console.log("success: ", success);
            console.log("Message: ", message);
            toaster.create({
                  type: 'delete',
                  title: 'Product Delete',
                  description: message,
                  closable: true,
            })
        }
    }
  return (
    <Box shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' bg="gray.500" margin="4px" cursor={"pointer"}
    _hover={{transform: "translateY(-5px)", shadow:'xl'}}>
        <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover"></Image>
        
        <Box p={4}>
            <Heading as='h3' size='md' mb={1}>{product.name}</Heading>
            <Text fontWeight="bold" fontSize="xl" mb={4}>${product.price}</Text>
        </Box>
        

        <HStack spacing={2} margin="10px 10px 10px 10px">
            <FaRegEdit/>
            <MdDelete onClick={() => handleDeleteProduct(product._id)}/>

        </HStack>
    </Box>
  )
}

export default ProductCard