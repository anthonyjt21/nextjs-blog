import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is a React framework, it make building fullstack ap  ps easy and fun!',
    date: '2021-01-01',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJs2',
    image: 'getting-started-nextjs2.png',
    excerpt:
      'Nextjs is a React framework, it make building fullstack ap  ps easy and fun!',
    date: '2021-01-01',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJs3',
    image: 'getting-started-nextjs3.png',
    excerpt:
      'Nextjs is a React framework, it make building fullstack ap  ps easy and fun!',
    date: '2021-01-01',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJs4',
    image: 'getting-started-nextjs4.png',
    excerpt:
      'Nextjs is a React framework, it make building fullstack ap  ps easy and fun!',
    date: '2021-01-01',
  },
];
function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostsPage;
