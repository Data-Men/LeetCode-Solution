function car(make, modal) {
    this.make = make;
    this.modal = modal;
}
const car1 = new car("Toyota", "corolla");
const car2 = new car("Honda", "civic");
console.log(car1.make)
console.log(car2.modal)

