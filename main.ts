input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(randint(10, 30) * 50 + 600, music.beat(BeatFraction.Quarter))
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(randint(0, 20) * 10 + 200, music.beat(BeatFraction.Quarter))
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
