export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function getItem(key) {
  try {
    const item = JSON.parse(localStorage.getItem(key));

    if (key === "account_security" && item?.account_security) {
      if (item.account_security <= Date.now()) {
        removeItem(key);
        return {};
      }
    }

    return item;
  } catch {
    return {};
  }
}