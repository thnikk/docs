---
title: "Fightboard v3"
weight: 2
---

![FBMX v3](images/fbmx-v3.jpeg)

The v3 version of the Fightboard adds a display and switches to new electronics and firmware.

## Features

### Ergonomic layout

![layout](images/layout-v3.svg)

The Fightboard uses a combination of an arrow/wasd cluster at a 20% angle and action buttons following the traditional arcade stick layout but with the spacing of keyboard keys.

### Hot-swap sockets

![hot-swap sockets](images/socket-v3.jpeg)

Unhappy with your switch choice? Want different zones with different types of switches? All you have to do is pull them out and swap them with whatever you prefer, no soldering required.

### RGB LEDs

The RGB LEDs indicate the function of each button. The default profile uses Xbox colors for the 4 face buttons.

### Idle mode

The LEDs and display will turn off after a minute of inactivity. Pressing any button will turn them back on.

### SOCD cleaning

There are three available SOCD modes:

- Neutral: Pressing opposite directions results in no input
- Up priority: Left + right will cancel out and up + down will be up
- Last input: Whatever key was hit last will have priority

## MX vs LP

There are two different versions of the LP for two different types of switches. The Fightboard MX uses Cherry MX compatible switches which gives it the advantage of broader compatibility since there are more MX switches and keycaps on the market. The Fightboard LP uses Kailh Choc switches, which allows it to be lower profile for improved ergonomics. There is still a selection available for Kailh Choc switches, so you can choose between clicky, tactile, and linear, but Kailh is the only company making these switches.

The sockets and switch depth of the two switch types are completely different, which is why there are two separate models.

## Firmware

Most Fightboards shipped with an older version of the firmware based on GP2040-CE. The latest firmware is compatible with the v3, so see the [Firmware page](/controllers/firmware/) for the newest firmware and details.

{{< callout type="warning" >}}
The information below applies to older versions of the firmware.
{{< /callout >}}


## Compatibility

The Fightboard is only compatible with PC and the Nintendo Switch out of the box, but can be made compatible with other consoles with the adapters listed below. If using one of these adapters, the Fightboard needs to be in XInput mode.

| System | Compatible | Link |
| --- | --- | --- |
| PC | Yes | No adapter needed |
| Switch | Yes | No adapter needed |
| Xbox One and Series X/S | Yes | [Brook Wingman XB2](https://www.amazon.com/Brook-Wingman-Converter-Controller-Adjustable/dp/B0BJ6M9JPD) |
| PS4 | Yes | [Brook Wingman PS4](https://www.amazon.com/Brook-Wingman-XE-Converter-Controller/dp/B0BV2FW229) |
| PS5 | Yes | [Brook Wingman FGC](https://www.brookaccessory.com/products/wingmanfgc/index.html) |
| Xbox 360 | No | Not compatible |

## Configuration

### Main settings

Holding down select and start will let you change the settings shown below:

![Main settings](images/fb-v3-settings-1.svg)

### SOCD settings

Holding down home and start will let you change the SOCD settings:

![SOCD settings](images/fb-v3-settings-2.svg)

### Input modes

Holding down one of the keys at boot will change the input mode. This setting is saved and will persist across reboots.

![Input settings](images/fb-v3-settings-3.svg)

For all configuration, please refer to the official [GP2040 documentation](https://gp2040.info/#/usage).
