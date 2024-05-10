import classes from './hero.module.css';

/**
 * Hero banner for the top of a scrollable page. Content is centered.
 */
export const Hero: React.FC<{ children?: React.ReactNode }> = ({ children } = {}) => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>{children}</div>
    </div>
  );
};
