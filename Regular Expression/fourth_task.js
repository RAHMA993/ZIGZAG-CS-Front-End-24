//https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/


let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
https? => 'http' or 'https', where 's' is optional
:\/\/ => matches (://)
(?:[-\w]+\.)? =>   "?:          => non-capturing groud,Its value will not be saved in memory"
                    "[-\w]+"    => matches '-' or any word or number and '+' is for one or more than one and '\.' matches (.)
                    "?"         =>  "the bracket is optional"
([-\w]+)\.\w+  =>  one or more "word or number or '-'".one or more "word or number"
\/?.*   => matches zero slash or one or more
*/