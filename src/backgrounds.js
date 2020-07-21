const rgbaAsImage = (r, g, b, a) => {
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;
  return `linear-gradient(${color}, ${color})`;
}

const lightGrey = rgbaAsImage(240, 240, 240, 0.85);
const darkBlue = rgbaAsImage(13, 71, 161, 0.9);
const halfWhite = rgbaAsImage(255, 255, 255, 0.6);
const quarterWhite = rgbaAsImage(255, 255, 255, 0.25);
const rainbow = 'linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet)';
const redGradient = 'linear-gradient(to top left, #550000, #FFAAAA)';

const backgrounds = [
  {
    name: 'Barbershop',
    styles: {
      backgroundImage: `${lightGrey}, url(/backgrounds/barbershop.png)`,
    },
  },
  {
    name: 'Orange',
    styles: {
      backgroundImage: `${rgbaAsImage(255, 224, 178, 0.5)}, url(/backgrounds/orange.png)`,
    },
  },
  {
    name: 'Cubes',
    styles: {
      backgroundImage: `${lightGrey}, url(/backgrounds/cubes.png)`,
    },
    preview: {
      backgroundSize: '10%',
    },
  },
  {
    name: 'Cubes 2',
    styles: {
      backgroundImage: `${quarterWhite}, url(/backgrounds/cubes2.png)`,
    },
    preview: {
      backgroundSize: '30%',
    },
  },
  {
    name: 'Legal',
    styles: {
      backgroundImage: `${darkBlue}, url(/backgrounds/legal.png), ${darkBlue}`,
    },
  },
  {
    name: 'Diamonds',
    styles: {
      backgroundImage: `${halfWhite}, url(/backgrounds/diamonds.png)`,
    },
    preview: {
      backgroundSize: '50%',
    },
  },
  {
    name: 'Bikes',
    styles: {
      backgroundImage: `${rgbaAsImage(0, 0, 0, 0.10)}, url(/backgrounds/bikes.png), ${rgbaAsImage(0, 0, 0, 0.10)}`,
    },
  },
  {
    name: 'Triangles',
    styles: {
      backgroundImage: 'url(/backgrounds/triangles.png)',
      backgroundSize: 'cover',
    },
  },
  {
    name: 'Top',
    styles: {
      backgroundImage: `${quarterWhite}, url(/backgrounds/top.png)`,
    },
  },
  {
    name: 'Stripes',
    styles: {
      backgroundImage: 'url(/backgrounds/stripes.png)',
    },
    preview: {
      backgroundSize: '30%',
    },
  },
  {
    name: 'Rainbow',
    styles: {
      backgroundImage: `url(/backgrounds/comb.png), ${halfWhite}, ${rainbow}`,
    },
    preview: {
      backgroundSize: '10%, 100%, 100%',
    },
  },
  {
    name: 'Cactus',
    styles: {
      backgroundImage: `${rgbaAsImage(239, 255, 235, 0.75)}, url(/backgrounds/cactus.png)`,
    },
  },
  {
    name: 'Bubbles',
    styles: {
      backgroundImage: `url(/backgrounds/bubbles.png), ${halfWhite}, ${redGradient}`,
    },
    preview: {
      backgroundSize: '10%, 100%, 100%',
    },
  },
  {
    name: 'Melon',
    styles: {
      backgroundImage: `${rgbaAsImage(255, 235, 235, 0.7)}, url(/backgrounds/melon.png)`,
    },
  },
  {
    name: 'Stripes 2',
    styles: {
      backgroundImage: `${rgbaAsImage(255, 255, 255, 0.6)}, url(/backgrounds/stripes2.png)`,
    },
  },
  {
    name: 'Spiral',
    styles: {
      backgroundImage: `${rgbaAsImage(255, 255, 255, 0.6)}, url(/backgrounds/spiral.png), ${rgbaAsImage(255, 230, 128, 1.0)}`,
    },
  },
  {
    name: 'Stripes 3',
    styles: {
      backgroundImage: `${rgbaAsImage(255, 255, 255, 0.6)}, url(/backgrounds/stripes3.png)`,
    },
  },
  {
    name: 'Lamp',
    styles: {
      backgroundImage: `${rgbaAsImage(0, 0, 0, 0.7)}, url(/backgrounds/lamp.png), ${rgbaAsImage(255, 204, 0, 1.0)}`,
    },
  },
  {
    name: 'Triangles 2',
    styles: {
      backgroundImage: 'url(/backgrounds/triangles2.png)',
    },
  },
  {
    name: 'Trump',
    styles: {
      backgroundImage: 'url(/backgrounds/trump.jpg)',
    },
  },
];

export default backgrounds;

const getRandomBackground = () => backgrounds[
  // Random index
  Math.floor(Math.random() * backgrounds.length)
];

export {
  getRandomBackground,
  rgbaAsImage,
  quarterWhite,
};
