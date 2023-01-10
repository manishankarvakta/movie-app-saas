import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <p className="text-center">Footer One</p>
            <p className="copy text-center">&copy; 2021 All right Reserved</p>
          </div>
          <div className="col-md-3">
            <p>
              It is a Free Movies streaming site with zero ads. We let you watch
              movies online without having to register or paying, with over
              10000 movies and TV-Series. You can also Download full movies from
              and watch it later if you want.
            </p>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Terms of services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="note">
              <p>
                We does not store any files on our server, we only linked to the
                media which is hosted on 3rd party services.
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
