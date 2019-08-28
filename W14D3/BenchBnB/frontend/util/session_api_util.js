export const signup = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    });
};

// const user = {
//   id: 1,
//   username: "",
//   password: "password"
// }

// const data = {
//   user: {
//     id: 1,
//     username: "",
//     email: "",
//     password: "password"
//   }
// }

export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    });
};

export const logout = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    });
};
