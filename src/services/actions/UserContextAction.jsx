// Defining UserContextTypes as an object which has two properties ADD_USER and DELETE_USER
export const UserContextTypes = {
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER'
};

// Defining AddUserAction as a function which takes in data as a parameter and returns an object with type and payload properties. The type property is set to ADD_USER and the payload property contains user data.
export const AddUserAction = (data) => {
    return { type: UserContextTypes.ADD_USER, payload: { user: data } }
}

// Defining DeleteUserAction as a function which does not take any parameters and returns an object with type and empty payload properties. The type property is set to DELETE_USER.
export const DeleteUserAction = () => {
    return { type: UserContextTypes.DELETE_USER, payload: { } }
}
