---
title: "Unbricking a 2022 Keypad"
weight: 90
sidebar:
  exclude: true
---

If you flash the wrong firmware (like using the old unified uploader) to a 2022 keypad, you will put it in an unusable, unflashable state. The keypad can still be recovered, but requires disassembly and shorting two pins on the microcontroller.

## Disassembly

### Remove the switches

The switches need to be removed before you do anything else. This is easy enough to do with your fingers, just pinch the tabs on the top and bottom of the switch and pull up. Try to pull straight up to avoid bending the pins of the switches.

![Switch removal](https://thnikk.moe/img/docs/unbrick/remove_switch.jpeg)

### Removing the bottom

Next you need to remove the bottom of the keypad. It just snaps in so you can use a tool or your finger nail and start from a corner and slide it down the top or bottom edge to unsnap it.

![Unsnap the bottom](https://thnikk.moe/img/docs/unbrick/unsnap.jpeg)

### Removing the PCB from the top case

The PCB levers in from the top side to fit the USB C port through the case. Push down through the top of the case on the bottom of the PCB and it should pop out.

![Remove the PCB](https://thnikk.moe/img/docs/unbrick/remove_pcb.jpeg)

## Download the firmware uploader

Download the firmware uploader from github [here](https://github.com/thnikk/unified-2022/releases/latest). Extract it and run upload.bat. Leave it open and don't select your model yet.

## Short the reset pins twice and run the uploader

Plug the PCB of the keypad in and short the two pins shown in the picture below twice. I use tweezers but you can get creative and use a paper clip or even a twist tie if that's all you have. You should see the red LED on the board start pulsing. This puts the board into bootloader mode so you can flash firmware. You can now enter the number for your model. If it's successful, you should see the RGB LEDs cycling through colors.

![Reset the board](https://thnikk.moe/img/docs/unbrick/reset.jpeg)

## Reassembly

Reassembly is mostly pretty straightforward, but there's one trick to getting it back together. You'll notice if you try to put the PCB back in the top case that it will get stuck on the tact switch (the black button.) All you need to do is use a tool to tilt it up towards the hole while you push it in as shown here:

![Tilt the tact switch](https://thnikk.moe/img/docs/unbrick/tact.jpeg)

The rest is just snapping the bottom back on and re-inserting the switches.
