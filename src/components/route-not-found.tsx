import { Link } from 'react-router-dom';

/**
 * Display a message when no route matches the current location.
 */
export const RouteNotFound: React.FC = () => {
  return (
    <p>
      Oops! This page you are looking for does not seem to exist.
      <Link to="/">Return to the homepage.</Link>
    </p>
  );
};
