---
id: 6
title: 'Dynamic Gradient Descent'
date: 2020-04-03 00:00:00
description: I implemented my own dynamic gradient descent algorithm with varying step size & hyper-parameterized sample momentum.
featured_image: '/images/gradient_descent.mp4'
---

#### Introduction

In order to better understand the gradient descent algorithm and its flaws, I decided to try and implement it from scratch using python and matplotlib (to visualize). After implementing the vanilla gradient descent algorithm, I started to add hyperparameters such as dynamic step size proportional to the gradient & a momentum that would allow the scanning point to overcome local maximas to possibly find a greater (magnitude) absolute maxima.

You can find the source code [on my github.](https://github.com/adham-elarabawy/Playground/blob/master/py/common/math/dyn_gradient_descent.py)
<div class="centered">
	<img class="disp" src="/images/gradient_descent.gif">
</div>
