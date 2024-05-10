import classes from './footer.module.css';

/**
 * Footer component for the bottom of a scrollable page. Includes the copyright.
 */
export const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContent}>
        Copyright © 2024, BearAuth, All rights reserved.
      </div>
    </div>
  );
};
