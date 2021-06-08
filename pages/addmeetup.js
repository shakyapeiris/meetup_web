import Form from '../Components/Form/Form'
import Head from 'next/head'

const Add = () => {
    return(
      <>
      <Head>
          <title>Add your meetup</title>
          <meta title = "description" content = "Add your meetup to gain more community" />
        </Head>
      <div>
        <Form />
      </div>
      </>
    )
  }
  
  export default Add