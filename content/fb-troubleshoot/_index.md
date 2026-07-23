---
title: "FBUpdater Troubleshooting"
weight: 110
sidebar:
  exclude: true
---

If you're having trouble with updating the firmware on your fightboard, here are some troubleshooting steps you can try to get it working.

## Unplug console adapter

If you have an adapter plugged in, remove it. You need the Fightboard to be plugged directly into the computer.

## Verify functionality

Go to a site like [gamepadviewer](https://gamepadviewer.com/?p=1&s=5) to verify that the Fightboard is actually functional. If not, try a different USB cable.

## Verify bootloader mode

You need to double-press the reset button and can verify that the Fightboard is in bootloader mode by the pulsing red LED. This can be hard to see on a black model, but you should still be able to see the faint glow through the reset hole.

## Run script while in bootloader mode

The Fightboard will only stay in bootloader mode for around 8 seconds, so you should run the script as soon as possible after entering bootloader mode.

## Reboot your computer

Sometimes you can have issues with your USB ports that cause problems, so try rebooting if everything seems right and it's still not working.

## Try a different USB port (especially if using a hub)

USB hubs can cause USB issues as unpowered hubs split the current of the USB port between multiple devices. Plug directly into a USB port on the machine and try a port on the other side if you're using a laptop.
