serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("x", input.compassHeading())
    serial.writeValue("i", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("o", input.temperature())
    basic.pause(100)
})
