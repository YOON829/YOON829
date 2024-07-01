const allTrucks = [
    2,5,7,10
]

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {

    console.log ("totalCapacity:" + totalCapacity);
    console.log ("currentCapacity:" + currentCapacity);
    totalCapacity = totalCapacity + currentCapacity;

    return totalCapacity;
}, initialCapacity);

console.log(allTonnage);

//reduce는 여러개의 배열값을 하나의 값으로 내준다