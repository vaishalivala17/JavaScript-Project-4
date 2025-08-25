// 1. Greeting message function
function greet(name) {
    if (name) {
        console.log("Good Morning, " + name + "!");
    } else {
        console.log("Good Morning!");
    }
}
greet(); 
greet("Vaishali");

// 2. Find Circle area
function circleArea(r) {
    const PI = 3.14;
    return PI * r * r;
}
console.log("Circle Area:", circleArea(5));

// 3. Find Triangle area
function triangleArea(l, h) {
    return (l * h) / 2;
}
console.log("Triangle Area:", triangleArea(10, 5));

// 4. Find Rectangle area
function rectangleArea(l, h) {
    return l * h;
}
console.log("Rectangle Area:", rectangleArea(8, 4));

// 5. Question-1 ((b*b)(4*a*c))/(2*a)
function que1(a, b, c) {
    return ((b * b) - (4 * a * c)) / (2 * a);
}
console.log("Expression 1:", que1(1, 5, 6));

// 6. Question-2 (a*a) + (2*a*b) + (b*b) (return type with argument)
function que2(a, b) {
    return (a * a) + (2 * a * b) + (b * b);
}
console.log("Expression 2:", que2(3, 4));

// 7. Convert Fahrenheit to Celsius (return type with argument)
function fahrenheitToCelsius(f) {
    return (f - 32) / 1.8;
}
console.log("F to C:", fahrenheitToCelsius(100));

// 8. Convert Celsius to Fahrenheit (return type with argument)
function celsiusToFahrenheit(c) {
    return (c * 1.8) + 32;
}
console.log("C to F:", celsiusToFahrenheit(37));

// 9. Check if number is odd/even (no return type, with argument)
function checkOddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}
checkOddEven(10);
checkOddEven(7);

// 10. Swap values without third variable (no return type, with arguments)
function swapValues(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
    a = a + b; // 5 + 10 = 15
    b = a - b; // 15 - 10 = 5
    a = a - b; // 15 - 5 = 10 
    console.log("After Swap: a =", a, ", b =", b);
}
swapValues(5, 10);
