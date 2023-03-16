function 清空 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    me = 0
    _111 = 0
    _222 = 0
}
input.onButtonPressed(Button.A, function () {
    if (me == 0) {
        me = 1
        basic.showLeds(`
            # # # # #
            . . # . #
            . . # . #
            . # . . #
            # . . # #
            `)
        for (let index = 0; index < 4; index++) {
            radio.sendValue("b", 1)
        }
    }
})
function 比輸贏 () {
    if (me == _222 && me == _111) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 1 && _111 == 2 && _222 == 3) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 1 && _111 == 3 && _222 == 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 2 && _111 == 1 && _222 == 3) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 2 && _111 == 3 && _222 == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 3 && _111 == 1 && _222 == 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 3 && _111 == 2 && _222 == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 1 && _111 == 1 && _222 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 1 && _111 == 3 && _222 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 1 && _111 == 3 && _222 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 2 && _111 == 2 && _222 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 2 && _111 == 1 && _222 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 2 && _111 == 1 && _222 == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 3 && _111 == 2 && _222 == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 3 && _111 == 2 && _222 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 3 && _111 == 3 && _222 == 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (me == 0) {
        me = 1
        basic.showLeds(`
            # # # # #
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        for (let index = 0; index < 4; index++) {
            radio.sendValue("b", 3)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (me == 0) {
        me = 1
        basic.showLeds(`
            # # # # #
            . . # . .
            . # . # #
            # . # . #
            . . # # #
            `)
        for (let index = 0; index < 4; index++) {
            radio.sendValue("b", 2)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        _111 = value
    }
    if (name == "c") {
        _222 = value
    }
    basic.pause(1000)
    if (_111 != 0 && _222 != 0 && me != 0) {
        比輸贏()
        basic.pause(5000)
        清空()
    }
})
let me = 0
let _222 = 0
let _111 = 0
radio.setTransmitPower(7)
radio.setGroup(69)
清空()
