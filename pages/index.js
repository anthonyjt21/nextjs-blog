import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturePosts from '../components/home-page/featured-posts';
import { getFeaturesPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturesPosts();
  return { props: { posts: featuredPosts }, revalidate: 60 };
}
export default HomePage;
