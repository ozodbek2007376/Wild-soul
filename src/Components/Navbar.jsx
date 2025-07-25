import React from "react";

export default function Navbar() {
  return (
    <div className="col-sm-12  col-md-12">
      <div className="text-center py-4 background container-fluid justify-content-between ">
        <nav class="navbar  d-sm-flex d-lg-none">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>

        <div className="d-lg-flex d-none">
          <ul className="ul-sty col-6 col-sm-12  col-md-12">
            <li>
              <a className="a-sty" href="">
                Products
              </a>
            </li>
            <li>
              <a className="a-sty" href="">
                Who we are
              </a>
            </li>
            <li>
              <a className="a-sty" href="">
                Concept Store
              </a>
            </li>
            <img
              src="public/img/footer-logo.png"
              alt=""
              className="logo-img img-fluid "
            />
            <li>
              <a className="a-sty" href="">
                Recipes
              </a>
            </li>
            <li>
              <a className="a-sty" href="">
                Log In
              </a>
            </li>
            <li>
              <a className="a-sty" href="">
                Cart (0)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
