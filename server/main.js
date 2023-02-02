function setPrimaryColour(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  // if lightness is less than 40% (darker colours), set a light colour for the text 
  if (l < 50) {
     content_color = '#efefef';
  } else {
     content_color = '#333333'
  }

  // add a style element with the new values
  $( "#plugin_style" ).html(":root {--ribbon-color-main: hsl("+h+", "+s+"%, "+l+"%); --h: "+h+"; --s: "+s+"%; --l: "+l+"%; --content-color: "+content_color+"}");

  // returned array of 4 elements
  return ["hsl(" + h + "," + s + "%," + l + "%)", h, s, l];

  //sample usage
  // output = setPrimaryColour('#ddff55');
  // HSL = output[0];
  // H = output[1];
  // S = output[2];
  // L = output[3];
  // document.getElementById('hsl').innerHTML = HSL + ' ' +H+' '+S+' '+L;
}