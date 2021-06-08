import Box from "../Components/Box/Box";
import Head from 'next/head'
const Home = (props) => {
  return (
    <div>
      <Head>
        <title>My meetups</title>
        <meta title = "description" content = "Join the biggest react meetup community"  />
      </Head>
      {props.meetups.length > 0 ? props.meetups.map(item => {
        return(
          <div key = {item.key}><Box id = {item.key} title = {item.title} image = {item.image} date = {item.date} /></div>
        )
      }) : "Loading"}
      
    </div>
  );
};

export const getStaticProps = async () => {
  const url = "https://meetup-reactjs-default-rtdb.firebaseio.com/meetups.json";
  const response = await fetch(url);
  const data = await response.json();

  let filt_data = [];

  for (var key in data) {
    filt_data.push({ key: key, title: data[key].title, date: data[key].date, image: data[key].image, description: data[key].description});
  }

  filt_data.sort(function(a,b){return a.date-b.date})

  return{
    props:{
      meetups:filt_data.filter(item => {
        return new Date(item.date).getTime() - new Date().getTime() > 0
      })
    },
    revalidate:1
  }
};

export default Home;
