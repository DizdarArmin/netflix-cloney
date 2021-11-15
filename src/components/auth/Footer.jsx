import LangSelect from "./LangSelect";

export default function Footer() {
  return (
    <div className="footer-bg">
      <footer className="footer auth-footer">
        <div className="title">Questions? Call 0720097143</div>
        <div className="links">
          <span>
            <span>FAQ</span>
            <span>Cookie Preferences</span>
          </span>

          <span>
            <span>Help Centre</span>
            <span>Corporate Information</span>
          </span>

          <span>
            <span>Terms of Use</span>
          </span>
          <span>
            <span>Privacy</span>
          </span>
        </div>
        <div className="select-wrap">
          <LangSelect />
        </div>
      </footer>
    </div>
  );
}
