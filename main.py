def on_on_score():
    scene.set_background_image(assets.image("""
        autumn
    """))
info.on_score(10, on_on_score)

def on_a_pressed():
    scene.set_background_image(assets.image("""
        myImage
    """))
    info.set_score(0 + 3 + 1)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)
