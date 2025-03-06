/* When to use JavaScript "const" ?
Always declare a variable with "const" when you know that the value should not be changed.

Use "const" when you declare:

A new Array
A new Object
A new Function
A new RegExp 


Constant Objects and Arrays
The keyword "const" is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object */


// using capitel letter for the hotcode

const USERNAME = "hello@gmail.com";
const PASSWORD = "123@123@One"

// Constant Arrays

// You can change the elements of a constant array:

Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign the array:

Example
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// Constant Objects

// You can change the properties of a constant object:

Example
// You can create a "const" object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign the object:

Example
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


/* Cannot be Reassigned

A variable defined with the "const" keyword cannot be reassigned: */

// Example

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
console.log('PI: ', PI);


/* Must be Assigned

JavaScript "const" variables must be assigned a value when they are declared */

// Correct

const Pi = 3.14159265359;


// Incorrect

// const He ;
// He = 3.14159265359;

// Meaning: Using a "const" variable before it is declared will result in a ReferenceError:

Example
alert (carName);
const carName = "Volvo";

// Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

Example
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const X = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const X = 2;   // Not allowed
}
// Reassigning an existing const variable, in the same scope, is not allowed:

Example
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
 // const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  //let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
// Redeclaring a variable with const, in another scope, or in another block, is allowed:

Example
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}


// COLORS
const WHITE_COLOR = "#FFFFFF";
const BLACK_COLOR = "#000000";
const RED_COLOR = "#FF0000";
const DARK_RED_COLOR = "#8B0000";
const LIGHT_RED_COLOR = "#FF6666";
const GREEN_COLOR = "#00FF00";
const DARK_GREEN_COLOR = "#006400";
const LIGHT_GREEN_COLOR = "#90EE90";
const BLUE_COLOR = "#0000FF";
const DARK_BLUE_COLOR = "#00008B";
const LIGHT_BLUE_COLOR = "#ADD8E6";
const SKY_BLUE_COLOR = "#87CEEB";
const DEEP_SKY_BLUE_COLOR = "#00BFFF";
const YELLOW_COLOR = "#FFFF00";
const LIGHT_YELLOW_COLOR = "#FFFFE0";
const DARK_YELLOW_COLOR = "#FFD700";
const ORANGE_COLOR = "#FFA500";
const DARK_ORANGE_COLOR = "#FF8C00";
const LIGHT_ORANGE_COLOR = "#FFDAB9";
const PURPLE_COLOR = "#800080";
const DARK_PURPLE_COLOR = "#4B0082";
const LIGHT_PURPLE_COLOR = "#D8BFD8";
const PINK_COLOR = "#FFC0CB";
const HOT_PINK_COLOR = "#FF69B4";
const DEEP_PINK_COLOR = "#FF1493";
const LIGHT_PINK_COLOR = "#FFB6C1";
const BROWN_COLOR = "#A52A2A";
const DARK_BROWN_COLOR = "#654321";
const LIGHT_BROWN_COLOR = "#DEB887";
const GRAY_COLOR = "#808080";
const LIGHT_GRAY_COLOR = "#D3D3D3";
const DARK_GRAY_COLOR = "#A9A9A9";
const SLATE_GRAY_COLOR = "#708090";
const DIM_GRAY_COLOR = "#696969";
const CYAN_COLOR = "#00FFFF";
const DARK_CYAN_COLOR = "#008B8B";
const LIGHT_CYAN_COLOR = "#E0FFFF";
const MAGENTA_COLOR = "#FF00FF";
const DARK_MAGENTA_COLOR = "#8B008B";
const LIGHT_MAGENTA_COLOR = "#FF77FF";
const LIME_COLOR = "#32CD32";
const DARK_LIME_COLOR = "#228B22";
const MAROON_COLOR = "#800000";
const NAVY_COLOR = "#000080";
const LIGHT_NAVY_COLOR = "#6A5ACD";
const OLIVE_COLOR = "#808000";
const DARK_OLIVE_COLOR = "#556B2F";
const LIGHT_OLIVE_COLOR = "#BDB76B";
const TEAL_COLOR = "#008080";
const LIGHT_TEAL_COLOR = "#20B2AA";
const TURQUOISE_COLOR = "#40E0D0";
const DARK_TURQUOISE_COLOR = "#00CED1";
const LIGHT_TURQUOISE_COLOR = "#AFEEEE";
const GOLD_COLOR = "#FFD700";
const SILVER_COLOR = "#C0C0C0";
const BRONZE_COLOR = "#CD7F32";
const PLUM_COLOR = "#DDA0DD";
const VIOLET_COLOR = "#EE82EE";
const INDIGO_COLOR = "#4B0082";
const PEACH_COLOR = "#FFE5B4";
const MINT_COLOR = "#98FF98";
const CORAL_COLOR = "#FF7F50";
const SALMON_COLOR = "#FA8072";
const LIGHT_CORAL_COLOR = "#F08080";
const SEA_GREEN_COLOR = "#2E8B57";
const MEDIUM_SEA_GREEN_COLOR = "#3CB371";
const FOREST_GREEN_COLOR = "#228B22";
const SPRING_GREEN_COLOR = "#00FF7F";
const AQUA_COLOR = "#00FFFF";
const IVORY_COLOR = "#FFFFF0";
const BEIGE_COLOR = "#F5F5DC";
const LAVENDER_COLOR = "#E6E6FA";
const SANDY_BROWN_COLOR = "#F4A460";
const CHOCOLATE_COLOR = "#D2691E";
const TOMATO_COLOR = "#FF6347";
const ORCHID_COLOR = "#DA70D6";
const KHAKI_COLOR = "#F0E68C";
const GOLDENROD_COLOR = "#DAA520";
const MIDNIGHT_BLUE_COLOR = "#191970";
const ROYAL_BLUE_COLOR = "#4169E1";
const POWDER_BLUE_COLOR = "#B0E0E6";
const AQUAMARINE_COLOR = "#7FFFD4";
const CRIMSON_COLOR = "#DC143C";
const FIREBRICK_COLOR = "#B22222";
const PERU_COLOR = "#CD853F";
const THISTLE_COLOR = "#D8BFD8";
const SEA_SHELL_COLOR = "#FFF5EE";
const LINEN_COLOR = "#FAF0E6";
const LEMON_CHIFFON_COLOR = "#FFFACD";
const FLORAL_WHITE_COLOR = "#FFFAF0";
const HONEYDEW_COLOR = "#F0FFF0";
const ALICE_BLUE_COLOR = "#F0F8FF";
const GHOST_WHITE_COLOR = "#F8F8FF";
const AZURE_COLOR = "#F0FFFF";
const SNOW_COLOR = "#FFFAFA";