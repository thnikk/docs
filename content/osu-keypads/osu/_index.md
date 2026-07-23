---
title: "Osu! Keypads"
weight: 1
---

> If you purchased a keypad before 2022, please use the old docs here: [https://old.thnikk.moe](https://old.thnikk.moe)

![New models](https://pbs.twimg.com/media/FCMO5RDUUAEO_dF?format=jpg&name=large)

## LED modes

| Mode | Effect |
| --- | --- |
| Cycle | Fades through rainbow. |
| Reactive | Turns LEDs on when pressed and fades from red to green to blue to off when released. |
| Custom | LED color can be set per-key. |
| BPM | LEDs turn white when pressed and change color depending on how much you hit them per second when released. |

## Configuration

Unlike previous versions, all configuration of the keypad is done over a serial connection. This is flexible and lightweight, requiring the download of a single program that doesn't need to be installed. The configurator is built into the keypad itself, and we can use a program like Termite to communicate with the keypad. Please follow the instructions below for your platform.

### Windows

Download and extract Termite. You want to make sure you extract since you need to run it with the .ini file in the same directory.

[Download Termite](https://puu.sh/w8Zj5/01aa028013.zip)

Upon opening the program, it should immediately connect to the keypad. Follow the directions in the remapper and you're all set!

> If you have any problems, make sure your settings match these (except for the port since it may be different for you)
>
> If you don't see something like "Enter 'c' to start the configurator", try changing the port.

![Settings](https://puu.sh/C8hhI/6d005fdf84.png)

Make sure to close Termite when you're done, otherwise it may try to reconnect and lock up your keypad.

### Mac/Linux

The procedure for Mac and Linux is the same since we'll be using the screen command on both. Open a terminal and paste in this command to connect to the keypad.

```
screen $(ls -d /dev/* | grep "ACM\|usbmodem") 9600
```

Follow the directions given in the terminal to remap the keypad.

## Firmware

The latest firmware is available [here](https://github.com/thnikk/unified-2022/releases/latest). All keypads are shipped with the latest firmware, so if you purchased after the date of the last release, you don't need to update.

> Make sure to use the unified-2022 repository as linked above, NOT the original unified one. The original one is made for different boards and will soft-brick your keypad.
