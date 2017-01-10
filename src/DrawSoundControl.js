function drawSoundControl() {
    let soundImage = !soundEnabled ? sound_off : sound_on;
    context.fillStyle = "#fcfcfc";
    context.font = "25px Arial";

    soundImage.draw(context, 540, 20);
    context.restore();
}
