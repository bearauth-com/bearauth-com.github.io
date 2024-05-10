import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.svg?react';
import { Button } from './button.js';
import classes from './header.module.css';

/**
 * Header component props.
 */
export interface HeaderProps {
  /**
   * Subtitle string which follows the BearAuth main title.
   */
  title?: string;
  /**
   * Additional content to display at the end of the header.
   */
  end?: React.ReactNode;
}

/**
 * Header bar with fixed height and flex row layout.
 */
export const Header: React.FC<HeaderProps> = ({ title, end } = {}) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <Link className={classes.headerTitle} to="/">
          <Logo aria-label="BearAuth logo" />
          <h1>
            BearAuth
            {title && (
              <span className={classes.headerSubtitle}>
                {': '}
                {title}
              </span>
            )}
          </h1>
        </Link>
        <div className={classes.headerEnd}>
          {end}
          <Button as="a" target="_blank" rel="noreferrer" href="https://github.com/bearauth-com" icon={<IconBrandGithub aria-label="Github" />}></Button>
          <Button as="a" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/bearauth/" icon={<IconBrandLinkedin stroke={1.75} size={28} />}>Get updates on LinkedIn</Button>
        </div>
      </div>
    </div>
  );
};
