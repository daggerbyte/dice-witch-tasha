const { svg2png } = require("svg-png-converter");
const redX = `
  <svg width="218" height="270" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="red"
      fill-rule="evenodd"
      stroke="#000"
      stroke-width="0"
      d="M152.217 5.5q3.16 0 22.755 3.013l19.594 3.013-4.74 6.93q-4.741 6.929-18.963 30.127-14.221 23.2-17.698 28.923l-17.382 28.622q-13.906 22.898-13.906 24.705v1.808l21.807 18.378q21.807 18.378 27.18 22.898 5.372 4.519 19.278 20.186 13.905 15.666 17.382 27.115L211 232.667l-6.32-2.712q-6.322-2.711-23.072-12.654-16.75-9.942-24.65-15.064-7.901-5.122-13.906-9.64-6.005-4.52-7.585-6.93l-1.58-2.41-5.689-2.41-5.689-2.411-1.896-2.712q-1.896-2.711-8.217-6.628l-6.32-3.917-2.845 4.218q-2.844 4.218-4.74 9.039l-1.897 4.82-5.056 4.218q-5.057 4.218-7.901 8.135-2.845 3.917-10.113 13.256-7.27 9.34-13.906 18.077-6.637 8.737-14.538 16.27-7.9 7.532-15.802 12.653-7.9 5.122-13.59 6.629L10 264l3.476-6.026q3.477-6.025 8.533-13.256 5.057-7.23 13.906-22.897 8.85-15.667 25.915-45.193 17.066-29.525 17.066-31.936v-2.41l-11.061-8.135q-11.061-8.134-27.811-18.076l-16.75-9.943 1.896-3.615q1.896-3.616 11.061-14.763l9.165-11.147 3.793 1.807q3.792 1.808 17.698 12.654 13.905 10.846 20.542 15.968 6.637 5.122 8.217 5.423l1.58.301 2.845-5.121q2.844-5.122 7.9-15.366 5.057-10.243 17.067-36.756Q137.048 29 142.736 17.55q5.689-11.448 6.005-11.75l.316-.301h3.16z"
    />
  </svg>
`;

const greenCheck = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.52 198.57" version="1.1">
    <g transform="translate(-36.097 -595.93)">
        <path d="M36.097 739.31l20-30c16.511 12.907 17.767 19.639 24.949 30.909 36.804-72.31 74.954-104.96 128.57-144.29-51.91 53.35-83.23 89.32-130 198.58-16.193-26.29-27.333-53.62-43.523-55.2z" fill="green"/>
    </g>
</svg>
`;

const blank = `
<svg height="100" width="100">
</svg>
`;

const generateIcon = async (iconType) => {
  try {
    let image;
    switch (iconType) {
      case "check":
        image = greenCheck;
        break;
      case "x":
        image = redX;
        break;
      case "blank":
        image = blank;
        break;
      default:
        image = blank;
        break;
    }
    return await svg2png({
      input: image,
      encoding: "buffer",
      format: "png"
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = generateIcon;
