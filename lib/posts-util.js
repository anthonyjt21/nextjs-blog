import fs from 'fs';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), '/content/posts');

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace('/.md$/', ''); // removes the .md from the file name
  console.log('postSlug =' + postSlug);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  console.log(postData);
  return postData;
}
export function getAllPosts() {
  const postFile = fs.readdirSync(postsDirectory);
  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturesPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
