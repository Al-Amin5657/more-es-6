const users = [{ id: 1, name: 'abul', job: 'doctor' }];
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' }
    ]
}
// console.log(data.data[1].name)
const user = {
    id: 5001,
    name: 'Thomus Alva Edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side',
        },
        postOffice: 'cantonment',
        city: 'dhaka'

    }
}

const userFloor = user.address.stree?.second; // ? if you do not get value no need to proceed.
console.log(userFloor);