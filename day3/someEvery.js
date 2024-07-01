const widgets = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'orange' },
    { id: 4, color: 'blue' },
]
/// some은 하나만 있어서 트루가 나오고
console.log('some are blue', widgets.some(item => {
    return item.color === 'blue';
}));

/// every는 모두다 충족해야 트루가 나옴
console.log('every one is blue', widgets.every(item => {
    return item.color === 'blue';
}));