import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          <a>Matt Doyle | Software Engineer</a>
        </Link>
      </div>
      <a href="" className="cta-btn">
        CV
      </a>
    </div>
  );
};

export default Navbar;
