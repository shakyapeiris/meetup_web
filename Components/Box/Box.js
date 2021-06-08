import React, { useEffect } from "react";
import {useRouter} from 'next/router'
import classes from "./Box.module.css";
const Box = (props) => {
  const route = useRouter()
  const returnHandler = () => {
    route.push(`/${props.id}`)
    console.log(route)
  }
  return (
    <div className={classes.Box}>
      <div style = {{background:`url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}} className = {classes.img}>
        <div className={classes.Date}>
          <span className = {classes.time} >{new Date(props.date).getHours()}:{new Date(props.date).getMinutes()}</span>
          <span className = {classes.date} >{new Date(props.date).getDate()}</span>
          <span className = {classes.month} >{new Date(props.date).getMonth()}</span>
          <span>{new Date(props.date).getFullYear()}</span>
        </div>
      </div>
      <div className={classes.Block}>
        <h3>{props.title}</h3>
        <button onClick = {returnHandler}>More details</button>
      </div>
    </div>
  );
};

export default Box;
