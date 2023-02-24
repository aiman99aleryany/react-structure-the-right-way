const deepCopy = (obj: Object) => {
    if (!obj) return undefined;
    return JSON.parse(JSON.stringify(obj));
};

export default deepCopy;
