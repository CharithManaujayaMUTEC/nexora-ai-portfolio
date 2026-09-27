export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} NEXORA. ALL RIGHTS RESERVED.</small>
        <div className="footer-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}