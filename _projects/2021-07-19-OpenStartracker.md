---
title: 'OpenStartracker'
date: 2021-07-19 00:00:00
description: I developed an open-source 3D-printed star tracker with a motorized equatorial mount for full automatic latitude calibration, polaris alignment, & object tracking via onboard computer vision.
featured_image: '/images/OpenStartracker/anim_startracker.gif'
---

<div class="centered">
	<img class="disp" src="/images/OpenStartracker/anim_startracker.gif">
</div>

This is currently a work-in-progress project.

## Presentation
I'm currently working on creating and editing a video on youtube outlining my design, development, and programming process for this entire project. Once it is done, I will link it here.

## What is this?

I created OpenStartracker in an effort to provide a lower-cost, open-source, machine-learning compatible solution to long-exposure astrophotography.

## How does it work?

Typically, long-exposure astrophotography solutions for DSLR camera (sold for >$300) work by rotating at exactly the speed of the earth's rotation about the polar axis. This video explains the math behind this rotation very intuitively. However, in order for this rotation to properly compensate for earth's rotation, it has to first be aligned with the polar axis (about polaris), which is based on your latitude.

This latitude alignment is usually manually done via an equatorial mount, which just points the rotating base up at the north star. Given that latitude can be easily derived from gps location, I wanted to motorize + automate this latitude alignment as well using an iOS application + IMU sensor embedded in the design.

## Current Status

I am currently done with the mechanical design of the upper stage of the startracker, which is responsible for matching the speed of the earth's rotation to keep the stars in focus.

However, the lower stage of the startracker -- responsible for the automatic latitude adjustment -- has yet to be implemented (as well as the accompanying embedded IMU in the upper stage).

With regards to electronics, they have all been tested and have been validated to work.

With regards to software, the low-level motor control has already been implemented, but the iOS app interface has yet to be implemented.

To conclude:

- [x] Upper Stage Mechanical Design
- [ ] Lower Stage Mechanical Design
- [x] Electronics planning
- [ ] Low-Level Motor Control Code
- [ ] High-Level iOS application + bluetooth interface
- [ ] DSLR interface API


## Mechanical Design
You can get access to the open-source mechanical design [via OnShape](https://cad.onshape.com/documents/eb5985eb85492b87b2d7116d/w/8a4f6561f5f12bc6eb17cdf7/e/3c6ea5c35ddcd26be48681a4), which I designed this project on.
