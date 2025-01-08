const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isStrongPassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[@$!%*?&]/.test(password);

const isPhoneNumber = (phone) => /^[0-9]{10,15}$/.test(phone);

module.exports = { isEmail, isStrongPassword, isPhoneNumber };
