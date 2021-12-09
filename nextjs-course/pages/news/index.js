// our-domain/news
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is a great framework</Link>
        </li>
        <li>Blah blah blah</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
