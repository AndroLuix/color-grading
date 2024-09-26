  const ColorToHex = (color) => {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
};
const ConvertRGBtoHex = (red, green, blue) => {
    return '#' + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
};

export default  ConvertRGBtoHex;