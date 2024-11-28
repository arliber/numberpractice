input.onButtonPressed(Button.A, function () {
    currentNumber += 1
    if (currentNumber > 9) {
        basic.showIcon(IconNames.Sad)
        control.waitMicros(1000000)
        start()
    } else {
        showCurrentNumber(currentNumber)
    }
})
function showCurrentNumber (currentNumber: number) {
    // Limitation of microbit compiler..?
    if (currentNumber == 1) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (currentNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (currentNumber == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (currentNumber == 4) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . . .
            . . . . .
            . . . . .
            `)
    }
    if (currentNumber == 5) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # . .
            . . . . .
            . . . . .
            `)
    }
    if (currentNumber == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (currentNumber == 7) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # . . .
            . . . . .
            `)
    }
    if (currentNumber == 8) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # . .
            . . . . .
            `)
    }
    if (currentNumber == 9) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    if (currentNumber == randomNumber) {
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("C D E F G A B C5 ", 240), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Sad)
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 420), music.PlaybackMode.UntilDone)
    }
    control.waitMicros(1000000)
    start()
})
function start () {
    currentNumber = 0
    randomNumber = 0
    randomNumber = randint(1, 9)
    basic.showNumber(randomNumber)
}
let randomNumber = 0
let currentNumber = 0
led.setBrightness(100)
start()
