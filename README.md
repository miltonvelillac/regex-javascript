# regex-javascript

There are two ways to create reguar expresions
1. using the constructor, i.e. const regex1 = new RegExp('expresion here');
2. using the literal expresion, i.e. const regex2 = /expresion here/;


* Character Set Shorthand
\d [0-9]  Number characters
\w [a-zA-Z0-9_]  word characters
\s [ \t\r\n] The white space
\D [^0-9] Numbers Negation
\W [^a-zA-Z0-9_]  word characters Negation
\S [^ \t\r\n] The white space Negation

* Indicating Character Repitition
1. + Matches one or more occurrences
2. ? Matches zero or one occurrences
3. * Mtches zero or more occurences

* Specifying Repetition Amount
{min, max} Matches min to max occurrences
{min} Matches min occurrences
{min,} Matches min or mor occurrences