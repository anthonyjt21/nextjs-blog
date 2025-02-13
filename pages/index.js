import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturesPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
 <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturesPosts();
  return { props: { posts: featuredPosts } };
}
export default HomePage;
