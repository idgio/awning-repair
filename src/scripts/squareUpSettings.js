const loadSquareUpSettings = (callback) => {
  const existingScript = document.getElementById('squareUpSettings');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://dev.thecanvasmart.com/awning-recover/dist/js/squareUpSettings.js';
    script.id = 'squareUpSettings';
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};