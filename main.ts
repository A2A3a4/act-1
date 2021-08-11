input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 100) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("B A G A F E A C5 ", 500)
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
    } else if (input.lightLevel() < 100) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("C5 A B G A F G E ", 303)
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 20) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("A F E F D G E F ", 500)
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
        }
    } else if (input.temperature() < 10) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("A F E F D G E F ", 303)
            basic.showIcon(IconNames.Happy)
            basic.clearScreen()
        }
    }
})
music.setVolume(64)
music.playMelody("E D E D E D E D ", 120)
