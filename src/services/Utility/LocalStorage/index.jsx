export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key) {
    localStorage.removeItem(key);
}

export function getItem(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return {}
    }
};
