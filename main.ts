input.onButtonPressed(Button.A, function () {
    if (order == 1) {
        num1 += -1
        basic.showNumber(num1)
    } else if (order == 2) {
        num2 += -1
        basic.showNumber(num2)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (order == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        order = 2
        num2 += 0
        basic.showNumber(num2)
    } else if (order == 2) {
        basic.clearScreen()
        basic.showNumber(num12)
        order = 1
        num1 = 0
        num2 = 0
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (order == 1) {
        num1 += 1
        basic.showNumber(num1)
    } else if (order == 2) {
        num2 += 1
        basic.showNumber(num2)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (order == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        order = 2
        num2 = 0
        basic.showNumber(num2)
    } else if (order == 2) {
        basic.clearScreen()
        basic.showNumber(num122)
        order = 1
        num1 = 0
        num2 = 0
        basic.pause(5000)
        basic.clearScreen()
    }
})
let num122 = 0
let num12 = 0
let num2 = 0
let order = 0
let num1 = 0
num1 = 0
order = 1
basic.forever(function () {
    num12 = num1 + num2
    num122 = num1 - num2
})
