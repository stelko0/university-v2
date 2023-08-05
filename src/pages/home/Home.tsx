import { Layout } from '../../components/Layout';
import { usePageTitle } from '../../hooks/usePageTitle.ts';

export const Home = () => {
  usePageTitle('Home');
  return (
    <Layout>
      <h1 className="font-xl font-bold">Home</h1>
    </Layout>
  );
};
