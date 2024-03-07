import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const CustomRouter = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
};

export default CustomRouter;
