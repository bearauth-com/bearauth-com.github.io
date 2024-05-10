import classNames from 'classnames';

import classes from './section.module.css';

interface Props {
  children?: React.ReactNode;
  blockPad?: boolean;
  blockMargin?: boolean;
}

/**
 * Text content that should have a max width and be centered in its parent
 * if the parent is wider than the surface.
 */
export const Section: React.FC<Props> = ({ children, blockPad, blockMargin } = {}) => {
  return (
    <div className={classNames([
      classes.section,
      blockPad && classes.sectionPadBlock,
      blockMargin && classes.sectionMarginBlock,
    ])}
    >
      {children}
    </div>
  );
};
