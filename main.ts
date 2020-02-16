namespace SpriteKind {
    export const secret = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const Exit = SpriteKind.create()
    export const npc = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
function loadLevelThree () {
    game.over(true, effects.confetti)
}
function loadLevelTwo () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100038373737374737373737373942545454313f293f293f293f293f283a5254545431273f293f293f293f273f3a42545454303f293f2926293f293f29344137413931293f293f293f283f2926283d22223a313f29262953293f293f293f3d25233a31273f293f273f293f293f32363b363c313f293f293f293f2926293a4254545448293f283f293f293f293f3a54545454313f293f293f293f293f293a465454543536361e3f28323b493b363c42545454424642402e2e3a424246424242545454384141333e3e34374139515151545254314b4c4b4b4b4c4b4d3a515152545454484c4b3e4b4d4b3e4c4e525152525454353b493b3b3b3b493b3c515252545454`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 . . . . . . . . . . 2 . . . . 
2 2 2 2 . . 2 2 2 2 2 2 . . . . 
. . . 2 . . 2 . . . . . . . . . 
2 2 2 2 . . 2 2 2 2 . . . . . . 
2 . . . . . . . . 2 . . . . . . 
2 . . . . . . . . 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles16,sprites.builtin.forestTiles20,sprites.builtin.forestTiles21,sprites.castle.saplingPine,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorLight5,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairSouth,sprites.builtin.forestTiles24,sprites.dungeon.doorClosedSouth,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge,sprites.dungeon.doorOpenWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.stairEast,sprites.dungeon.floorMixed,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedWest,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast1,sprites.dungeon.floorLight4,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleSwitchUp,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundSouthWest1],
            TileScale.Sixteen
        ))
    oldGuy = sprites.create(sprites.castle.heroWalkFront3, SpriteKind.npc)
    oldGuy.setPosition(32, 216)
    stoneTriggered = 0
    mySprite.setPosition(16, 48)
    triggerStone = sprites.create(sprites.dungeon.floorDark3, SpriteKind.secret)
    triggerStone.setPosition(8, 200)
    currentLevel = 2
}
function loadLevelOne () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001020202010303020302030103070809020302030203020201020302020a0b0c020203030202010202030302010d0e0f0301030303020203030203020302030319161916170303030302020302030202222223241803020103031b1616161702242324221f19162e2e16202222241f1622222225222222222222222322222222040422222223222425222422222523220405040424222222222204040422222204060404040404040404042704042524060604040504042929042905280404220405040404292929292929292929040429292929292929052929292929292929292929292929292929272929292929292a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . 2 . . . . . 2 2 2 2 2 . 
. . . . 2 2 2 . . 2 2 . . . 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles16,sprites.builtin.forestTiles20,sprites.builtin.forestTiles21,sprites.castle.saplingPine,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorLight5,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairSouth,sprites.builtin.forestTiles24,sprites.dungeon.doorClosedSouth,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge],
            TileScale.Sixteen
        ))
    triggerStone = sprites.create(sprites.dungeon.floorDark3, SpriteKind.secret)
    mySprite = sprites.create(img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`, SpriteKind.Player)
    stoneTriggered = 0
    triggerStone.setPosition(8, 200)
    leftSprites = [img`
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f e 4 4 c c c f f f f . 
. f f e 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e e f . . . 
. . . f 3 3 3 e d d 4 . . . 
. . . f 3 3 3 e d d e . . . 
. . . f 6 6 6 f e e f . . . 
. . . . f f f f f f . . . . 
. . . . . . f f f . . . . . 
`, sprites.builtin.villager1WalkLeft2, sprites.builtin.villager1WalkLeft3]
    rightSprites = [sprites.builtin.villager1WalkRight3, sprites.builtin.villager1WalkRight2, sprites.builtin.villager1WalkRight1]
    upSprites = [sprites.builtin.villager1WalkBack1, sprites.builtin.villager1WalkBack2, sprites.builtin.villager1WalkBack3]
    downSprites = [sprites.builtin.villager1WalkFront1, sprites.builtin.villager1WalkFront2, sprites.builtin.villager1WalkFront3]
    mySprite.setPosition(232, 24)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 100)
    game.showLongText("Explore ruined Tamara to find your destiny. ", DialogLayout.Bottom)
    currentLevel = 1
}
function loadNextLevel () {
    if (currentLevel == 1) {
        loadLevelTwo()
    } else if (currentLevel == 2) {
        loadLevelThree()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.secret, function (sprite, otherSprite) {
    if (stoneTriggered == 0) {
        game.showLongText("You hear a grinding noise of stone on stone.", DialogLayout.Bottom)
        tiles.setWallAt(tiles.getTileLocation(9, 14), false)
        stoneTriggered = 1
        exitStairs = sprites.create(sprites.dungeon.stairLarge, SpriteKind.Exit)
        exitStairs.setPosition(152, 232)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Exit, function (sprite, otherSprite) {
    loadNextLevel()
})
let walkCounter = 0
let exitStairs: Sprite = null
let downSprites: Image[] = []
let upSprites: Image[] = []
let rightSprites: Image[] = []
let leftSprites: Image[] = []
let triggerStone: Sprite = null
let mySprite: Sprite = null
let stoneTriggered = 0
let oldGuy: Sprite = null
let currentLevel = 0
currentLevel = 0
loadLevelOne()
game.onUpdateInterval(100, function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(leftSprites[walkCounter])
    }
    if (mySprite.vx > 0) {
        mySprite.setImage(rightSprites[walkCounter])
    }
    if (mySprite.vy > 0) {
        mySprite.setImage(downSprites[walkCounter])
    }
    if (mySprite.vy < 0) {
        mySprite.setImage(upSprites[walkCounter])
    }
    walkCounter += 1
    if (walkCounter >= 2) {
        walkCounter = 0
    }
})
