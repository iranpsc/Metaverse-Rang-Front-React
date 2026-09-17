// Defining UserContextTypes as an object of context action names.
export const UserContextTypes = {
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_FIELD: 'UPDATE_FIELD'
};

// Defining AddUserAction as a function which takes in data as a parameter and returns an object with type and payload properties. The type property is set to ADD_USER and the payload property contains user data.
export const AddUserAction = (data) => {
    return { type: UserContextTypes.ADD_USER, payload: { user: data } }
}

// Defining DeleteUserAction as a function which does not take any parameters and returns an object with type and empty payload properties. The type property is set to DELETE_USER.
export const DeleteUserAction = () => {
    return { type: UserContextTypes.DELETE_USER, payload: { } }
}
