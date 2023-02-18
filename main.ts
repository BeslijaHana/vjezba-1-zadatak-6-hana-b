let temp1 = 0
radio.onReceivedNumber(function (receivedNumber) {
    temp1 = input.temperature()
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    temp1 = input.temperature()
    radio.setGroup(105)
    radio.sendNumber(input.temperature())
})
