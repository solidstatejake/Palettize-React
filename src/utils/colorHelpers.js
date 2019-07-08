import chroma from 'chroma-js';

const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

function generatePalette(initialPalette) {
  let newPalette = {
    paletteName: initialPalette.paletteName,
    id: initialPalette.id,
    emoji: initialPalette.emoji,
    colors: {}
  };

  for (let level of levels) {
    newPalette.colors[ level ] = [];
  }

  for (let color of initialPalette.colors) {
    let scale = generateColorScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[ levels[ i ] ].push({
        name: `${color.name} ${levels[ i ]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[ i ],
        rgb: chroma(scale[ i ]).css(),
        rgba: chroma(scale[ i ]).css().replace('rgb', 'rgba').replace(')', ',1.0)')

      });
    }
  }

  return newPalette
}

function getRange(hex) {
  const end = '#fff';
  return [
    chroma(hex).darken(3).hex(),
    hex,
    end
  ];
}


function generateColorScale(hex, numberOfColors) {
  return chroma.scale(getRange(hex)).mode('lab').colors(numberOfColors);
}


export { generatePalette };