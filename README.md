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


* Anchoring Metacharacters
^ Anchors the match to he start of the line
$ Anchors the match to the end of the line
Note: multiline mode and global mode affect these metacharacters
with both the regex will search at the beginning of each line (^) and at the end of each line ($) 
\b word boundary - pattern bounded by a non-word character (\bplan\b will match exactly the words equals to plans not that contains plans)
\B Nonword boundary - Pattern bounded by a word character (\Bplan\B will match the words that contain plan between letters)

* Alternates and Groups
| Pipes, work as or, ex: \b(monday|tuesday|wednesday|thursda|friday|saturday|sunday)\b/ig
?: Non-capturing group
\2 (repeat the second capturing group)

* Lookaheadgropus
it uses the lookhaad part to match the patter but it doesn't return that part
?= positive lookahead
?! negative lookahead

* Unicode characters
\ucode ex: \0065