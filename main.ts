input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 15; index++) {
        music.playTone(randint(0, 20) * 50 + 600, music.beat(BeatFraction.Eighth))
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 15; index++) {
        music.playTone(randint(0, 20) * 10 + 200, music.beat(BeatFraction.Eighth))
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
