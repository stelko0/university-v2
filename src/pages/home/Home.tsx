import { Layout } from '../../components/Layout';
import { usePageTitle } from '../../hooks/usePageTitle.ts';
import { SchuduleForm } from '../../components/SchuduleForm.tsx';

export const Home = () => {
  usePageTitle('Home');
  return (
    <Layout>
      <SchuduleForm />
    </Layout>
  );
};
