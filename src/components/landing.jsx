import Link from "next/link";

export default function Landing() {
    return (
        <div className="container p-4 m-auto">
            <div className="container p-4 m-auto">
                <div className="row gy-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card h-100 p-3 border-purple hover-purple">
                            <h5 className="card-title d-flex align-items-center gap-4">
                                <span className="material-symbols-outlined text-purple">
                                    groups
                                </span>People
                            </h5>
                            <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
                            <button type="button" className="btn btn-outline-purple mt-auto">Connect</button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card h-100 p-3 border-success hover-success">
                            <h5 className="card-title d-flex align-items-center gap-4">
                                <span className="material-symbols-outlined text-success">
                                    location_on
                                </span>Place
                            </h5>
                            <p className="card-text">Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through Hobbycue.</p>
                            <button type="button" className="btn btn-outline-success mt-auto">Meet up</button>
                        </div>
                    </div>
                </div>

                <div className="row gy-4 mt-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card h-100 p-3 border-primary hover-primary">
                            <h5 className="card-title d-flex align-items-center gap-4">
                                <span className="material-symbols-outlined text-primary">
                                    shopping_basket
                                </span>Product
                            </h5>
                            <p className="card-text">Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or from community members.</p>
                            <button type="button" className="btn btn-outline-primary mt-auto">Get it</button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card h-100 p-3 border-danger hover-danger">
                            <h5 className="card-title d-flex align-items-center gap-4">
                                <span className="material-symbols-outlined text-danger">
                                    free_cancellation
                                </span>Program
                            </h5>
                            <p className="card-text">Find events, meetups, and workshops related to your hobby. Register or buy tickets online.</p>
                            <button type="button" className="btn btn-outline-danger mt-auto">Attend</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card d-flex m-auto mt-5">
                <div className="card-body px-4">
                    <h4 className="card-title">
                        <span className="material-symbols-outlined text-blue">add_circle</span> Add your own
                    </h4>
                    <p className="card-text">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
                    <a href="#" className="btn btn-primary mt-3">Add New</a>
                </div>
            </div>

            <div className="card d-flex m-auto mt-5">
                <div className="card-body px-4">
                    <h4 className="card-title">
                        <span className="material-symbols-outlined text-blue">format_quote</span> Testimonials
                    </h4>
                    <p className="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                    <audio controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            </div>
        </div>
    );
}