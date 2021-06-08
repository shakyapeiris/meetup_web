import Item from "../Components/SingleItem/SingleItem";
import Head from 'next/head'

const SingleItem = (props) => {
  return (
    <div>
      <Head>
        <title>Add your meet up</title>
        <meta title = "description" content = "Add your own meetup" />
      </Head>
      <Item title = {props.meetup.title} image = {props.meetup.image} date = {props.meetup.date} description = {props.meetup.description} />
    </div>
  );
};

export async function getStaticPaths () {
  const url = "https://meetup-reactjs-default-rtdb.firebaseio.com/meetups.json";
  const response = await fetch(url);
  const data = await response.json();

  let filt_data = [];

  for (var key in data) {
    filt_data.push({ key: key, title: data[key].title, date: data[key].date, image: data[key].image, description: data[key].description});
  }
  

  return{
    fallback:false,
    paths:filt_data.map(meetup => ({
      params:{
        meetupId : meetup.key
      }
    }))
  }
}

export async function getStaticProps (context) {
  const meetupId = context.params.meetupId
  const url = "https://meetup-reactjs-default-rtdb.firebaseio.com/meetups.json";
  const response = await fetch(url);
  const data = await response.json();

  let filt_data = [];

  for (var key in data) {
    filt_data.push({ key: key, title: data[key].title, date: data[key].date, image: data[key].image, description: data[key].description});
  }

  const item = filt_data.find(meetup => meetup.key === meetupId)
  return{
    props:{
      meetup:item
    }
  }
}

export default SingleItem;
