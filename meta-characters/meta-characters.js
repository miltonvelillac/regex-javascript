function wildCharacter() {
    /**
     * the wild character is .
     * this is use when you want to check a especific pattern with anything between it
     * i.e. /h.t/g
     * /h.t/g.test('how it that so hot, h@t h t') -> it matches in 4 places 1. hat  2. hot  3. h@t  4. h t
     */
    const regex1 = /h.t/g;
    const text = 'how it that so hot, h@t h t';
    console.log('using test', regex1.exec(text));
    console.log('using test', regex1.exec(text));
    console.log('using test', regex1.exec(text));
    console.log('using test', regex1.exec(text));
    console.log('using test', regex1.exec(text)); // null
    // check: each time when the exec method runs, the regex continue after the last index when it matched
}
