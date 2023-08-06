export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 min-w-full bg-slate-600">
      <p>Copyright &copy; {currentYear} - All Rights Reserved.</p>
    </footer>
  );
};
