basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 850) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showLeds(`
            # # . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
