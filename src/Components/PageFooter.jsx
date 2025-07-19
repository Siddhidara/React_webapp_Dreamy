import "./Pagefooter.css";
function PageFooter() {
  return (
    <div className="container">
      <hr />
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/Features" className="nav-link px-2">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/About" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>
        <p className="text-center mb-1">© Dreamy, Inc</p>
        <p className="text-center " style={{ fontSize: "13px" }}>
          Powered by{" "}
          <a href="https://giphy.com" target="_blank" rel="noopener noreferrer">
            GIPHY
          </a>
        </p>
      </footer>
    </div>
  );
}

export default PageFooter;
