import Head from "next/head";
import { MongoClient } from "mongodb";

import { Fragment } from "react";
import MeetUpList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browser a huge list of highly active React meetups"
        />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  /// fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://udemyCourse:udemyCourse@cluster0.k1rxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    // has to be names props
    props: {
      meetups: (await meetups).map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
} // has to be called getStaticProps

export default HomePage;
