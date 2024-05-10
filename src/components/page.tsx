import { Footer } from './footer.js';
import { Header, type HeaderProps } from './header.js';

interface Props {
  header?: HeaderProps;
  children?: React.ReactNode;
}

/**
 * Page layout with standard header and footer.
 */
export const Page: React.FC<Props> = ({ header, children } = {}) => {
  return (
    <>
      <Header {...header} />
      {children}
      <Footer />
    </>
  );
};
