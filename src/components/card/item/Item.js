import React from 'react'
import {Card,Typography,CardContent,Grid} from '@material-ui/core'


import CountUp from 'react-countup'

const Item = ({title,value,date,description,classes}) => {
  
    return (
<Grid item component={Card} xs={12} md={3} className={classes}>
  <CardContent>
    <Typography color="textSecondary">{title}</Typography>
    <Typography variant="h5">
       <CountUp start={0} end={value} duration={3} separator=","></CountUp>
    </Typography>
    <Typography color="textSecondary">{date}</Typography>
    <Typography variant="body2">{description}</Typography>
  </CardContent>
</Grid>
        
    )
}

export default Item
