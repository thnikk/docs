---
title: "Flashing Fightboard v3 Firmware"
weight: 100
sidebar:
  exclude: true
---

## Disassembly

First you can remove the bottom of the case. This clips on from the top and bottom, so you can remove it by sliding a thin tool or your nail down the seam.

![back](https://thnikk.moe/img/docs/fightboard/flash/back.jpeg)

Now you can remove the switches. These can be a bit more challenging. Each switch has small tabs at the top and bottom that clip into the housing. You can pinch these and the switch should come out. Sometimes the switches can be a bit more stubborn, in which case you can try pushing them out from the back.

![switch](https://thnikk.moe/img/docs/fightboard/flash/switch.jpeg)

You want to try to pull them out straight or you may bend the pins of the switches. They can be straightened, but it's nice to avoid. If you're having a lot of trouble (especially on a switch with another switch directly above or below), you can purposely tilt it up in the middle and lever it up from the other side while pressing in the clip.

![switch-back](https://thnikk.moe/img/docs/fightboard/flash/switch-back.jpeg)
![switch-tilt](https://thnikk.moe/img/docs/fightboard/flash/switch-tilt.jpeg)

After all the switches are out, you can lever out the board from the side with the buttons first.

![open](https://thnikk.moe/img/docs/fightboard/flash/open.jpeg)

## Flashing

Now that you have the PCB out of the case, you can flash the firmware. You can download the latest firmware from here: [link](https://thnikk.moe/files/APPLICATION.uf2)

Plug the board in, hold the boot button, and press the reset button (while boot is still held.) You should hear the device connection sound and see a removable drive called RPI-RP2 get mounted. To flash the firmware, you just need to copy the uf2 file to the drive. It will automatically flash and unmount itself and you should see the LEDs and display light up.

![flash](https://thnikk.moe/img/docs/fightboard/flash/flash.jpeg)

## Reassembly

After your board is flashed, you can re-assemble the Fightboard by doing everything in reverse. Make sure that when you're inserting the switches that the pins are straight and that you are pushing it in straight, otherwise you risk damaging the pins of the switch.
