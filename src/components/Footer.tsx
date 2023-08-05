export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>Copyright &copy; {currentYear} - All Rights Reserved.</div>
    </footer>
  );
};
