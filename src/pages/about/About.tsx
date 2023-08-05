import { Layout } from '../../components/Layout';
import { usePageTitle } from '../../hooks/usePageTitle';

export const About = () => {
  usePageTitle('About us');
  return (
    <Layout>
      <h1>About page</h1>
    </Layout>
  );
};
