const generateD85 = (fill, outline, viewBoxW = "400", viewBoxH = "400") => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <g>
      <path fill="${fill}" d="M53.7 276.7l142-246c2-3.5 7-3.5 9 0l142 246c2 3.5-.5 7.8-4.5 7.8H58.3c-4.1 0-6.6-4.3-4.6-7.8zm296.4-167.4L208.8 27.8c-2.3-1.3-4.9 1.3-3.6 3.6l141.3 244.8c1.3 2.3 4.9 1.4 4.9-1.3V111.6c0-.9-.5-1.8-1.3-2.3zm-299.9 0l141.3-81.6c2.3-1.3 4.9 1.3 3.6 3.6L53.8 276.1c-1.3 2.3-4.9 1.4-4.9-1.3V111.6c0-.9.5-1.8 1.3-2.3zm3.5 177.9l142 84.5c2 1.2 7 1.2 9 0l142-84.5c2-1.2-.5-2.7-4.5-2.7H58.3c-4.1 0-6.6 1.5-4.6 2.7z"/>
      <path fill="none" stroke="${outline}" stroke-width="12" stroke-miterlimit="10" d="M53.7 276.7l142-246c2-3.5 7-3.5 9 0l142 246c2 3.5-.5 7.8-4.5 7.8H58.3c-4.1 0-6.6-4.3-4.6-7.8zm296.4-167.4L208.8 27.8c-2.3-1.3-4.9 1.3-3.6 3.6l141.3 244.8c1.3 2.3 4.9 1.4 4.9-1.3V111.6c0-.9-.5-1.8-1.3-2.3zm-299.9 0l141.3-81.6c2.3-1.3 4.9 1.3 3.6 3.6L53.8 276.1c-1.3 2.3-4.9 1.4-4.9-1.3V111.6c0-.9.5-1.8 1.3-2.3zm3.5 177.9l142 84.5c2 1.2 7 1.2 9 0l142-84.5c2-1.2-.5-2.7-4.5-2.7H58.3c-4.1 0-6.6 1.5-4.6 2.7z"/>
  </g>
  <g>
      <path d="M232.9 164.6h-41.3v18.6c1.8-2.1 4.3-3.7 7.6-4.9 3.2-1.2 6.8-1.8 10.6-1.8 6.1 0 11.3 1.4 15.4 4.1 4.2 2.7 7.2 6.4 9.2 11 2 4.6 3 9.6 3 15.2 0 10-2.8 18-8.4 23.8-5.6 5.8-13.5 8.8-23.7 8.8-6.9 0-12.9-1.2-18-3.7s-9-5.9-11.8-10.3c-2.8-4.4-4.2-9.5-4.4-15.3h21.7c.4 2.9 1.6 5.4 3.6 7.3 1.9 1.9 4.6 2.9 8 2.9 3.9 0 6.8-1.3 8.8-3.8 1.9-2.5 2.9-5.8 2.9-10 0-4-1-7-3.1-9.2-2.1-2.2-5-3.2-8.7-3.2-2.9 0-5.2.6-7.1 1.9-1.9 1.3-3.2 2.9-3.9 4.9h-21.5v-55.5h61.4v19.2z"/>
      <path d="M194 331c0 3.8 2.5 5.7 7.6 5.7 2.9 0 5-.6 6.3-1.9 1.3-1.3 2.1-3.3 2.2-6H228c-.4 6-3.2 10.4-8.4 13.4-5.1 3-11.7 4.5-19.5 4.5-8.2 0-14.4-1.3-18.6-4-4.2-2.7-6.3-6.2-6.3-10.4 0-4.8 2.8-9.4 8.5-13.9 5.6-4.5 12.4-8.4 20.3-11.5h-29.9v-9.5h54v8.9C205.4 316.4 194 324.8 194 331z"/>
      <path d="M115.7 89.4c2 .2 3.6 1.8 4.8 4.7 1.2 2.9 1.8 7.4 1.8 13.2 0 5.9-.7 11.6-1.9 16.9-1.3 5.3-2.9 9.9-4.9 13.8-2 3.9-4.1 7-6.4 9.1-2.5 2.3-4.6 3.4-6.3 3.2-1.7-.2-3.1-1.7-4-4.4-2.4 10.7-6.3 18.7-11.9 24-3.2 3-5.9 4.3-8.2 3.9-2.3-.4-4-2.3-5.1-5.6-1.2-3.3-1.7-7.7-1.7-13.2 0-5.4.6-10.9 1.8-16.5 1.2-5.5 2.9-10.7 5.2-15.4 2.3-4.7 5-8.6 8.2-11.6 5.6-5.3 9.5-4.8 11.8 1.6.9-4.5 2.3-8.4 4-12 1.8-3.5 3.9-6.4 6.3-8.8 2.4-2.1 4.5-3.1 6.5-2.9zM83 136.2c-1.2 3.1-1.7 6.4-1.8 10 0 3.5.6 5.7 1.7 6.7s2.7.5 4.7-1.4 3.6-4.4 4.7-7.6c1.1-3.2 1.7-6.5 1.7-9.8 0-3.4-.5-5.6-1.7-6.6-1.1-1-2.7-.6-4.7 1.3-1.9 1.8-3.5 4.3-4.6 7.4zm20.2-17.6c-1 2.6-1.4 5.3-1.4 8.2 0 2.9.5 4.7 1.4 5.5.9.8 2.3.3 4.1-1.4 1.8-1.7 3.2-3.9 4.2-6.5 1-2.7 1.5-5.4 1.5-8.2 0-2.8-.5-4.6-1.5-5.3-1-.8-2.4-.3-4.2 1.4-1.8 1.6-3.2 3.7-4.1 6.3z"/>
      <path d="M329.1 183.7l-11.3-11.4-34.8-68.6.1-18.9 34.5 34.9V111l11.7 11.9v8.7l10.2 10.4v17.8l-10.2-10.4-.2 34.3zm-30.5-66.8l18.8 37V136l-18.8-19.1z"/>
  </g>
</svg>
  `;
};

module.exports = generateD85;
