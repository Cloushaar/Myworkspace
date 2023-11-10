type SuperPrint = {
    <T>(arr: T[]): T
}

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, true, false])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, "s", true])