import React, {useContext, useState} from 'react';
import User, {AuthContextProps} from "../../types/user";
import {PageProps} from "../../types/page";
import strings from "../../helpers/strings";
import {makeRequest, makeUrl} from "../../helpers/network";
import endpoints from "../../helpers/endpoints";

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

const AuthProvider = ({children}: PageProps) => {
    const [loadingUser, setLoadingUser] = useState(true);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const fetchCurrentUser = () => {
        const token = localStorage.getItem(strings.accessToken);

        if (token) {
            makeRequest({url: makeUrl(endpoints.me), method: "GET"})
                .then(json => {
                    if (json.id) {
                        setLoadingUser(false);
                        setCurrentUser(json);
                    }
                })
        } else {
            setLoadingUser(false);
            setCurrentUser(null);
        }
    }

    const authState = {
        loadingUser,
        currentUser,
        fetchCurrentUser,
    };

    React.useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): any => useContext(AuthContext);

export default AuthProvider;
