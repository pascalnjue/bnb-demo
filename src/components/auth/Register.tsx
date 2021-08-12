import React from 'react';
import {makeRequest, makeUrl} from "../../helpers/network";
import endpoints from "../../helpers/endpoints";
import strings from "../../helpers/strings";
import {getLoginModal, getPasswordResetModal} from "../../helpers/components";
import {useAuth} from "./AuthProvider";

const Register = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [registrationError, setRegistrationError] = React.useState("");

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setLoading(true);
        setRegistrationError("");

        const body = JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username: email,
            email, password
        });

        makeRequest({url: makeUrl(endpoints.register), method: "POST", body, omitAuth: true})
            .then(json => {
                if (json.id) {
                    document.getElementById("registerModalDismiss")?.click();
                    //    TODO: show alert
                } else {
                    if (json.email) setEmailError(json.email[0]);
                }
            })
            .catch(error => {
                console.log("error logging in:", error);
                setRegistrationError(strings.registrationError);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const openLoginModal = async () => {
        document.getElementById("registerModalDismiss")?.click();
        const loginModal = await getLoginModal();
        loginModal.show();
    }

    React.useEffect(() => {
        const loginModal = document.getElementById('registerModal');
        loginModal?.addEventListener('hidden.bs.modal', _ => {
            localStorage.removeItem("bookAfterAuth");
        })
    }, []);

    return (
        <div className="modal fade" id="registerModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="text-center">Register account</h4>
                            <button
                                id="registerModalDismiss"
                                data-bs-dismiss="modal"
                                className="btn btn-link text-decoration-none border-0 pe-0">
                                <h2 className="mt-2">
                                    <i className="bi bi-x"/>
                                </h2>
                            </button>
                        </div>
                        {registrationError && (
                            <p className="text-primary text-center mb-4">{registrationError}</p>
                        )}
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-3">
                                <label htmlFor="email">First Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={event => setFirstName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Last Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={event => setLastName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                                {emailError && (
                                    <p className="text-danger small text-center">{emailError}</p>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="py-3 text-center">
                                <button className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? "Loading..." : "Register Account"}
                                </button>
                                <hr/>
                                <p className="mb-2">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Already have an account?
                                </p>
                                <button
                                    onClick={openLoginModal}
                                    type="button"
                                    className="btn btn-secondary">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;