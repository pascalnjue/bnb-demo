import React from 'react';
import {makeRequest, makeUrl} from "../../helpers/network";
import endpoints from "../../helpers/endpoints";
import strings from "../../helpers/strings";
import {getPasswordResetModal} from "../../helpers/components";
import {useAuth} from "./AuthProvider";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [loginError, setLoginError] = React.useState("");
    const {fetchCurrentUser} = useAuth();

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setLoading(true);
        setLoginError("");

        const body = JSON.stringify({email, password});

        makeRequest({url: makeUrl(endpoints.login), method: "POST", body, omitAuth: true})
            .then(json => {
                if (json.non_field_errors) {
                    setLoginError(json.non_field_errors[0]);
                } else if (json.auth_token) {
                    localStorage.setItem(strings.accessToken, json.auth_token);
                    fetchCurrentUser();
                    if (localStorage.getItem("bookAfterAuth")) {
                        setTimeout(() => {
                            document.getElementById("bookButton")?.click();
                        }, 2000);
                    }
                    document.getElementById("loginModalDismiss")?.click();
                    //    TODO: show alert
                }
            })
            .catch(error => {
                console.log("error logging in:", error);
                setLoginError(strings.loginError);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const openPasswordResetModal = async () => {
        document.getElementById("loginModalDismiss")?.click();
        const passwordResetModal = await getPasswordResetModal();
        passwordResetModal.show();
    }

    React.useEffect(() => {
        const loginModal = document.getElementById('loginModal')
        loginModal?.addEventListener('hidden.bs.modal', _ => {
            localStorage.removeItem("bookAfterAuth");
        })
    }, []);

    return (
        <div className="modal fade" id="loginModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="text-center">Login in to your account</h4>
                            <button
                                id="loginModalDismiss"
                                data-bs-dismiss="modal"
                                className="btn btn-link text-decoration-none border-0 pe-0">
                                <h2 className="mt-2">
                                    <i className="bi bi-x"/>
                                </h2>
                            </button>
                        </div>
                        {loginError && (
                            <p className="text-primary text-center mb-4">{loginError}</p>
                        )}
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
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
                                    {loading ? "Loading..." : "Log In"}
                                </button>
                                <p className="mt-2">
                                    Forgot password?&nbsp;
                                    <span className="text-primary cursor-pointer" onClick={openPasswordResetModal}>
                                        Click here
                                    </span>
                                    &nbsp;to reset password.
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

export default Login;