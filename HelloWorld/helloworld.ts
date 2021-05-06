let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Sergiu"
let lastName: string = 'Babin'

grade = 1000;

console.log(found)
console.log("The grade is " + grade);

for (let i=0; i < 10; i++) {
     console.log(`Hi ${firstName} ${lastName}`);
}

let reviews: number[] = [1, 1.5, 25, -10];
reviews.push(25);
reviews.push(32123121);
reviews.pop();
let sum: number = 0;

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
    sum += reviews[i];
}

console.log(sum);