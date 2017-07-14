# magnitude.js
Magnitude is a little bit of JavaScript that allows users to 'stretch' svg files.

## Requirements
Magnitude.js requires jQuery and the ability to use AJAX methods. Therefore it doesn't work on Chrome if saved running locally.

## Usage
Once Magnitude.js has been imported into the host html file, add the attribute `magnitude` to any `<img>` elememt that is linked to an svg, as well as the desired `height` and `width` of the image. Magnitude.js will then convert the `<img>` into an inline `<svg>` with the attribute `preserveAspectRatio="none"`. The `<svg>` will also inherit the following attributes and values from the `<img>`, as well as all attributes of the `<svg>` element in the original svg file.

* `id`
* `height`
* `width`
* `magnitude`
* `src` as `source`
