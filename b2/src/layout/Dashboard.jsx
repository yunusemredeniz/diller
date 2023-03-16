import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Categories from "./Categories";
import Productslist from "../pages/Productslist";
export default function Dashboard() {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Productslist />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
/* rfc */
