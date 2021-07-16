namespace SpriteKind {
    export const Edges = SpriteKind.create()
}
/**
 * To do:
 * 
 * - add wall kicks, SRS stuff, rotation checks
 * 
 * - maaaybe add ghost blocks
 * 
 * - if you have time, add scoring
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
    if (overlap_check()) {
        tetriminoRotationCheckX = tetrimino.x
        tetriminoRotationCheckY = tetrimino.y
        if (tetriminoType == "I") {
            if (tetriminoDirection == 1) {
                tetrimino.x += 12
            } else if (tetriminoDirection == 2) {
                tetrimino.x += 6
            } else if (tetriminoDirection == 3) {
                tetrimino.x += -12
            } else if (tetriminoDirection == 4) {
                tetrimino.x += -6
            }
            if (overlap_check()) {
                tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                if (tetriminoDirection == 1) {
                    tetrimino.x += -6
                } else if (tetriminoDirection == 2) {
                    tetrimino.x += -12
                } else if (tetriminoDirection == 3) {
                    tetrimino.x += 6
                } else if (tetriminoDirection == 4) {
                    tetrimino.x += 12
                }
                if (overlap_check()) {
                    tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                    if (tetriminoDirection == 1) {
                        tetrimino.x += 12
                        tetrimino.y += -6
                    } else if (tetriminoDirection == 2) {
                        tetrimino.x += 6
                        tetrimino.y += 12
                    } else if (tetriminoDirection == 3) {
                        tetrimino.x += -12
                        tetrimino.y += 6
                    } else if (tetriminoDirection == 4) {
                        tetrimino.x += -6
                        tetrimino.y += -12
                    }
                    if (overlap_check()) {
                        tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        if (tetriminoDirection == 1) {
                            tetrimino.x += -6
                            tetrimino.y += 12
                        } else if (tetriminoDirection == 2) {
                            tetrimino.x += -12
                            tetrimino.y += -6
                        } else if (tetriminoDirection == 3) {
                            tetrimino.x += 6
                            tetrimino.y += -12
                        } else if (tetriminoDirection == 4) {
                            tetrimino.x += 12
                            tetrimino.y += 6
                        }
                        if (overlap_check()) {
                            tetriminoDirection += -1
                            if (tetriminoDirection == 0) {
                                tetriminoDirection = 4
                            }
                            render_tetrimino()
                            tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        }
                    }
                }
            }
        } else {
            if (tetriminoDirection == 1 || tetriminoDirection == 4) {
                tetrimino.x += 6
            } else if (tetriminoDirection == 2 || tetriminoDirection == 3) {
                tetrimino.x += -6
            }
            if (overlap_check()) {
                tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                if (tetriminoDirection == 1) {
                    tetrimino.x += 6
                    tetrimino.y += 6
                } else if (tetriminoDirection == 2) {
                    tetrimino.x += -6
                    tetrimino.y += -6
                } else if (tetriminoDirection == 3) {
                    tetrimino.x += -6
                    tetrimino.y += 6
                } else if (tetriminoDirection == 4) {
                    tetrimino.x += 6
                    tetrimino.y += -6
                }
                if (overlap_check()) {
                    tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                    if (tetriminoDirection == 1 || tetriminoDirection == 3) {
                        tetrimino.y += 12
                    } else if (tetriminoDirection == 2 || tetriminoDirection == 4) {
                        tetrimino.y += -12
                    }
                    if (overlap_check()) {
                        tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        if (tetriminoDirection == 1) {
                            tetrimino.x += 6
                            tetrimino.y += -12
                        } else if (tetriminoDirection == 2) {
                            tetrimino.x += -6
                            tetrimino.y += 12
                        } else if (tetriminoDirection == 3) {
                            tetrimino.x += -6
                            tetrimino.y += -12
                        } else if (tetriminoDirection == 4) {
                            tetrimino.x += 6
                            tetrimino.y += 12
                        }
                        if (overlap_check()) {
                            tetriminoDirection += -1
                            if (tetriminoDirection == 0) {
                                tetriminoDirection = 4
                            }
                            render_tetrimino()
                            tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        }
                    }
                }
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tetriminoDirection += 1
    if (tetriminoDirection == 5) {
        tetriminoDirection = 1
    }
    render_tetrimino()
    if (overlap_check()) {
        tetriminoRotationCheckX = tetrimino.x
        tetriminoRotationCheckY = tetrimino.y
        if (tetriminoType == "I") {
            if (tetriminoDirection == 1) {
                tetrimino.x += 6
            } else if (tetriminoDirection == 2) {
                tetrimino.x += -12
            } else if (tetriminoDirection == 3) {
                tetrimino.x += -6
            } else if (tetriminoDirection == 4) {
                tetrimino.x += 12
            }
            if (overlap_check()) {
                tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                if (tetriminoDirection == 1) {
                    tetrimino.x += -12
                } else if (tetriminoDirection == 2) {
                    tetrimino.x += 6
                } else if (tetriminoDirection == 3) {
                    tetrimino.x += 12
                } else if (tetriminoDirection == 4) {
                    tetrimino.x += -6
                }
                if (overlap_check()) {
                    tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                    if (tetriminoDirection == 1) {
                        tetrimino.x += 6
                        tetrimino.y += 12
                    } else if (tetriminoDirection == 2) {
                        tetrimino.x += -12
                        tetrimino.y += 6
                    } else if (tetriminoDirection == 3) {
                        tetrimino.x += -6
                        tetrimino.y += -12
                    } else if (tetriminoDirection == 4) {
                        tetrimino.x += 12
                        tetrimino.y += -6
                    }
                    if (overlap_check()) {
                        tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        if (tetriminoDirection == 1) {
                            tetrimino.x += -12
                            tetrimino.y += -6
                        } else if (tetriminoDirection == 2) {
                            tetrimino.x += 6
                            tetrimino.y += -12
                        } else if (tetriminoDirection == 3) {
                            tetrimino.x += 12
                            tetrimino.y += 6
                        } else if (tetriminoDirection == 4) {
                            tetrimino.x += -6
                            tetrimino.y += 12
                        }
                        if (overlap_check()) {
                            tetriminoDirection += -1
                            if (tetriminoDirection == 0) {
                                tetriminoDirection = 4
                            }
                            render_tetrimino()
                            tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        }
                    }
                }
            }
        } else {
            if (tetriminoDirection == 1 || tetriminoDirection == 2) {
                tetrimino.x += -6
            } else if (tetriminoDirection == 3 || tetriminoDirection == 4) {
                tetrimino.x += 6
            }
            if (overlap_check()) {
                tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                if (tetriminoDirection == 1) {
                    tetrimino.x += -6
                    tetrimino.y += 6
                } else if (tetriminoDirection == 2) {
                    tetrimino.x += -6
                    tetrimino.y += -6
                } else if (tetriminoDirection == 3) {
                    tetrimino.x += 6
                    tetrimino.y += 6
                } else if (tetriminoDirection == 4) {
                    tetrimino.x += 6
                    tetrimino.y += -6
                }
                if (overlap_check()) {
                    tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                    if (tetriminoDirection == 1 || tetriminoDirection == 3) {
                        tetrimino.y += -12
                    } else if (tetriminoDirection == 2 || tetriminoDirection == 4) {
                        tetrimino.y += 12
                    }
                    if (overlap_check()) {
                        tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        if (tetriminoDirection == 1) {
                            tetrimino.x += -6
                            tetrimino.y += -12
                        } else if (tetriminoDirection == 2) {
                            tetrimino.x += -6
                            tetrimino.y += 12
                        } else if (tetriminoDirection == 3) {
                            tetrimino.x += 6
                            tetrimino.y += -12
                        } else if (tetriminoDirection == 4) {
                            tetrimino.x += 6
                            tetrimino.y += 12
                        }
                        if (overlap_check()) {
                            tetriminoDirection += -1
                            if (tetriminoDirection == 0) {
                                tetriminoDirection = 4
                            }
                            render_tetrimino()
                            tetrimino.setPosition(tetriminoRotationCheckX, tetriminoRotationCheckY)
                        }
                    }
                }
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tetrimino.x += -6
    if (overlap_check()) {
        tetrimino.x += 6
    }
})
function render_tetrimino () {
    if (tetriminoType == "I") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`I-Up`)
            tetriminoGhost.setImage(assets.image`I-Up-Ghost`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`I-Right`)
            tetriminoGhost.setImage(assets.image`I-Right-Ghost`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`I-Down`)
            tetriminoGhost.setImage(assets.image`I-Down-Ghost`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`I-Left`)
            tetriminoGhost.setImage(assets.image`I-Left-Ghost`)
        }
    } else if (tetriminoType == "O") {
        tetrimino.setImage(assets.image`O`)
        tetriminoGhost.setImage(assets.image`O-Ghost`)
    } else if (tetriminoType == "T") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`T-Up`)
            tetriminoGhost.setImage(assets.image`T-Up-Ghost`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`T-Right`)
            tetriminoGhost.setImage(assets.image`T-Right-Ghost`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`T-Down`)
            tetriminoGhost.setImage(assets.image`T-Down-Ghost`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`T-Left`)
            tetriminoGhost.setImage(assets.image`T-Left-Ghost`)
        }
    } else if (tetriminoType == "S") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`S-Up`)
            tetriminoGhost.setImage(assets.image`S-Up-Ghost`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`S-Right`)
            tetriminoGhost.setImage(assets.image`S-Right-Ghost`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`S-Down`)
            tetriminoGhost.setImage(assets.image`S-Down-Ghost`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`S-Left`)
            tetriminoGhost.setImage(assets.image`S-Left-Ghost`)
        }
    } else if (tetriminoType == "Z") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`Z-Up`)
            tetriminoGhost.setImage(assets.image`Z-Up-Ghost`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`Z-Right`)
            tetriminoGhost.setImage(assets.image`Z-Right-Ghost`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`Z-Down`)
            tetriminoGhost.setImage(assets.image`Z-Down-Ghost`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`Z-Left`)
            tetriminoGhost.setImage(assets.image`Z-Left-Ghost`)
        }
    } else if (tetriminoType == "J") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`J-Up`)
            tetriminoGhost.setImage(assets.image`J-Up-Ghost`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`J-Right`)
            tetriminoGhost.setImage(assets.image`J-Right-Ghost`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`J-Down`)
            tetriminoGhost.setImage(assets.image`J-Down-Ghost`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`J-Left`)
            tetriminoGhost.setImage(assets.image`J-Left-Ghost`)
        }
    } else if (tetriminoType == "L") {
        if (tetriminoDirection == 1) {
            tetrimino.setImage(assets.image`L-Up`)
            tetriminoGhost.setImage(assets.image`L-Up-Ghost`)
        } else if (tetriminoDirection == 2) {
            tetrimino.setImage(assets.image`L-Right`)
            tetriminoGhost.setImage(assets.image`L-Right-Ghost`)
        } else if (tetriminoDirection == 3) {
            tetrimino.setImage(assets.image`L-Down`)
            tetriminoGhost.setImage(assets.image`L-Down-Ghost`)
        } else if (tetriminoDirection == 4) {
            tetrimino.setImage(assets.image`L-Left`)
            tetriminoGhost.setImage(assets.image`L-Left-Ghost`)
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tetrimino.x += 6
    if (overlap_check()) {
        tetrimino.x += -6
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
function overlap_check () {
    if (tetrimino.overlapsWith(edges)) {
        return 1
    }
    for (let index = 0; index <= stackLocationsX.length - 1; index++) {
        overlapCheck.setPosition(stackLocationsX[index] * 6 + 47, stackLocationsY[index] * 6 - 3)
        if (overlapCheck.overlapsWith(tetrimino)) {
            return 1
        }
    }
    return 0
}
function ghost_overlap_check () {
    if (tetriminoGhost.overlapsWith(edges)) {
        return 1
    }
    for (let index = 0; index <= stackLocationsX.length - 1; index++) {
        overlapCheck.setPosition(stackLocationsX[index] * 6 + 47, stackLocationsY[index] * 6 - 3)
        if (overlapCheck.overlapsWith(tetriminoGhost)) {
            return 1
        }
    }
    return 0
}
function tetrimino_fallconvert () {
    tetrimino.y += 6
    if (overlap_check()) {
        tetrimino.y += -6
        overlapCheck.setPosition(47, -3)
        for (let index2 = 0; index2 < 10; index2++) {
            overlapCheck.x += 6
            if (overlapCheck.overlapsWith(tetrimino)) {
                tetriminoOverlapCheck = 500
            }
        }
        if (tetriminoOverlapCheck == 500) {
            // This MAY be temporary, but maybe not.
            game.over(false)
        } else {
            overlapCheck.y = 3
            overlapCheckColumn = 1
            for (let index2 = 0; index2 < 20; index2++) {
                overlapCheck.x = 47
                overlapCheckRow = 0
                for (let index2 = 0; index2 < 10; index2++) {
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
            generate_new_tetrimino()
            hardDrop = 1
            music.pewPew.play()
        }
    }
}
let index = 0
let columnCheckConfirm: number[] = []
let columnCheck: number[] = []
let overlapCheckRow = 0
let overlapCheckColumn = 0
let tetriminoOverlapCheck = 0
let bagRandom = ""
let tetriminoType = ""
let tetriminoRotationCheckY = 0
let tetriminoRotationCheckX = 0
let tetriminoDirection = 0
let hardDrop = 0
let tetriminoGhost: Sprite = null
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
let stackTileColorOutline = 13
let stackTileColorFill = 1
overlapCheck = sprites.create(assets.image`overlapCheck`, SpriteKind.Player)
overlapCheck.setFlag(SpriteFlag.Invisible, true)
bag = []
tetrimino = sprites.create(assets.image`O`, SpriteKind.Player)
tetriminoGhost = sprites.create(assets.image`O-Ghost`, SpriteKind.Player)
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
            stackTileColorOutline = 13
            stackTileColorFill = 1
        }
        backdrop.fillRect(stackLocationsX[index] * 6 + 44, stackLocationsY[index] * 6 - 6, 6, 6, stackTileColorFill)
        backdrop.drawRect(stackLocationsX[index] * 6 + 44, stackLocationsY[index] * 6 - 6, 6, 6, stackTileColorOutline)
    }
    scene.setBackgroundImage(backdrop)
})
// This is the code that checks if a row should be removed, then remove that row.
game.onUpdate(function () {
    columnCheck = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    columnCheckConfirm = []
    for (let value of stackLocationsY) {
        columnCheck[value - 1] = columnCheck[value - 1] + 1
    }
    for (let index = 0; index <= 19; index++) {
        if (columnCheck[index] == 10) {
            columnCheckConfirm.push(index)
            music.smallCrash.play()
        }
    }
    for (let value of columnCheckConfirm) {
        for (let index2 = 0; index2 < 10; index2++) {
            stackLocationsX.removeAt(stackLocationsY.indexOf(value + 1))
            stackLocationsColor.removeAt(stackLocationsY.indexOf(value + 1))
            stackLocationsY.removeAt(stackLocationsY.indexOf(value + 1))
        }
        index = value
        for (let index2 = 0; index2 < value; index2++) {
            for (let index2 = 0; index2 < 10; index2++) {
                stackLocationsY[stackLocationsY.indexOf(index)] = index + 1
            }
            index += -1
        }
    }
})
game.onUpdate(function () {
    tetriminoGhost.setPosition(tetrimino.x, tetrimino.y)
    while (!(ghost_overlap_check())) {
        tetriminoGhost.y += 6
    }
    tetriminoGhost.y += -6
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
