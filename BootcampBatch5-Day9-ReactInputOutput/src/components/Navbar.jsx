const Navbar = (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container p-2">
      <a className="navbar-brand" href="/">BootcampBatch 5: ReactJS</a>
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;