import { Grid } from "@mui/material";
import React from "react";
import Product from "../../components/product";

export default function Productlist(props) {
  return (
    <div style={{ padding: "25px" }}>
      <Grid container spacing={4}>
        {props.productlist.map((product) => {
          return (
            <Grid item key={product.id} sm={6} md={4} lg={3}>
              {" "}
              <Product item={product}></Product>{" "}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
