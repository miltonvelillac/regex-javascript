function getDate() {
    const data = '2021-03-9';

    const reg = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/;
    const regCapGroup = /^(\d\d\d\d)([-./])(\d{1,2})\2(\d{1,2})$/; // \2 is geting the second capturing group value [-./], that means this will be true if has the same value
    const regNonCapGroup = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/; //?: mark the first group as non capturing group so in this case we will use \1 not \2, in this case the array[1] is the mont, array[2] is the day, we don't have the year
    const arr = reg.exec(data);
    let year, month, day;

    if(reg.test(data)) {
        year = arr[1];
        month = arr[2];
        day = arr[3];
        console.log(year, month, day);
    } else {
        console.error('Wrong format');
    }
}