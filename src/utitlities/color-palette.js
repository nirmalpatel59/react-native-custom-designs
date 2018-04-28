const colorPalette = {
  DEEP_PURPLE: {
    bgNormal: '#673AB7',
    bgLight: '#9575CD',
    bgDark: '#512DA8',
    fontColor: '#EDE7F6'
  },
  GREEN: {
    bgNormal: '#4CAF50',
    bgLight: '#81C784',
    bgDark: '#388E3C',
    fontColor: '#E8F5E9'
  } 
};

const theme = {
  primary: colorPalette.GREEN,
  secondary: colorPalette.DEEP_PURPLE, 
};


module.exports.theme = theme;
