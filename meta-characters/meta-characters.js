function wildCharacter() {
    /**
     * the wild character is .
     * this is use when you want to check a especific pattern with anything between it
     * i.e. /h.t/g
     * /h.t/g.test('how it that so hot, h@t h t') -> it matches in 4 places 1. hat  2. hot  3. h@t  4. h t
     */
    const regex1 = /h.t/g;
    const text = 'how it that so hot, h@t h t';
    console.log('using wildCharacter', regex1.exec(text));
    console.log('using wildCharacter', regex1.exec(text));
    console.log('using wildCharacter', regex1.exec(text));
    console.log('using wildCharacter', regex1.exec(text));
    console.log('using wildCharacter', regex1.exec(text)); // null
    // check: each time when the exec method runs, the regex continue after the last index when it matched
}

function escapingCharacter() {
    /**
     * If we want to use anyspecial character ^$.*+?=!:|\/()[]{} as a literal value we can use the escaping character \
     */

    const regex1 = /d\./g;
    const text = 'This could be the final word.'; // in this case only should match the last of the sentece wor[d.]
    console.log(regex1.exec(text));
}

function controlCharacters() {
    /**
     * \t -> tab
     * \v -> vertical tab
     * \n -> newline
     * \r -> carriage return
     */
}

function firstExercise() {
    /**     
     * Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
     */
    
    let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655", "701-801-9754"];
    const regex = /801-...-/;
    const phoneNumbsFiltered = phoneNums.filter(phone => regex.test(phone));
    console.log('firstExercise', phoneNumbsFiltered);
}

function secondExercise() {
    /*
    * Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
    */
    
    let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];
    const regex = /\d\d\d-\d\d\d-\d\d\d\d/;
    const phoneNumbsFiltered = phoneNums.filter(phone => regex.test(phone));
    console.log('secondExercise', phoneNumbsFiltered);
}

(function thirdExercise() {
    /*
        Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

        Use several different phone numbers to test.

        HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
    */
    const regex = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4,5}/;
    const input = document.getElementById('thirdExercise');
    
    input.addEventListener('keyup', () => {
        const inputValue = input.value;
        const phoneNumbsFiltered = regex.test(inputValue);
        const textColor = phoneNumbsFiltered ? 'blue'  : 'red';

        console.log('thirdExercise', phoneNumbsFiltered);
        document.getElementById('resultThirdExercise').innerHTML = inputValue;
        document.getElementById('resultThirdExercise').style.color = textColor;        
    });
})();


function anchoringFunction() {
    /*
        The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console. 
    */
    let text1 = 'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.';
    const reg = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi;
    const newText = text1.replace(reg, 'Monday');
    console.log('anchoringFunction', newText);
}
