export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-500 text-white mt-auto text-center p-2">
      <div>Copyright &copy; {currentYear} - All Rights Reserved.</div>
    </footer>
  );
};
