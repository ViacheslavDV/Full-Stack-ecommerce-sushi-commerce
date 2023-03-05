import { memo } from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "./Rating.module.css";

type IRating = {
 rating: number;
};

const Rating: React.FC<IRating> = memo(({ rating }) => {
 const ratingWidth = rating * 20;

 return (
  <div className={styles.wrapper}>
   <div className={styles.width} style={{ width: `${ratingWidth}px` }}>
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
    <AiFillStar className={styles.star} />
   </div>
   <span>{rating}</span>
  </div>
 );
});

export default Rating;
