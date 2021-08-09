import React from 'react';
import {makeRequest, makeUrl} from "../../helpers/network";
import endpoints from "../../helpers/endpoints";
import strings from "../../helpers/strings";
import {getLoginModal} from "../../helpers/components";

const PasswordReset = () => {
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [resetError, setResetError] = React.useState("");

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setLoading(true);
        setResetError("");

        const body = JSON.stringify({email});

        makeRequest({url: makeUrl(endpoints.passwordReset), method: "POST", body})
            .then(json => {
                if (json.non_field_errors) {
                    setLoading(json.non_field_errors[0]);
                }
            })
            .catch(_ => {
                // TODO: Show alert
                document.getElementById("passwordResetModal")?.click();
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const openLoginModal = async () => {
        document.getElementById("passwordResetModal")?.click();
        const loginModal = await getLoginModal();
        loginModal.show();
    }

    return (
        <div className="modal fade" id="passwordResetModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="text-center">Reset Account Password</h4>
                            <button
                                id="loginModalDismiss"
                                data-bs-dismiss="modal"
                                className="btn btn-link text-decoration-none border-0 pe-0">
                                <h2 className="mt-2">
                                    <i className="bi bi-x"/>
                                </h2>
                            </button>
                        </div>
                        {resetError && (
                            <p className="text-primary text-center mb-4">{resetError}</p>
                        )}
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-4">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 text-center">
                                <button className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? "Loading..." : "Reset Password"}
                                </button>
                                <p className="mt-2">
                                    Back to the&nbsp;
                                    <span className="text-primary cursor-pointer" onClick={openLoginModal}>
                                        Login page
                                    </span>.
                                </p>
                                <hr/>
                                <p className="mb-2">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Don't have an account?
                                </p>
                                <button className="btn btn-secondary">Register Today</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;