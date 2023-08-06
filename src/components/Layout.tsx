// import { Footer } from '../Footer/Footer';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[calc(100%_-_10rem)]flex flex-col">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
