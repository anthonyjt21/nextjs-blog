import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';
import PostContentData from './post-contentdata';
import Image from 'next/image';

function PostContent(props) {
  const { post } = props;
  console.log('post data');
  console.log(post);
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const MyImage = ({ src, alt }) => {
    return (
      <div className={classes.image}>
        <Image src={src} alt={alt} width={600} height={300} />
      </div>
    );
  };

  const components = {
    p: ({ node, children, ...props }) => {
      // Check if the paragraph contains only an image
      //console.log('node.children[0].type =' + node.children[0].type);

      const firstChild = node.children[0];

      const containsOnlyImage = (firstChild.type =
        'element' && firstChild.tagName === 'img');

      if (containsOnlyImage) {
        console.log('type de elemento imagen ' + node.children[0].type);
        console.log('containsOnlyImage');
        console.log(firstChild);
        const src = node.children[0].properties.src;
        const alt = node.children[0].properties.alt;
        console.log('src ' + src);
        console.log('alt ' + alt);
        return <MyImage src={src} alt={alt}></MyImage>;
        // return children;
      }

      return <p {...props}>{children}</p>;
    },
    // Image: ({ node, children, ...props }) => {
    //   return <h1>hola</h1>; // Override the default rendering of images with your custom component
    // },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* <PostContentData /> */}
      <ReactMarkdown components={components} children={post.content} />
    </article>
  );
}

export default PostContent;
