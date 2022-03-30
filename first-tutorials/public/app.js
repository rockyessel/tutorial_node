function Car(type, modal, year) {
  this.type = type;
  this.modal = modal;
  this.year = year;
}

const newCar = new Car('kia', 'eoin', 1999);
console.log(newCar);
