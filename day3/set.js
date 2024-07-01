
//set은 중복 먹음?
const userIds = [1,2,1,3,5,4,8,7,6,1,2]
const uniqueIds = new Set(userIds);
console.log(uniqueIds);


uniqueIds.add(10)    //추가할떄는 add
console.log ("add 10", uniqueIds);


console.log('has', uniqueIds.has(3));

console.log('size', uniqueIds.size);

for (let item of uniqueIds) {
    console.log('iterate', item);
}