// 1. var, let, const
// break up with var
const numbers = [12, 233, 6, 78, 90]; // cannot reassign into the const.
let salary = 350;
salary = 400;

// 2. Default parameter
function calculateFunction(salary, tax, bonus) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// template string
const innerHTML = `
,div>
   <h2>name: </h2>
   <p>address </p>
   <p>salary: ${calculateFunction(10000, 0, 0)}</p>
   <p>others: ${numbers[2]}</p>
</div>

`
// arrow function
const doubleIt = x => x * 2;
const calculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread operator
const ages = [12, , 34, 23, 45, 56, 67];
const newAge = [...ages, 77, 66, 55];

// 6. destructuring
const { x, y, ...rest } = { x: 45, y: 12., z: 67, name: 'sakib al hasan', salary: 450000 };
const [a, b, ...c] = [12, 14, 25, 17, 22];