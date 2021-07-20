import React from "react";
import Item from "./item/Item";
import { Grid } from "@material-ui/core";
import style from "./Card.module.css";
import classes from "classnames";

const card = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
  if(!confirmed){
    return <h2>Loading...</h2>
  }
  return (
    <div className={style.container}>
      <Grid container spacing={3}  justifyContent="center">
        <Item
          classes={classes(style.card, style.infected)}
          title="Infected"
          value={confirmed.value}
          date={new Date(lastUpdate).toDateString()}
          description="Number of active cases by COVID-19"
        ></Item>

         <Item
          classes={classes(style.card, style.recovered)}
          title="Recovered"
          value={recovered.value}
          date={new Date(lastUpdate).toDateString()}
          description="Number of recovered cases by COVID-19"
        ></Item>
         <Item
          classes={classes(style.card, style.deaths)}
          title="Deaths"
          value={deaths.value}
          date={new Date(lastUpdate).toDateString()}
          description="Number of death cases by COVID-19"
        ></Item>
      </Grid>
    </div>
  );
};

export default card;
