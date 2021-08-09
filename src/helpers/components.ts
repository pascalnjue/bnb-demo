export const getLoginModal = async () => {
    const bootstrap = await import("bootstrap");
    const loginModalElement = document.getElementById("loginModal") ?? '';
    return  new bootstrap.Modal(loginModalElement);
}

export const getPasswordResetModal = async () => {
    const bootstrap = await import("bootstrap");
    const passwordResetModalElement = document.getElementById("passwordResetModal") ?? '';
    return  new bootstrap.Modal(passwordResetModalElement);
}