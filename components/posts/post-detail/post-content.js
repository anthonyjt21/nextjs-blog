import classes from './post-content.module.css';
import PostHeader from './post-header';

const DUMMY_POSTS = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJs',
  image: 'getting-started-nextjs.png',
  date: '2021-01-01',
  content: '# this is a first post',
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath}></PostHeader>
      {DUMMY_POSTS.content}
    </article>
  );
}

export default PostContent;
