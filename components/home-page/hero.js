import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/image.png"
          alt="alternative image anthony"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Anthony</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}
export default Hero;
