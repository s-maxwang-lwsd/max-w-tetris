@namespace
class SpriteKind:
    Stack = SpriteKind.create()

def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

stackTiles: Sprite = None
scene.set_background_image(assets.image("""
    backdrop
"""))
tetriminoDirection = "U"
stackLocationsY: List[number] = []
stackLocationsY = []
# Render the tiles

def on_on_update():
    global stackTiles
    for index in range(200):
        stackTiles.destroy()
    stackTiles = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.Stack)
game.on_update(on_on_update)

def on_update_interval():
    pass
game.on_update_interval(300, on_update_interval)
