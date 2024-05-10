import classes from './grid.module.css';

/**
 * Wrap an unordered list (`<ul>`) to create a grid layout.
 */
export const Grid: React.FC<{ children?: React.ReactNode }> = ({ children } = {}) => {
  return <div className={classes.grid}>{children}</div>;
};
