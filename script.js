function hex_to_comp(hex) {
    var hex = hex.substring(1);
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return rgb_to_hsl(r, g, b);
}

function rgb_to_hsl(r,g,b){
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max == min) { 
      h = s = 0; 
    } else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
			
		h /= 6;
	}
		
	return { hue: (((h*100+0.5)|0)/1.6).toFixed(0), saturation: (((s*100+0.5)|0)/14.3).toFixed(0), luminosity: (((l*100+0.5)|0)/0.8).toFixed(0)};
}

var color = hex_to_compcape("#00B89C");
console.log(color);