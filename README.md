# image_carousel
This project is a simple image carousel built using React. It displays a set of images in a sliding manner, allowing users to navigate through the images using navigation arrows.

The Carousel project displays a collection of images in a slider format. Users can click on the left and right arrows to navigate between the images. The slider automatically loops back to the first image when the last image is reached and vice versa.

# Features
- Navigate through images using left and right arrows.
- Automatic loop back to the first image after reaching the last image.

# Technologies Used
- React (useState hook for state management)

# Usage
- The images are stored in an array named images.
The current index of the displayed image is managed using the useState hook.
- Clicking the left arrow (⬅) decrements the current index, and clicking the right arrow (⮕) increments the current index.
- When the last image is reached, clicking the right arrow loops back to the first image.
- When the first image is displayed, clicking the left arrow loops back to the last image.