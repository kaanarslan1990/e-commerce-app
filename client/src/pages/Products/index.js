import { Grid } from "@chakra-ui/react";
import Card from "../../components/Card";

function Products() {
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;