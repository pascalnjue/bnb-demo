const endpoints = {
    // bookings
    bookings: "/bookings/",
    bookingDetails: (id: string | string[] | undefined) => `/bookings/${id}`,

    //users and auth
    login: "/token/login/",
    logout: "/token/logout/",
    passwordReset: "/users/reset_password/",
    passwordChange: "/users/reset_password_confirm/",
    me: "/users/me/",
}

export default endpoints;