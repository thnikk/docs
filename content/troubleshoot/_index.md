---
title: "Troubleshooting Guide"
weight: 30
---

This guide will walk you through steps to either get your keypad back up and running or properly diagnose the problem.

## Connection

### Keypad shows no sign of life (all LEDs off)

This is most likely caused by a bad USB cable or port, so try changing both. You should also make sure that the cable is fully pushed in on both ends.

### Keypad is receiving power and the LEDs react to button presses, but isn't functioning as a keyboard

This is most commonly caused by using either a damaged cable or one that only supports charging. Try a different cable.

### Keypad is receiving power but doesn't react to button presses

Check to see if a removable drive called "CIRCUITPY" is mounted when the keypad is plugged in. If so, try reflashing the firmware with the tool here:

[Unified Uploader](https://github.com/thnikk/unified-2022/releases/latest)

### LEDs are cycling quickly and there's no response to button presses

NZXT Cam causes serial devices to freak out and will lock up the keypad and prevent the firmware from being flashed. Please either close the software while using the keypad or I can send you a version of the firmware with the configurator disabled.

## Mechanical

### One of my switches isn't working consistently

Try swapping the switch with an adjacent key and see if the issue persists.

## Double-tapping

If you experience any double-tapping, you can try these methods to fix it.

### Disable mouse/stylus buttons

You may be hitting your mouse buttons or touching your stylus to your tablet, so make sure they are disabled in Osu! in settings (input>disable mouse buttons during gameplay).

### Increase the debounce interval

The keypad uses firmware debouncing to reduce noise on button press/release. You can try increasing this value (upwards to around 20) without any noticable change by using the configurator as described [here](/osu-keypads/osu/#configuration).

### Twist the pins

If the double-tapping is caused by looseness in the socket, this can be mitigated by adding a slight twist (not bend) to the pins of the switch, which will improve contact with the socket. You can twist the pin with tweezers or pliers.
