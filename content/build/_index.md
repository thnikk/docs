---
title: "Building Firmware from Source"
weight: 60
sidebar:
  exclude: true
---

## Command line

Building arduino firmware through the command line is super easy.

### Install PlatformIO

#### MacOS
For mac, you can use [Homebrew](https://brew.sh/) to easily install what you need.

```
brew install platformio git
```

#### Arch
```
sudo pacman -S platformio git
```

### Clone the repo

```
git clone https://github.com/thnikk/unified-2022
```

### Build the firmware

cd into the repo and you can build and upload the firmware with:

```
pio run -t upload -e 2k
```

Replace 2k with 4k or MegaTouch, depending on the model you have.
