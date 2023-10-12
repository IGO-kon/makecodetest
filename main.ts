info.onScore(10, function () {
    scene.setBackgroundImage(assets.image`autumn`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`myImage`)
})
