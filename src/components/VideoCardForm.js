import styles from "./VideoCardForm.module.css";
const VideoCardForm = () => {
  return (
    <video className={styles.video} controls>
      <source />
    </video>
  );
};

export default VideoCardForm;
