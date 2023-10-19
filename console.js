y = 3 * x + 2

x = 43
// 43
x
// 43
y = 3 * x + 2
131
y
//131
c = 123
//123
f =12
//12
age = 23
//23
a = 23
//23
a = 23
//23
name = 'Alex'
// 'Alex'
name
// 'Alex'
a = 3
// 3
b = 4
// 4
c = a + B
// Тут B з велика літера, ми визначали змінну з маленької b тому отримаємо помилку що зменна B (велика B) не визначена
// VM38934:1 Uncaught ReferenceError: B is not defined
//     at <anonymous>:1:9
// (anonymous) @ VM38934:1
c = a + b
// 7
a = '3'
// '3'
b = '4'
// '4'
c = a + b
// '34'
'sas' + 'sdsad'+'2q3123'
// 'sassdsad2q3123'
f = true
// true
f = false
// false
age
// 23
age
// 23
age 
// 23
isAdult = age > 17
// true
age > 17
// true
isAdult = age > 17
// true
age = 13
// 13
isAdult
// true
isAdult = age > 17
// false
age = null
// null
age
// null
person1_name = 'Alex'
// 'Alex'
person1_age = 39
// 39
person2_name = 'Anna'
// 'Anna'
person2_age = 12
// 12
person1 = {'name':'Alex'}
// {name: 'Alex'}
person1
// {name: 'Alex'}name: "Alex"[[Prototype]]: Object
person1 = {'name':'Alex', 'age':39, 'email':'alex@gmail.com', 'adress': 'Kyiv, Shevshenka 12'}
// {name: 'Alex', age: 39, email: 'alex@gmail.com', adress: 'Kyiv, Shevshenka 12'}
//     adress: "Kyiv, Shevshenka 12"
//     age: 39
//     email: "alex@gmail.com"
//     name: "Alex"
//     [[Prototype]]: Object
person1
// {name: 'Alex', age: 39, email: 'alex@gmail.com', adress: 'Kyiv, Shevshenka 12'}
age = person1_age
// 39
age
// 39
age = person1.age;
// 39
person1.age  = 40;
// 40
person1
// {name: 'Alex', age: 40, email: 'alex@gmail.com', adress: 'Kyiv, Shevshenka 12'}
//     adress: "Kyiv, Shevshenka 12"
//     age: 40
//     email: "alex@gmail.com"
//     name: "Alex"
//     [[Prototype]]: Object
person1_address = {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}
// {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}
//     city: "Kyiv"
//     country_code: "UA"
//     street: "Shevchenka"
//     [[Prototype]]: Object
person1
// {name: 'Alex', age: 40, email: 'alex@gmail.com', adress: 'Kyiv, Shevshenka 12'}
person1.adress = person1_address;
// {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}
person1
// {name: 'Alex', age: 40, email: 'alex@gmail.com', adress: {…}}adress: {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}city: "Kyiv"country_code: "UA"street: "Shevchenka"[[Prototype]]: Objectage: 40email: "alex@gmail.com"name: "Alex"[[Prototype]]: Object
a =  '2112'
// '2112'
a = 123
// 123
a = {}
// {}
a = {}
// {}
//     [[Prototype]]: Object
a = {}
//{}
y = 3 * x + 2;
z = y * 8;
k = z /2
// 524
y
// 131
z
// 1048
k
// 524
x = 2;
// 2
y = 3 * x + 2;
z = y * 8;
k = z /2
// 32
function my_function(x) {
    y = 3 * x + 2;
    z = y * 8;
    
// VM40511:4 Uncaught SyntaxError: Unexpected end of input
function my_function(x) {
    y = 3 * x + 2;
    z = y * 8;
    
// VM40513:4 Uncaught SyntaxError: Unexpected end of input
function my_function(x) {
    y = 3 * x + 2;
    z = y * 8;
    k = z /2;
    return k;
}\
// VM40584:6 Uncaught SyntaxError: Invalid or unexpected token
function my_function(x) {
    y = 3 * x + 2;
    z = y * 8;
    k = z /2;
    return k;
}
// undefined
my_function
// ƒ my_function(x) {
//     y = 3 * x + 2;
//     z = y * 8;
//     k = z /2;
//     return k;
// }
my_function(2);
// 32
my_function(4);
// 56
my_function(656);
// 7880
function func2(obj) {
    obj.age = obj.age + 1;
    return obj;
}
// undefined
func2(person1)
// {name: 'Alex', age: 41, email: 'alex@gmail.com', adress: {…}}
//     adress: {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}
//     age: 41
//     email: "alex@gmail.com"
//     name: "Alex"
//     [[Prototype]]: Object
func2(person1)
// {name: 'Alex', age: 42, email: 'alex@gmail.com', adress: {…}}
//     adress: {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}
//     age: 42
//     email: "alex@gmail.com"
//     name: "Alex"
//     [[Prototype]]: Object
if (person1.name == 'Alex) {
// VM40892:1 Uncaught SyntaxError: Invalid or unexpected token
if (person1.name == 'Alex') {
    person1.email='alex@gmail.com'
} else {
    person1.email = 'unknown@gmail.com'
}
//'alex@gmail.com'
person1
// {name: 'Alex', age: 42, email: 'alex@gmail.com', adress: {…}}
person1.name = 'Anna';
'Anna'
if (person1.name == 'Alex') {
    person1.email='alex@gmail.com'
} else {
    person1.email = 'unknown@gmail.com'
}
// 'unknown@gmail.com'
person1
// {name: 'Anna', age: 42, email: 'unknown@gmail.com', adress: {…}}
//     adress: {country_code: 'UA', city: 'Kyiv', street: 'Shevchenka'}
//     age: 42
//     email: "unknown@gmail.com"
//     name: "Anna"
//     [[Prototype]]: Object