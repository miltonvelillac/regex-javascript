function compareUsingTest() {
    const regex1 = new RegExp('hello');
    console.log('using test', regex1.test('say hello world')); // return true
    console.log('using test', regex1.test('say hi world')); // return false
}

function compareUsingExec() {
    // returns an array of matches
    const regex1 = /hello/;
    console.log('using exec', regex1.exec('say hello world'));
    console.log('using exec', regex1.exec('say hi world'));

    /**
     * we get an array
        0: "hello"   // regular expresion
        groups: undefined
        index: 4 // first position when it matches
        input: "say hello world" // input value
        length: 1
     */        
}

function compareUsingString() {
    /**
     * When we use strings javascript provide us some methods to use regex
     */
    const regex1 = /hello/;
    const regex2 = /\s/; // blank spaces
    const text = 'say hello world';
    console.log('using string match', text.match(regex1)); // the result is the same that exec
    console.log('using string search', text.search(regex1)); // give us the index where it matchs
    console.log('using string replace', text.replace(regex1, 'hi')); // replace the value, this method doesn't replace the string because it is inmutable
    console.log('using string split', text.split(regex1)); // split the string in an array using the regex as reference, the regex value will be eliminate because it is the delimiter
    console.log('using string split with spaces', text.split(regex2));
    console.log('print text to show it is inmutable', text);

}



function usingFlags() {
    // we can use them with literal expresions i.e. /patter/flags
    // we can use hem with the constructor too, i.e. new RegExp("pattern", "flags")

    // g - global, match more than one occurance
    // i - case insensitive match, case doesn't matter, it can match upper case or lower case
    // m -multi-line match, we look at beginning and ending characters
    const regex1 = /s\s/;
    const regex2 = /s\s/g;
    const regex3 = /s\s/gi;
    const text = 'Programming courses alwayS starts with a hello world example.';
    console.log(text.match(regex1)); // find s and next to it a blank space - 1 for this case
    console.log(text.match(regex2)); // find all s and next to it a blank space - 2 for this case
    console.log(text.match(regex3)); // find all s and next to it a blank space, it doesn't matter if the letter is upper case or lower case - 3 for this case



}