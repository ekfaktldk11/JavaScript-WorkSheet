// The difference between call, apply, bind

/* (1). call */

const bruce = {
    name: 'Bruce'
};

const madeline = {
    name: 'Madeline'
};

function greet() {
    return `Hello, I'm ${this.name}`;
};

greet(); // 'Hello, I'm undeifned' - 'this' is not bound up anywhere
greet.call(bruce) // 'Hello, I'm Bruce' - 'this' is 'bruce'
greet.call(madeline) // 'Hello, I'm Madeline' - 'this' is madeline

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};
update.call(bruce, 1949, 'singer');
/*
    {
        name: 'Bruce',
        birthYear: 1949,
        occupation: 'singer'
    }
*/

/* (2). apply */

// except the way how can it handle the parameter,
// 'apply' is same to 'call'
// 'call' get the parameter directly same as original func,
// But 'apply' get the parameter by array instead

update.apply(bruce, [1995, 'actor']);

/*
    {
        name: 'Bruce',
        birthYear: 1995,
        occupation: 'actor'
    }
*/

/* (3). bind */

// When we use the 'bind',
// then we can change the value of the 'this' permanently

const updateBruce = update.bind(bruce);
// thus the 'this' of func 'update' is 'bruce'
updateBruce(1904, "actor");

/*
    {
        name: 'Bruce',
        birthYear: 1904,
        occupation: 'actor'
    }
*/

updateBruce.call(madeline, 1274, "king");

/*
    {
        name: 'Bruce',
        birthYear: 1274,
        occupation: 'king'
    }
*/
// madeline has not changed

//ref https://ibrahimovic.tistory.com/29 [Web Standard]