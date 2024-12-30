# Expo CLI: Unhandled Promise Rejection with Native Modules

This repository demonstrates a common error in Expo projects involving unhandled promise rejections when working with native modules such as the Camera API or other similar features.

## Problem

When interacting with native functionalities in Expo, you might encounter an `Unhandled promise rejection` error.  This often happens due to:

* Missing permissions (e.g., camera, location)
* Incorrect module linking
* Environment inconsistencies
* Errors in native module handling

The error message itself is usually not specific, making debugging challenging.

## Solution

The `bugSolution.js` file provides a corrected implementation.  Key aspects to resolving this issue include:

* **Explicitly requesting permissions:** Use `requestCameraPermissionsAsync` (or equivalent for other native modules) to ensure permissions are granted.
* **Error handling:** Properly handle promise rejections within your asynchronous functions using `.catch()` to gracefully manage potential errors and prevent unhandled rejections.
* **Verify module installations:** Ensure that your native modules are properly installed and linked.  Run `expo prebuild` if necessary.
* **Check Expo SDK version and compatibility:** Make sure you are using a compatible version of the Expo SDK with your installed modules.

This example focuses on the Camera API, but the principles apply to other native module interactions in Expo.