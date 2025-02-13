import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  console.log('date' + date);

  var adjustedDate = new Date(
    new Date(date).getTime() + new Date(date).getTimezoneOffset() * 60000
  );
  const formattedDate = adjustedDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
export default PostItem;
