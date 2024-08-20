"use client";
import { useState } from "react";

export default function User() {
    const [member, setMember] = useState(false);

    return (
        <div className="container m-auto p-4 d-flex">
            <div className="row gy-4">
                <div className="col-lg-8">
                    <h2>
                        Explore your <span style={{ color: "blue" }}>hobby</span> or <span style={{ color: "purple" }}>passion</span>
                    </h2>
                    <p>
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                    </p>
                    <p>
                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.
                    </p>
                </div>
                <form className="col-lg-4">
                    <p className="d-flex gap-2">
                        <span
                            onClick={() => setMember(true)}
                            style={member ? { color: "purple", textDecoration: "underline", fontWeight: "bold" } : { color: "black", fontWeight: "bold" }}>
                            LogIn
                        </span>
                        <span
                            onClick={() => setMember(false)}
                            style={!member ? { color: "purple", textDecoration: "underline", fontWeight: "bold" } : { color: "black", fontWeight: "bold" }}>
                            SignUp
                        </span>
                    </p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {member ? (
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <p className="d-flex"><span class="material-symbols-outlined">
                                lock
                            </span>forgot password?</p>
                        </div>
                    ) : (
                        <p>By continuing, you agree to our <span style={{ fontWeight: "bold" }}>Terms of Service</span> and <span style={{ fontWeight: "bold" }}>Privacy Policy</span>.</p>
                    )}
                    <button type="submit" className="btn btn-outline-purple">
                        {member ? "Continue" : "Agree and Continue"}
                    </button>
                </form>
            </div>
        </div>
    );
}
