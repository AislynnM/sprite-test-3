controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Mc)
    Mc.setImage(assets.image`MC`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mc,
    assets.animation`MC-Left animation`,
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mc,
    assets.animation`MC-Left animation`,
    300,
    true
    )
})
let Mc: Sprite = null
tiles.setCurrentTilemap(tilemap`Mushroom Isles0`)
Mc = sprites.create(assets.image`MC`, SpriteKind.Player)
controller.moveSprite(Mc)
scene.cameraFollowSprite(Mc)
music.play(music.createSong(assets.song`Theme  BG`), music.PlaybackMode.LoopingInBackground)
