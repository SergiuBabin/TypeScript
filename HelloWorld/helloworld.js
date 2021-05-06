var found = true;
var grade = 88.6;
var firstName = "Sergiu";
var lastName = 'Babin';
grade = 1000;
console.log(found);
console.log("The grade is " + grade);
for (var i = 0; i < 10; i++) {
    console.log("Hi " + firstName + " " + lastName);
}
var reviews = [1, 1.5, 25, -10];
reviews.push(25);
reviews.push(32123121);
reviews.pop();
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    sum += reviews[i];
}
console.log(sum);
