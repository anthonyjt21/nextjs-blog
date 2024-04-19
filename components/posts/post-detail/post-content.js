import ReactMarkdown from 'react-markdown';

import Image from 'next/image';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from './post-header';
import classes from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

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
    code: ({ node, className, children, ...props }) => {
      console.log({ children });
      // Extract language from className (e.g., "language-javascript")
      console.log('className ' + className);
      const language = className ? className.replace('language-', '') : '';
      console.log('language ' + language);
      return (
        <SyntaxHighlighter
          style={duotoneDark}
          language={language}
          children={children}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* <PostContentData /> */}
      <ReactMarkdown components={components} children={post.content}>
        {post.content}
      </ReactMarkdown>
      {/* <MarkdownComponent /> */}
      {/* <Component /> */}
    </article>
  );
}

export default PostContent;
