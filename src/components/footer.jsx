export default function Footer() {
    return (
        <div className="container p-4 m-auto">
            <div className="row gy-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h5>HobbyQue</h5></li>
                        <li className="list-group-item">About Us</li>
                        <li className="list-group-item">Our Services</li>
                        <li className="list-group-item">Work with us</li>
                        <li className="list-group-item">FAQ</li>
                        <li className="list-group-item">Contact us</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h5>How Do I?</h5></li>
                        <li className="list-group-item">Sign Up</li>
                        <li className="list-group-item">Add a listing</li>
                        <li className="list-group-item">Claim Listing</li>
                        <li className="list-group-item">Post a query</li>
                        <li className="list-group-item">Add a Blog post</li>
                        <li className="list-group-item">Other queries</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h5>Quick Links</h5></li>
                        <li className="list-group-item">Listings</li>
                        <li className="list-group-item">Shop/store</li>
                        <li className="list-group-item">Community</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h5>Social Media</h5>
                    <div className="d-flex justify-content-around mb-3">
                        <span className="material-symbols-outlined">
                            public
                        </span>
                        <span className="material-symbols-outlined">
                            public
                        </span>
                        <span className="material-symbols-outlined">
                            public
                        </span>
                        <span className="material-symbols-outlined">
                            public
                        </span>
                        <span className="material-symbols-outlined">
                            public
                        </span>
                    </div>

                    <h5>Invite Friends</h5>
                    <form className="d-flex flex-column gap-2" role="search">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Email ID"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-purple" type="submit">
                            Invite
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
