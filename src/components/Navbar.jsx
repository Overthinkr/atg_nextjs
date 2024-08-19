import Image from "next/image";

export default function Navbar() {
    return (
        <nav class="navbar sticky-top bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.atg.world">
                    <Image src={"/hobbycue.jpg"} alt="na" width="228" height="58" />
                </a>
                <form class="d-flex" role="search">
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
                <li class="nav-item dropdown" id="navbarNavDropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Explore
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                People - Community
                            </a>
                        </li>
                        <hr class="dropdown-divider" />
                        <li>
                            <a class="dropdown-item" href="#">
                                Places - Venues
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Programs - Events
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Products - Store
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Hobbies
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                A
                            </a>
                        </li>
                        <hr class="dropdown-divider" />
                        <li>
                            <a class="dropdown-item" href="#">
                                B
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                C
                            </a>
                        </li>
                    </ul>
                </li>
                <span class="material-symbols-outlined">
                    bookmark
                </span>
                <span class="material-symbols-outlined">
                    notifications
                </span>
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
                <button type="button" class="btn btn-outline-info">Login</button>
            </div>
        </nav>
    )
}