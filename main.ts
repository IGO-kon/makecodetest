info.onScore(10, function () {
    scene.setBackgroundImage(assets.image`autumn`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setScore(info.score() + 1)
})
