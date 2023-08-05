import { Layout } from '../../components/Layout';
import { usePageTitle } from '../../hooks/usePageTitle';

export const Settings = () => {
  usePageTitle('Settings');
  return (
    <Layout>
      <h1>Settings</h1>
    </Layout>
  );
};
