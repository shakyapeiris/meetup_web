import classes from "./SingleItem.module.css";
import Head from 'next/head'

const SingleItem = (props) => {
  return (
    <>
    <Head>
        <title>{props.title}</title>
        <meta title = "description" content = {props.description} />
    </Head>
    <div className={classes.Box}>
      <h1>{props.title}</h1>
      <div className = {classes.Container}>
        <h4>Time remaining</h4>
        <span className = {classes.Month}>{new Date(new Date(props.date).getTime() - new Date().getTime()).getMonth()-1} Month</span>
        <span className = {classes.Day}>{new Date(new Date(props.date).getTime()  - new Date().getTime()).getDate()} Days</span>
        <span className = {classes.Hour}>{new Date(new Date(props.date).getTime() - new Date().getTime()).getHours()} Hours</span>
        <span className = {classes.Mins}>{new Date(new Date(props.date).getTime()  - new Date().getTime()).getMinutes()} Mins</span>
      </div>
      <img src={props.image} alt="my place" />
      <p>{props.description}</p>
    </div>
    </>
  );
};

export default SingleItem;
