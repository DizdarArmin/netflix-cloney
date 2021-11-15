import LangSelect from "./LangSelect";

export default function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="title">Questions? Call 0720097143</div>
      <div className="links">
        <span>
          <span>FAQ</span>
          <span>Investor Relations</span>
          <span>Ways to Watch</span>

          <span>Only on Netflix </span>
        </span>

        <span>
          <span>Help Centre</span>
          <span>Jobs </span>
          <span>Terms of Use </span>
          <span>Contact Us </span>
        </span>

        <span>
          <span> Account</span>
          <span> Redeem gift cards</span>
          <span> Privacy </span>
          <span> Speed Test</span>
        </span>
        <span>
          <span>Media Centre</span>
          <span>Buy gift cards</span>
          <span>Cookie Preferences</span>
          <span>Legal Notices</span>
        </span>
      </div>
      <div className="select-wrap">
        <LangSelect />
      </div>
    </footer>
  );
}
