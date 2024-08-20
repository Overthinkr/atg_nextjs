import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top bg-body-tertiary px-3 mt-2 nav-z shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.atg.world">
                        <Image src={"/hobbycue.jpg"} alt="na" width="228" height="58" />
                    </a>

                    <form className="d-none d-lg-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-purple" type="submit">
                            Search
                        </button>
                    </form>

                    <span className="material-symbols-outlined d-lg-none">
                        search
                    </span>

                    <span className="material-symbols-outlined">
                        notifications
                    </span>

                    <ul className="navbar-nav d-none d-lg-flex flex-row align-items-center">
                        <li className="nav-item dropdown position-relative">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Explore
                            </a>
                            <ul className="dropdown-menu list-unstyled position-absolute">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        People - Community
                                    </a>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Places - Venues
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Programs - Events
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Products - Store
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown ms-3 position-relative">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Hobbies
                            </a>
                            <ul className="dropdown-menu list-unstyled position-absolute">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        A
                                    </a>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <a className="dropdown-item" href="#">
                                        B
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        C
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item ms-3">
                            <span className="material-symbols-outlined">
                                bookmark
                            </span>
                        </li>

                        <li className="nav-item ms-3">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </li>
                    </ul>

                    <button
                        className="btn btn-outline-purple d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </div>
            </nav>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <form className="d-flex mb-3" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-purple" type="submit">
                            Search
                        </button>
                    </form>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Explore
                            </a>
                            <ul className="dropdown-menu list-unstyled">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        People - Community
                                    </a>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Places - Venues
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Programs - Events
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Products - Store
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Hobbies
                            </a>
                            <ul className="dropdown-menu list-unstyled">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        A
                                    </a>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <a className="dropdown-item" href="#">
                                        B
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        C
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <span className="material-symbols-outlined">
                                bookmark
                            </span>
                        </li>

                        <li className="nav-item">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </li>
                        <button type="button" className="btn btn-outline-purple mt-3">Login</button>
                    </ul>
                </div>
            </div>
        </>
    );
}
