import classes from './sad-bear.module.css';

/**
 * Full page width sad bear "hero" image.
 */
export const SadBear: React.FC = () => {
  return (
    <div className={classes.sadBear}>
      <div className={classes.sadBearContent} />
    </div>
  );
};
