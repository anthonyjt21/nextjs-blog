import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), '/content/posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/.md$/, '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // removes the .md from the file name
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
  const postFile = getPostsFiles();
  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }
  const allPosts = postFile.map((postFile) => {
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
