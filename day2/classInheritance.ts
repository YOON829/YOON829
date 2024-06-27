// class Vehicle {
//   constructor(private wheelCount: number) {}
//   showNumberOfWheels() {
//     console.log('moved ${this.wheelCount} miles');
//   }
// }
//
// class Motocycle extends Vehicle {
//   constructor() {
//     super(2);
//   }
//
//   updateWheelCount(newWheelCount: number){
//       this.wheelCount = newWheelCount;
//
//   }
// }
//
// class Automobile extends Vehicle {
//   constructor() {
//     super(4);
//   }
// }
//
// const motorCycle = new Motocycle();
// motorCycle.updateWheelCount(6);
// motorCycle.showNumberOfWheels();
// const automobile = new Automobile();
// automobile.showNumberOfWheels();






class Vehicle {
  constructor(protected wheelCount: number) {}

  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} wheels`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorcycle = new Motorcycle();
motorcycle.updateWheelCount(6);
motorcycle.showNumberOfWheels();

const automobile = new Automobile();
automobile.showNumberOfWheels();




