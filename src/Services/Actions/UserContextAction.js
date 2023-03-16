export const UserContextTypes = {
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER'
};

export const AddUserAction = (data) => {
    return { type: UserContextTypes.ADD_USER, payload: { user: data } }
}

export const DeleteUserAction = () => {
    return { type: UserContextTypes.DELETE_USER, payload: { } }
}