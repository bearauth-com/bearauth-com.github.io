import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import classes from './button.module.css';

type Props<T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>> = {
  as?: T;
  icon?: React.ReactNode;
  readOnly?: boolean;
} & React.ComponentProps<T>;

/**
 * A polymorphic button component.
 */
export const Button = <T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>(
  { as, icon, className, children, ...props }: Props<T>,
): React.ReactNode => {
  const Component = as ? as : props.href ? 'a' : props.onClick ? 'button' : 'div';

  return (
    <Component
      {...props}
      className={classNames(className, classes.button, {
        [classes.buttonClickable!]: Boolean(!props.readOnly && (props.href || props.onClick || as === Link)),
      })}
    >
      {React.Children.count(icon) > 0 ? <span className={classes.buttonIcon}>{icon}</span> : null}
      {React.Children.count(children) > 0
        ? (
          <span className={classes.buttonContent}>{children}</span>
        )
        : null}
    </Component>
  );
};
