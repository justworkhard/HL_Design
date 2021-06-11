const ee = eval
const d = 4

function test() {
    const a = 1
    const b = 2
    return function () {
        const c = 3
        ee('console.log(d)')
        
    }
}
test()()