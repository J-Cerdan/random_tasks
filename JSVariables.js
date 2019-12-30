/*
    Working with variables
    importance: 2

        Declare two variables: admin and name.
        Assign the value "John" to name.
        Copy the value from name to admin.
        Show the value of admin using alert (must output “John”).
*/

let admin, name; 

name = "John";

admin = name;

alert(admin);

/*
    Giving the right name
    importance: 3

        Create a variable with the name of our planet. How would you name such a variable?
        Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

let ourPlanet =  "Earth";

let websiteVisitor = "James";

/*
    Uppercase const?
    importance: 4

    Examine the following code:

    const birthday = '18.04.1982';

    const age = someCode(birthday);

    Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

    Would it be right to use upper case for birthday? For age? Or even for both?

    const BIRTHDAY = '18.04.1982'; // make uppercase?

    const AGE = someCode(BIRTHDAY); // make uppercase?
*/

// Birthday should be uppercase as it is always constant and will never change, age should be lower case as it can change every year.