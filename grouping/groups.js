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

function Lookaheadgropus() {
    const data = 'http://allthingsjavascript.com http://google.com youtube.com';

    const reg = /\w+(?=\.com)/g;    
    const arr = data.match(reg);
    console.log(arr);
}

function LookaheadPassword() {
    const correctPassword = 'Mypassword99';
    const wrongPassword = 'mypassword99';
    const wrongPassword2 = 'Mypassword';
    const wrongPassword3 = 'Mypae99';
    const wrongPassword4 = 'MYPASSWORD99';
    const wrongPassword5 = 'Mypasswo rd99';

    const reg = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*\s).*$/;    
    const arr = correctPassword.match(reg);
    console.log(arr);
}

function exercise() {const correctPassword = 'Mypassword99';
    const data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"]; 
    const reg = /^(\w+),\s*(\w+)?/;  
    
    // let newData = data.map(val => {
    //     let arr = reg.exec(val);
    //     if (arr !== null) {
    //         return arr[2] + ' ' + arr[1];
    //     }
    // });

    let newData = data.map(val => val.replace(/(\w+), (\w+)/, '$2 $1'));

    console.log(newData);
}