import { getVoteAvg, getVoteCount } from "../../../utils/formatInfo";

import { Rating } from "@mantine/core";

import styles from "./Votes.module.css";

const Votes = ({ vote_average, vote_count }) => {
  return (
    <div className={styles.votes}>
      <div className={styles.votes__average}>
        <Rating
          classNames={{ root: styles.votes__rating }}
          size="lg"
          value={1}
          count={1}
          readOnly
        />
        <p className={styles.votes__average__text}>
          {vote_average ? getVoteAvg(vote_average) : "unknown"}
        </p>
      </div>
      <p className={styles.votes__count}>({getVoteCount(vote_count)})</p>
    </div>
  );
};

export default Votes;
