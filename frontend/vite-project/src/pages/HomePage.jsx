import React from 'react'
import {useEffect} from 'react'
import { Container,SimpleGrid,VStack,Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {useProductStore} from "../store/product.js"
import ProductCard from "../compo/ProductCard.jsx"

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect( () =>{
    fetchProducts();
  }, [fetchProducts])

  console.log("products", products)
  return (
    <Container maxW='conatiner.xl' py={12}>
      <VStack>
        <Text>Current Products</Text>

        <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10} w="full">
          {products.map((product) =>{
            return <ProductCard key={product._id} product={product}/>
          })}

        </SimpleGrid>

        {products.length===0 &&(
          <Text fontSize="xl" textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
            No Products Found.{" "}
            <Link to={"/create"}>
              <Text as="span" color="blue.500" _hover={{textDecoration:"underline"}}>Create a product</Text>
            </Link>
          </Text>

        )}
        


      </VStack>

    </Container>
  )
}

export default HomePage
