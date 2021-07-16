namespace SpriteKind {
    export const Edges = SpriteKind.create()
}
/**
 * To do:
 * 
 * - add wall kicks, SRS stuff, rotation checks
 * 
 * - add line clearing
 * 
 * - maaaybe add ghost blocks
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    hardDrop = 0
    while (!(hardDrop)) {
        tetrimino_fallconvert()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tetriminoDirection += -1
    if (tetriminoDirection == 0) {
        tetriminoDirection = 4
    }
    render_tetrimino()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tetriminoDirection += 1
    if (tetriminoDirection == 5) {
        tetriminoDirection = 1
    }
    render_tetrimino()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tetrimino.x += -6
    if (tetrimino.overlapsWith(edges)) {
        tetrimino.x += 6
    }
    for (let index = 0; index <= stackLocationsX.length - 1; index++) {
        overlapCheck.setPosition(stackLocationsX[index] * 6 + 47, stackLocationsY[index] * 6 - 3)
        if (overlapCheck.overlapsWith(tetrimino)) {
            tetrimino.x += 6
            break;
        }
    }
})
function render_tetrimino () {
    if (tetriminoType == "I") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`I-Up`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`I-Right`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`I-Down`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`I-Left`)
        }
    } else if (tetriminoType == "O") {
        tetrimino.setImage(assets.image`O`)
    } else if (tetriminoType == "T") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`T-Up`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`T-Right`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`T-Down`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`T-Left`)
        }
    } else if (tetriminoType == "S") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`S-Up`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`S-Right`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`S-Down`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`S-Left`)
        }
    } else if (tetriminoType == "Z") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`Z-Up`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`Z-Right`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`Z-Down`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`Z-Left`)
        }
    } else if (tetriminoType == "J") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`J-Up`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`J-Right`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`J-Down`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`J-Left`)
        }
    } else if (tetriminoType == "L") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`L-Up`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`L-Right`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`L-Down`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`L-Left`)
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tetrimino.x += 6
    if (tetrimino.overlapsWith(edges)) {
        tetrimino.x += -6
    }
    for (let index = 0; index <= stackLocationsX.length - 1; index++) {
        overlapCheck.setPosition(stackLocationsX[index] * 6 + 47, stackLocationsY[index] * 6 - 3)
        if (overlapCheck.overlapsWith(tetrimino)) {
            tetrimino.x += -6
            break;
        }
    }
})
function generate_new_tetrimino () {
    if (bag.length == 0) {
        bag = [
        "I",
        "O",
        "T",
        "S",
        "Z",
        "J",
        "L"
        ]
    }
    tetriminoDirection = 1
    bagRandom = bag.removeAt(randint(0, bag.length - 1))
    tetriminoType = bagRandom
    render_tetrimino()
    if (tetriminoType == "I") {
        tetrimino.y = 0
        tetrimino.x = 80
    } else if (tetriminoType == "O") {
        tetrimino.y = 0
        tetrimino.x = 80
    } else {
        tetrimino.y = 3
        tetrimino.x = 77
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Oh dang, you weren't supposed to click that!")
    game.splash("But now that you have, I guess there's nothing I can do about it...")
})
function tetrimino_fallconvert () {
    tetrimino.y += 6
    if (tetrimino.overlapsWith(edges)) {
        tetrimino.y += -6
        tetriminoConvert = 1
    }
    for (let index = 0; index <= stackLocationsX.length - 1; index++) {
        overlapCheck.setPosition(stackLocationsX[index] * 6 + 47, stackLocationsY[index] * 6 - 3)
        if (overlapCheck.overlapsWith(tetrimino)) {
            tetrimino.y += -6
            tetriminoConvert = 1
            break;
        }
    }
    if (tetriminoConvert) {
        overlapCheck.y = 3
        overlapCheckColumn = 1
        for (let index = 0; index < 20; index++) {
            overlapCheck.x = 47
            overlapCheckRow = 0
            for (let index = 0; index < 10; index++) {
                overlapCheck.x += 6
                overlapCheckRow += 1
                if (overlapCheck.overlapsWith(tetrimino)) {
                    stackLocationsX.push(overlapCheckRow)
                    stackLocationsY.push(overlapCheckColumn)
                    stackLocationsColor.push(tetriminoType)
                }
            }
            overlapCheck.y += 6
            overlapCheckColumn += 1
        }
        tetriminoConvert = 0
        generate_new_tetrimino()
        hardDrop = 1
    }
}
let overlapCheckRow = 0
let overlapCheckColumn = 0
let tetriminoConvert = 0
let bagRandom = ""
let tetriminoType = ""
let tetriminoDirection = 0
let hardDrop = 0
let tetrimino: Sprite = null
let bag: string[] = []
let overlapCheck: Sprite = null
let stackLocationsColor: string[] = []
let stackLocationsY: number[] = []
let stackLocationsX: number[] = []
let edges: Sprite = null
let backdrop = assets.image`backdrop`
edges = sprites.create(assets.image`bottom`, SpriteKind.Edges)
edges.setFlag(SpriteFlag.Invisible, true)
stackLocationsX = []
stackLocationsY = []
stackLocationsColor = []
let stackTileColorOutline = 1
let stackTileColorFill = 15
overlapCheck = sprites.create(assets.image`overlapCheck`, SpriteKind.Player)
overlapCheck.setFlag(SpriteFlag.Invisible, true)
bag = []
tetrimino = sprites.create(assets.image`O`, SpriteKind.Player)
generate_new_tetrimino()
// Render the stack
game.onUpdate(function () {
    backdrop.fillRect(50, 0, 60, 120, 15)
    for (let index = 0; index <= stackLocationsX.length - 1; index++) {
        if (stackLocationsColor[index] == "I") {
            stackTileColorOutline = 6
            stackTileColorFill = 9
        } else if (stackLocationsColor[index] == "O") {
            stackTileColorOutline = 4
            stackTileColorFill = 5
        } else if (stackLocationsColor[index] == "T") {
            stackTileColorOutline = 12
            stackTileColorFill = 10
        } else if (stackLocationsColor[index] == "S") {
            stackTileColorOutline = 6
            stackTileColorFill = 7
        } else if (stackLocationsColor[index] == "Z") {
            stackTileColorOutline = 14
            stackTileColorFill = 2
        } else if (stackLocationsColor[index] == "J") {
            stackTileColorOutline = 12
            stackTileColorFill = 8
        } else if (stackLocationsColor[index] == "L") {
            stackTileColorOutline = 14
            stackTileColorFill = 4
        } else {
            // This is just here so I can see if there's an error in color
            stackTileColorOutline = 1
            stackTileColorFill = 15
        }
        backdrop.fillRect(stackLocationsX[index] * 6 + 44, stackLocationsY[index] * 6 - 6, 6, 6, stackTileColorFill)
        backdrop.drawRect(stackLocationsX[index] * 6 + 44, stackLocationsY[index] * 6 - 6, 6, 6, stackTileColorOutline)
    }
    scene.setBackgroundImage(backdrop)
})
game.onUpdateInterval(50, function () {
    if (controller.down.isPressed()) {
        tetrimino_fallconvert()
    }
})
game.onUpdateInterval(500, function () {
    if (!(controller.down.isPressed())) {
        tetrimino_fallconvert()
    }
})
