namespace SpriteKind {
    export const secret = SpriteKind.create()
    export const Wall = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    if (stoneTriggered == 1) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Wall, function (sprite, otherSprite) {
    mySprite.y = 232
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.secret, function (sprite, otherSprite) {
    if (stoneTriggered == 0) {
        game.showLongText("You hear a grinding noise of stone on stone.", DialogLayout.Bottom)
        secretWall.destroy()
        stoneTriggered = 1
    }
})
let walkCounter = 0
let stoneTriggered = 0
let mySprite: Sprite = null
let secretWall: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001020202010303020302030103070809020302030203020201020302020a0b0c020203030202010202030302010d0e0f0301030303020203030203020302030319161916170303030302020302030202222223241803020103031b1616161702242324221f19162e2e16202222241f1622222225222222222222222322222222040422222223222425222422222523220405040424222222222204040422222204060404040404040404042704042524060604040504042929042905280404220405040404292929292929292929040429292929292929052929292929292929292929292929292929292929292929292a2a2a2a2a2a2a2a2a2a2d2a2a2a2a2a`,
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
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles16,sprites.builtin.forestTiles20,sprites.builtin.forestTiles21,sprites.castle.saplingPine,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorLight5,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairSouth,sprites.builtin.forestTiles24,sprites.dungeon.doorClosedSouth,sprites.dungeon.stairNorth],
            TileScale.Sixteen
        ))
secretWall = sprites.create(sprites.dungeon.greenOuterSouth1, SpriteKind.Wall)
let triggerStone = sprites.create(sprites.dungeon.floorDark3, SpriteKind.secret)
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
secretWall.setPosition(164, 248)
triggerStone.setPosition(8, 200)
let leftSprites = [img`
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
let rightSprites = [sprites.builtin.villager1WalkRight3, sprites.builtin.villager1WalkRight2, sprites.builtin.villager1WalkRight1]
let upSprites = [sprites.builtin.villager1WalkBack1, sprites.builtin.villager1WalkBack2, sprites.builtin.villager1WalkBack3]
let downSprites = [sprites.builtin.villager1WalkFront1, sprites.builtin.villager1WalkFront2, sprites.builtin.villager1WalkFront3]
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(230, 25)
controller.moveSprite(mySprite, 100, 100)
game.showLongText("Explore ruined Tamara to find your destiny. ", DialogLayout.Bottom)
forever(function () {
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
