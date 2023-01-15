export const renderStrAge = (bYear) => {
    const age = getAge(bYear);
    const num = age % 10;
    let str;
    if (num === 1) {
        str = "год";
    } else if (num > 1 && num < 5) {
        str = "года";
    } else {
        str = "лет";
    }
    return `${age} ${str}`;
};

const getAge = (bYear) => {
    return new Date(Date.now()).getFullYear() - bYear;
};
