


const filterItems = [
    {name: "jon", age:20},
    {name: "linda", age: 22},
    {name: "jon", age:40}
]

const results = filterItems.filter((item, index) => {
    console.log(index);
    return item.name === "jon"
    // == 비교구문 같은가? / === 값이 실제로 완전히 동일한가 ===이 ==보다 높음
});
console.log(results);

