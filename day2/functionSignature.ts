type Run = (miles: number /*파라미터*/) => boolean/*아웃풋*/;

let runner: Run = function (miles: number): boolean {
    // if (miles > 10) {
    //     return true;
    // }
    // return false;

    if (miles > 10) {
        return true;
    } else {
        return false;
    }
};

console.log(runner(9));


