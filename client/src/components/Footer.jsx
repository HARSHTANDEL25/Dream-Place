import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gradient-to-r bg-slate-700 text-white py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">
           DREAM<span className="text-yellow-300">PALACE</span>
          </h3>
          <p className="text-sm">Finding your dream place made easy.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Explore</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="/">
                <a onClick={scrollToTop}>Home</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/search">
                <a onClick={scrollToTop}>Search</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
  <h3 className="text-xl font-bold">Explore</h3>
  <ul className="list-none p-0">
    <li className="mb-2">
      <Link to="/agent">
        <a onClick={scrollToTop}>Agent</a>
      </Link>
    </li>
    <li className="mb-2">
      <Link to="/about">
        <a onClick={scrollToTop}>About</a>
      </Link>
    </li>
  </ul>
</div>

        <div>
          <h3 className="text-xl font-bold">Connect</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="mailto:info@harshestate.com">Email us</a>
            </li>
            <li className="mb-2">
              <a href="tel:+123456789">Call us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;