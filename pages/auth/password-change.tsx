import React from 'react';
import Layout from "../../src/components/main/Layout";
import {makeRequest, makeUrl} from "../../src/helpers/network";
import endpoints from "../../src/helpers/endpoints";
import {useRouter} from "next/router";
import strings from "../../src/helpers/strings";

const PasswordChange = () => {
    const [loading, setLoading] = React.useState(false);
    const [resetError, setResetError] = React.useState("");

    const [new_password, setNewPassword] = React.useState("");
    const [re_new_password, setNewPasswordAgain] = React.useState("");

    const router = useRouter();
    const {u, t} = router.query;

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setLoading(true);
        setResetError("");

        const body = JSON.stringify({new_password,re_new_password, uid: u, token: t})
        makeRequest({url: makeUrl(endpoints.passwordChange), method: "POST", body})
            .then(_ => {
                setResetError(strings.passwordChangeError);
            })
            .catch(_ => {
                // TODO: Show alert
                router.push("/").then();
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Layout title="Password Reset">
            <div className="container">
                <div className="py-5">
                    <div className="col-md-6 mx-auto">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="text-center mb-4">Password Reset</h3>
                                {resetError && (
                                    <p className="text-primary text-center mb-4">{resetError}</p>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <label htmlFor="newPasswordAgain">New Password:</label>
                                        <input type="password"
                                               className="form-control"
                                               onChange={event => setNewPassword(event.target.value)}
                                               required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="newPasswordAgain">New Password Again:</label>
                                        <input type="password"
                                               className="form-control"
                                               onChange={event => setNewPasswordAgain(event.target.value)}
                                               required
                                        />
                                    </div>
                                    <div className="my-3">
                                        <button className="btn btn-primary w-100" disabled={loading}>
                                            {loading ? "Loading..." : "Submit Changes"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PasswordChange;