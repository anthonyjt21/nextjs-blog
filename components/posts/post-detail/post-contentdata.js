import React from 'react';
import ReactMarkdown from 'react-markdown';

const MyImage = ({ src, alt }) => {
  return (
    <div className="custom-image">
      <img src={src} alt={alt} />
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
      return <h1>hola</h1>;
      // return children;
    }

    return <p {...props}>{children}</p>;
  },
  //image: <h1>hola</h1>, // Override the default rendering of images with your custom component
};

const markdown = `
# Hello!

![Example Image](/images/posts/getting-started-with-nextjs/nextjs-file-based-routing.png)

This is another paragraph.
`;

const PostContentData = () => {
  return (
    <div className="markdown-container">
      <ReactMarkdown components={components} children={markdown} />
    </div>
  );
};

export default PostContentData;
