import { Alert, Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";

function Basket() {
  const { items, removeFromBasket } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">You have not any items in your basket!</Alert>
      )}

      {items.length > 0 && (
        <>
          <ul style={{listStyleType: "decimal", color:"purple"}}>
            {items.map((item) => (
              <li key={item._id} style={{marginBottom: 15}}>
                <Link to={`/product/${item._id}`}>
                  <Text fontSize="20" my="2">{item.title} - {item.price} TL</Text>
                  <Image
                    htmlWidth={200}
                    loading="lazy"
                    src={item.image}
                    alt="basket_item"
                  ></Image>
                </Link>

                <Button
                  mt="3"
                  my="4"
                  size="sm"
                  colorScheme="purple"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from basket
                </Button>
                <hr />
              </li>
            ))}
          </ul>
          <Box mt="4" p="2" backgroundColor="red" color="white">
            <Text fontSize="24">Total: {total} TL</Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Basket;
