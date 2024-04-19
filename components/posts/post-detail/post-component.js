import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'; // Import synchronously

// Custom rendering function for code blocks
const CodeBlock = ({ language, value }) => {
  console.log('language' + language);
  console.log('value' + value);
  return (
    <SyntaxHighlighter language={language} style={atomDark} children={value}>
      {' '}
      {value}
    </SyntaxHighlighter>
  );
};

// Custom rendering function for paragraphs
const Paragraph = ({ children }) => {
  // Check if the paragraph contains only an image
  const containsOnlyImage = children.length === 1 && children[0].type === 'img';

  if (containsOnlyImage) {
    return <>{children}</>;
  }

  return <p>{children}</p>;
};

// Custom components object for ReactMarkdown
const components = {
  code: CodeBlock,
  // p: Paragraph,
  // Override the default rendering of images with a custom component
  // img: ({ node, ...props }) => {
  //   return (
  //     <div className="custom-image">
  //       <img {...props} />
  //     </div>
  //   );
  // },
};

// Example markdown content
const markdown = `
# Hello!

This is a paragraph with code:

\`\`\`javascript
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`

This is a paragraph with an image:

![Example Image](https://example.com/image.jpg)

This is another paragraph.
`;

function PostComponent() {
  return (
    <div className="markdown-container">
      <ReactMarkdown components={components} children={markdown}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default PostComponent;
