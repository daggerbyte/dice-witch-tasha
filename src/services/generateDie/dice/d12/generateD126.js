const generateD126 = (fill, outline, viewBoxW = "500", viewBoxH = "500") => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <g>

      <g fill="${fill}">
          <path d="M167.9 360.5l-48.8-150.1c-.7-2.1.1-4.4 1.9-5.7L248.6 112c1.8-1.3 4.2-1.3 6 0l127.7 92.8c1.8 1.3 2.6 3.6 1.9 5.7l-48.8 150.1c-.7 2.1-2.7 3.5-4.9 3.5H172.8c-2.3 0-4.2-1.4-4.9-3.6z"/>
          <path d="M50.9 189.4l-1.1 124.3c0 .8.2 1.6.7 2.2l71.8 100.7c1.5 2.1 4.5 2.1 6.1.1l39.6-51.6c.8-1 1-2.3.6-3.5l-49.9-153.5c-.4-1.1-1.3-2-2.4-2.4l-60.5-19.9c-2.4-.7-4.9 1.1-4.9 3.6zm401.9 0l1.1 124.3c0 .8-.2 1.6-.7 2.2l-71.8 100.7c-1.5 2.1-4.5 2.1-6.1.1l-39.6-51.6c-.8-1-1-2.3-.6-3.5L385 208.2c.4-1.1 1.3-2 2.4-2.4l60.5-19.9c2.4-.8 4.9 1 4.9 3.5z"/>
          <path d="M372.1 422.9l-117.9 39.4c-.8.3-1.6.3-2.3 0l-118-37.2c-2.4-.8-3.4-3.7-2-5.7l36.9-53.6c.7-1 1.9-1.6 3.1-1.6l161.4.1c1.2 0 2.3.6 3 1.5l37.6 51.4c1.6 1.9.6 4.9-1.8 5.7zm76.1-243.3L376 78.4c-.5-.6-1.1-1.1-1.9-1.4L256.8 37.8c-2.4-.8-6.6.9-6.7 3.5v65.1c0 1.2.5 2.4 1.6 3.2l130.6 94.9c1 .7 2.2.9 3.4.5l60.6-19.4c2.4-1 3.4-3.9 1.9-6z"/>
          <path d="M53.6 179.6l72.2-101.2c.5-.6 1.1-1.1 1.9-1.4L245 37.8c2.4-.8 6.6.9 6.7 3.5v65.1c0 1.2-.5 2.4-1.6 3.2l-130.6 94.9c-1 .7-2.2.9-3.4.5l-60.6-19.4c-2.4-1-3.3-3.9-1.9-6z"/>
      </g>
      <g fill="none" stroke="${outline}" stroke-width="12" stroke-miterlimit="10">
          <path d="M167.9 360.5l-48.8-150.1c-.7-2.1.1-4.4 1.9-5.7L248.6 112c1.8-1.3 4.2-1.3 6 0l127.7 92.8c1.8 1.3 2.6 3.6 1.9 5.7l-48.8 150.1c-.7 2.1-2.7 3.5-4.9 3.5H172.8c-2.3 0-4.2-1.4-4.9-3.6z"/>
          <path d="M50.9 189.4l-1.1 124.3c0 .8.2 1.6.7 2.2l71.8 100.7c1.5 2.1 4.5 2.1 6.1.1l39.6-51.6c.8-1 1-2.3.6-3.5l-49.9-153.5c-.4-1.1-1.3-2-2.4-2.4l-60.5-19.9c-2.4-.7-4.9 1.1-4.9 3.6zm401.9 0l1.1 124.3c0 .8-.2 1.6-.7 2.2l-71.8 100.7c-1.5 2.1-4.5 2.1-6.1.1l-39.6-51.6c-.8-1-1-2.3-.6-3.5L385 208.2c.4-1.1 1.3-2 2.4-2.4l60.5-19.9c2.4-.8 4.9 1 4.9 3.5z"/>
          <path d="M372.1 422.9l-117.9 39.4c-.8.3-1.6.3-2.3 0l-118-37.2c-2.4-.8-3.4-3.7-2-5.7l36.9-53.6c.7-1 1.9-1.6 3.1-1.6l161.4.1c1.2 0 2.3.6 3 1.5l37.6 51.4c1.6 1.9.6 4.9-1.8 5.7zm76.1-243.3L376 78.4c-.5-.6-1.1-1.1-1.9-1.4L256.8 37.8c-2.4-.8-6.6.9-6.7 3.5v65.1c0 1.2.5 2.4 1.6 3.2l130.6 94.9c1 .7 2.2.9 3.4.5l60.6-19.4c2.4-1 3.4-3.9 1.9-6z"/>
          <path d="M53.6 179.6l72.2-101.2c.5-.6 1.1-1.1 1.9-1.4L245 37.8c2.4-.8 6.6.9 6.7 3.5v65.1c0 1.2-.5 2.4-1.6 3.2l-130.6 94.9c-1 .7-2.2.9-3.4.5l-60.6-19.4c-2.4-1-3.3-3.9-1.9-6z"/>
      </g>
  </g>
  <g>
      <path d="M258.6 226.3c-1.7-1.8-4.2-2.8-7.3-2.8-4.9 0-8.3 2.2-10.4 6.7-2.1 4.5-3 11.4-2.8 20.6 1.4-3.4 3.9-6.1 7.3-8.1 3.5-2 7.5-2.9 12.1-2.9 8.4 0 15 2.5 19.8 7.6 4.9 5.1 7.3 12.3 7.3 21.8 0 5.9-1.2 11.2-3.6 15.8-2.4 4.6-6 8.2-10.7 10.7-4.7 2.6-10.4 3.8-17 3.8-13 0-21.9-4-26.9-12-4.9-8-7.4-19.2-7.4-33.4 0-16.4 2.6-28.5 7.9-36.2 5.3-7.7 13.8-11.6 25.7-11.6 9.4 0 16.5 2.7 21.3 8 4.9 5.3 7.6 12 8.2 20.1H262c-.6-3.5-1.7-6.2-3.4-8.1zm-15.7 51.3c2.2 2.4 5.4 3.6 9.5 3.6 3.8 0 6.7-1 8.8-3.1 2.1-2.1 3.2-5.1 3.2-9.2s-1.1-7.1-3.3-9.2c-2.2-2.1-5.1-3.2-8.9-3.2-3.6 0-6.6 1-9 3.1-2.4 2.1-3.6 5-3.6 8.7.1 3.8 1.2 6.9 3.3 9.3z"/>
      <path d="M88.7 322.6l-10.3 3.3-8.6-26.5 45.5-14.8 5.4 16.7-35.2 11.4 3.2 9.9z"/>
      <path d="M246.4 418.8c0 3.7 2.3 5.5 6.9 5.5 2.6 0 4.5-.6 5.7-1.9 1.2-1.3 1.9-3.2 2-5.9h16.2c-.4 5.8-2.9 10.2-7.6 13.1-4.7 2.9-10.6 4.4-17.7 4.4-7.5 0-13.1-1.3-16.9-3.9-3.8-2.6-5.7-6-5.7-10.2 0-4.6 2.6-9.2 7.7-13.6s11.3-8.2 18.4-11.3h-27.1v-9.3h49v8.7c-20.6 10.3-30.9 18.4-30.9 24.4z"/>
      <path d="M429.6 283.8c1.3 2.4 2 5.6 2.1 9.5 0 3.9-.8 8.4-2.4 13.5-1.7 5.1-3.7 9.3-6 12.4-2.4 3.2-4.8 5.3-7.3 6.4-2.5 1.1-4.8 1.3-7 .6-2.4-.8-4.2-2.2-5.4-4.4-1.2-2.2-1.7-4.9-1.6-8.3-4.7 6.6-9.7 9-15.1 7.3-3.1-1-5.4-3-6.9-5.9-1.5-2.9-2.2-6.5-2.1-10.7.1-4.2.9-8.6 2.5-13.4 1.5-4.7 3.5-8.8 5.9-12.2 2.4-3.5 5-5.9 8-7.4s5.9-1.8 9-.7c5.4 1.8 8 6.7 7.9 14.8 1.9-2.8 4-4.7 6.2-5.8 2.2-1.1 4.5-1.2 6.9-.4 2.2.7 4 2.3 5.3 4.7zm-36.1 3.5c-1.7 1.4-3 3.6-4 6.6-1 3-1.2 5.6-.7 7.7.5 2.1 1.8 3.5 3.7 4.1 1.9.6 3.7.2 5.4-1.3 1.7-1.5 3-3.6 3.9-6.5.9-2.9 1.2-5.4.7-7.6-.5-2.2-1.7-3.6-3.6-4.2-1.9-.6-3.7-.2-5.4 1.2zm19.2 7.6c-1.4 1.1-2.5 3-3.3 5.4-.8 2.5-1 4.6-.5 6.3.5 1.7 1.6 2.9 3.3 3.5 1.7.6 3.3.3 4.8-.9s2.6-2.9 3.4-5.3c.8-2.4.9-4.5.4-6.3-.5-1.8-1.6-3-3.3-3.5-1.8-.6-3.4-.3-4.8.8z"/>
      <path d="M338.6 131.7c3 2.2 5.9 2.8 8.5 1.8 2.6-1 5.4-3.6 8.3-7.8-2 .8-4.4.9-7.2.2s-5.6-2.1-8.5-4.2c-5.2-3.8-8.6-7.9-10-12.3-1.4-4.4-.7-8.7 2.3-12.8 1.9-2.6 4.3-4.3 7.3-5.2 3-.9 6.4-.8 10.1.2 3.8 1 7.7 3.1 11.9 6.1 5.6 4.1 9.4 8.1 11.4 12s2.5 7.7 1.7 11.5c-.8 3.7-2.7 7.5-5.6 11.5-5.1 7-10.5 11.2-16.2 12.6-5.7 1.4-12.1-.6-19.4-5.8-4-2.9-7-5.9-9.1-9.1-2.1-3.2-3.2-6.3-3.4-9.3-.2-3 .4-5.7 1.8-8l12.6 9.1c-1.5 3.4-.4 6.7 3.5 9.5zm22.2-19.9c-.6-2-2.2-4-4.8-5.9-2.4-1.7-4.5-2.6-6.5-2.7-2-.1-3.6.8-4.9 2.5s-1.6 3.6-.9 5.5c.7 1.9 2.2 3.7 4.6 5.5 2.3 1.6 4.5 2.6 6.6 2.8 2.2.2 3.9-.5 5-2.1 1.2-1.7 1.5-3.6.9-5.6z"/>
      <path d="M165.1 90l-25 18.2 5.7 7.8c.5-1.7 1.5-3.5 3.1-5.4 1.6-1.9 3.6-3.7 5.9-5.4 3.7-2.7 7.3-4.4 10.6-5.1 3.4-.7 6.3-.5 8.9.6 2.6 1.1 4.8 2.8 6.5 5.1 3.1 4.2 3.8 8.8 2.2 13.8-1.6 4.9-5.5 9.7-11.7 14.2-4.2 3.1-8.2 5.2-12.1 6.4-3.9 1.2-7.3 1.5-10.3.9s-5.5-2.1-7.4-4.5l13.1-9.6c1.2 1.1 2.6 1.5 4.4 1.5 1.8-.1 3.7-.8 5.7-2.3 2.4-1.7 3.7-3.5 4.2-5.4.4-1.9 0-3.8-1.3-5.5-1.2-1.7-2.8-2.5-4.7-2.5-1.9 0-4 .8-6.3 2.5-1.7 1.3-3 2.6-3.8 3.9-.8 1.4-1.1 2.6-.9 3.8l-13.1 9.5-17-23.4L159 82l6.1 8z"/>
      <path d="M289.5 329.6H216c-4.4 0-8-3.6-8-8v-4.8c0-4.4 3.6-8 8-8h73.5c4.4 0 8 3.6 8 8v4.8c0 4.4-3.6 8-8 8zM342.9 163l-39-29.4c-1.7-1.3-2.1-3.8-.8-5.5l1.9-2.5c1.3-1.7 3.8-2.1 5.5-.8l39 29.4c1.7 1.3 2.1 3.8.8 5.5l-1.9 2.5c-1.3 1.7-3.8 2.1-5.5.8z"/>
  </g>
</svg>
                `;
};

module.exports = generateD126;
