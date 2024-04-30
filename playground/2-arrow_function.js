// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Oluwaseyi', 'Andrew', 'Bola'],
    printGuestList() { 
        console.log('Guest List for ' + this.name);
        this.guestList.forEach((element) => {
            console.log(element + ' is attending ' + this.name);
        });
    }

}

event.printGuestList();
