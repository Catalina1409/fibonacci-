input.onButtonPressed(Button.A, function () {
    S = n1 + n2
    basic.clearScreen()
    basic.showNumber(S)
    n1 = n2
    n2 = S
})
input.onButtonPressed(Button.B, function () {
    S = n2 - n1
    basic.clearScreen()
    basic.showNumber(n1)
    n2 = n1
    n1 = S
})
let S = 0
let n2 = 0
let n1 = 0
n1 = 0
n2 = 1
basic.showNumber(S)
