const productos = [
  {
    sells: 21,
    name: "Guinnes Stout Lata X1",
    price: 508,
    stock: 0,
    ableDiscount: true,
    availability: true,
    alcoholContent: 4.8,
    brand: "Guinnes",
    Variety: "Negra",
    container: "Lata",
    description:
      "Guinness Extra-Stout está elaborada con las mejores maltas de calidad, lúpulo y cebada tostada. Simplemente enfríe, ábralo, vierta a 45 grados y disfrútelo. Cerveza robusta y equilibrada con notas de amargo, dulce, y tostado. Aroma sutilmente afrutado y final seco.",
    type: "Beer",
    images: ["https://i.ibb.co/dpVqLMK/guinness.jpg"],
    amount: 473,
    percentageDiscount: 2,
  },
  {
    sells: 21,
    name: "Corona Lata X6",
    price: 2.861,
    stock: 0,
    type: "Beer",
    brand: "Corona",
    amount: 473,
    Variety: "Rubia",
    container: "Lata",
    alcoholContent: 4.5,
    images: ["https://i.ibb.co/nwdRX8b/cerveza-corola.jpg"],
    description:
      "Corona es una cerveza rubia suave. Presente en más de 180 países y mundialmente conocida por ritual de la lima, es la cerveza mexicana más vendida del mundo desde 1925.",
    ableDiscount: true,
    percentageDiscount: 10,
    availability: true,
  },
  {
    sells: 21,
    name: "Quilmes Lata X6",
    price: 1.372,
    stock: 0,
    type: "Beer",
    brand: "Quilmes",
    amount: 473,
    Variety: "Rubia",
    container: "Lata",
    alcoholContent: 0,
    images: ["https://i.ibb.co/cN7zjnX/cerveza-quilmes.jpg"],
    description:
      "Fresca, de cuerpo liviano y reducida en carbohidratos. Así es la Quilmes 0,0%, una cerveza rubia, elaborada con ingredientes naturales y nada de alcohol. ENVÍOS",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 1,
    name: "Stella Artois Lata X6",
    price: 1.899,
    stock: 0,
    type: "Beer",
    brand: "Stella Artois",
    amount: 473,
    Variety: "Rubia",
    container: "Lata",
    alcoholContent: 5,
    images: ["https://i.ibb.co/5cJ5ZY3/cerveza-stella-artois.jpg"],
    description:
      "Lager de color dorado pálido, muy brillante y con una espuma consistente. Una cerveza muy equilibrada donde predominan moderadas notas a frutas blancas y de cereal que resaltan levemente sobre el aroma herbal del lúpulo Saaz.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 1,
    name: "Andes Lata X6",
    price: 1.144,
    stock: 20,
    type: "Beer",
    brand: "Andes",
    amount: 473,
    Variety: "Rubia",
    container: "Lata",
    alcoholContent: 5.1,
    description:
      "Andes Origen Fresquita es una lager liviana y muy refrescante. Está hecha con naranjas de estación y quinotos que le dan el cítrico ideal, sumado a un toque de jengibre que la hace más fresquita.",
    images: ["https://i.ibb.co/QPFsQyP/cerveza-andes.jpg"],
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 12,
    name: "Schneider Rubia Lata X6",
    price: 1.265,
    stock: 0,
    type: "Beer",
    brand: "Schneider",
    amount: 473,
    Variety: "Rubia",
    container: "Lata",
    alcoholContent: 5,
    description:
      "Suaves aromas frutados, donde se puede percibir una leve nota sulfurosa (fresca). Suave sabor a malta. Color dorado claro y espuma blanca. Leve dulzor y amargo suave a moderado. Suave, no áspera ni astringente. Moderado balance.",
    images: ["https://i.ibb.co/NFGN59W/cerveza-schneider.jpg"],
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 24,
    name: "Heineken Rubia Lata X6",
    price: 1.952,
    stock: 0,
    type: "Beer",
    brand: "Heineken",
    amount: 473,
    Variety: "Rubia",
    container: "Lata",
    alcoholContent: 4.8,
    images: ["https://i.ibb.co/DLFxzKf/Heineken.jpg"],
    description:
      "Heineken es la cerveza Premium número 1 de Europa y la más internacional del mundo.Se elabora con la misma receta desde 1873, usando los ingredientes naturales más puros, un excepcional estándar de calidad y sin ningún aditivo ni conservante.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 0,
    name: "Brahma Dorada Lata X6",
    price: 1.446,
    stock: 20,
    type: "Beer",
    alcoholContent: 4.8,
    brand: "Brahma",
    Variety: "Rubia",
    container: "Lata",
    amount: 473,
    images: ["https://i.ibb.co/xMPgnxH/cerveza-brahama.jpg"],
    description:
      "Brahma Dorada, más liviana. Cerveza rubia de rico sabor con cuerpo suave y refrescante.",
    ableDiscount: true,
    percentageDiscount: 12,
    availability: true,
  },
  {
    sells: 20,
    name: "Blue Moon Belgian White X24",
    price: 12.966,
    stock: 10,
    type: "Beer",
    brand: "Blue Moon",
    alcoholContent: 4.8,
    Variety: "White",
    container: "Porron",
    amount: 473,
    images: ["https://i.ibb.co/D1VkKTt/blue-moon.jpg"],
    description:
      "Cerveza de trigo estilo belga sin filtrar, unica por sus particulares ingredientes como cascara de naranja, cilantro y avena que le dan un sutil sabor dulce y cremoso final.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 10,
    name: "Cerveza Importada Kunstmann Hoppy Lager Lata 470ml Pack X16",
    price: 8.022,
    stock: 0,
    type: "Beer",
    brand: "Kunstmann",
    alcoholContent: 4.8,
    Variety: "Rubia",
    container: "Lata",
    amount: 473,
    images: ["https://i.ibb.co/CKC5zMj/kunstmann.jpg"],
    description:
      "Sin filtrar, de aromas frutales y citricos muy marcados, equilibrada entre el amargo intenso y el dulzor de las maltas y coronada con una persistente espuma blanca, Amargor: 50 IBU.",
    ableDiscount: true,
    percentageDiscount: 5,
    availability: true,
  },
  {
    sells: 100,
    name: "Blue Moon Belgian White Lata X16",
    price: 9.201,
    stock: 0,
    type: "Beer",
    brand: "Blue Moon",
    alcoholContent: 4.8,
    amount: 473,
    Variety: "White",
    container: "Porron",
    images: ["https://i.ibb.co/LrfDHQ7/bluemoon-16.jpg"],
    description:
      "Cerveza de trigo estilo belga sin filtrar, unica por sus particulares ingredientes como cascara de naranja, cilantro y avena que le dan un sutil sabor dulce y cremoso final.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
  },
  {
    sells: 120,
    name: "Blue Moon Belgian White Lata X8",
    price: 3.834,
    stock: 0,
    type: "Beer",
    brand: "Blue Moon",
    alcoholContent: 4.8,
    amount: 473,
    Variety: "White",
    container: "Porron",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Cerveza de trigo estilo belga sin filtrar, unica por sus particulares ingredientes como cascara de naranja, cilantro y avena que le dan un sutil sabor dulce y cremoso final.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
  },
  {
    sells: 10,
    name: "Vino Tinto Luigi Bosca Malbec",
    price: 3.28,
    stock: 0,
    type: "Came",
    brand: "Luigi Bosca",
    cask: 12,
    amount: 750,
    Variety: "Malbec",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Luigi Bosca · Malbec es un tinto de color rojo violáceo profundo y brillante. Sus aromas son intensos y equilibrados, con notas de frutas rojas algo maduras y especias. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter atractivo. Su final es profundo y nítido, con el roble totalmente integrado, y posee un buen potencial de guarda. Es un vino insignia de su variedad",
    ableDiscount: true,
    percentageDiscount: 10,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 120,
    name: "Vino Nicasia Vineyard Red Blend Cabernet Franc",
    price: 2.239,
    stock: 0,
    type: "Came",
    brand: "Nicasia Vineyard",
    cask: 12,
    amount: 750,
    Variety: "Tinto",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Se perciben en este vino elegantes notas herbáceas y de anís aportadas por el Cabernet Franc, junto a vivaces frutos negros y especias conferidos por el Merlot y el Petit Verdot. El paso por roble incrementa aún más la complejidad de este vino, otorgando delicados toques ahumados y de tostado. La sólida estructura de este vino permite acompañarlo con carnes rojas, rissotos y platos elaborados.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 0,
    name: "Vino Tinto Trumpeter Malbec Botella Rutini Wines",
    price: 2.18,
    stock: 0,
    type: "Came",
    brand: "Trumpeter",
    cask: 14,
    amount: 750,
    Variety: "Malbec",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Rojo violáceo brillante, seduce con sus aromas frutales (cerezas) y especiados (canela, cardamomo, pimienta negra). Posee gran cuerpo y su vivaz estructura acentúa los taninos intensos que se vuelven aterciopelados en el retrogusto. ",
    ableDiscount: true,
    percentageDiscount: 5,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 50,
    name: "Vino Cordero Con Piel De Lobo Malbec 750cc",
    price: 957,
    stock: 10,
    type: "Came",
    brand: "Cordero con Piel de Lobo",
    cask: 6,
    amount: 750,
    Variety: "Malbec",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Es un Malbec joven muy bien elaborado, diferente por su aroma y sabor a frutos maduros. Con una acidez justa deja en boca un picor agradable con un final reforzado por su paso por madera.",
    ableDiscount: true,
    percentageDiscount: 2,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 120,
    name: "Vino Tinto Pispi Blend De Tintas Mosquita Muerta",
    price: 2.147,
    stock: 0,
    cask: 12,
    type: "Came",
    brand: "Pispi",
    amount: 750,
    Variety: "Blend",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Temperatura de servicio de este rosado es entre 16º y 18º C. Potencial de guarda unos 4 años. Dejar respirar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar carnes rojas en diferentes preparaciones .",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 110,
    name: "Vino Malamado Malbec Tinto Flia Zuccardi",
    price: 3.158,
    stock: 0,
    cask: 12,
    type: "Came",
    brand: "Malamado",
    amount: 750,
    Variety: "Malbec",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Se destaca un Matiz púrpura con algunos visos naranja propios de la madurez. Posee un aroma delicado e intenso a frutos secos como almendras, castañas y nuez, en combinación con notas de ciruelas, higos, membrillo y canela. Tiene una entrada dulce y sedosa, con amplio desarrollo y persistente final.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 20,
    name: "Vino Lindaflor Blend X 750cc Bodega Monteviejo - Enotek -",
    price: 13.65,
    stock: 0,
    cask: 20,
    type: "Came",
    brand: "LindaFlor",
    amount: 750,
    Variety: "Blend",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Color rojo profundo e intenso. Su aroma es sumamente complejo y cautivante, remite a notas de frutos rojos y negros, a su vez presenta notas de especias. En boca es un vino de buena concentración, taninos redondos y complejos. Es un vino equilibrado y elegante.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 60,
    name: "Vino Tinto Montepulciano D'abruzzo Doc 2018 Italiano",
    price: 6.4,
    stock: 0,
    cask: 12,
    type: "Came",
    brand: "Montepulciano",
    amount: 750,
    Variety: "Tinto",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Color rojo vivo con matices violáceos. Carácter vinoso, afrutado con notables notas de frutos del bosque. Sabor aterciopelado y armónico, aromático con una buena persistencia final. Partidos de comida: apto para carnes a la brasa; excelente con embutidos y quesos a medio condimentar.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 120,
    name: "Vino Angélica Zapata Cabernet Sauvignon",
    price: 4.2,
    stock: 0,
    cask: 12,
    type: "Came",
    brand: "Angelica Zapata",
    amount: 750,
    Variety: "Tinto",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Es un vino elegante y complejo, de color rojo rubí profundo. Se perciben en este vino aromas a frutas rojas, como cassis, cerezas y ciruelas maduras, junto a fragancias especiadas, tal como pimienta negra , clavo de olor, y notas suaves de orégano y tomillo.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 120,
    name: "Vino Killka Red Blend Salentein",
    price: 1.71,
    stock: 0,
    cask: 12,
    type: "Came",
    brand: "Salentein Wine",
    amount: 473,
    Variety: "Tinto",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Es un vino complejo con notas de frutas seguidas de vainilla aportada por la madera. En boca es redondo, equilibrado complejo con un final largo y dulce.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 13,
  },
  {
    sells: 40,
    name: "Sombrero Negro Silver edition",
    price: 31000,
    stock: 0,
    type: "Tequila",
    brand: "Sombrero Negro",
    amount: 700,
    Variety: "Blanco",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Claro, brillante y transparente de color blanco con un tinte plateado",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 40,
  },
  {
    sells: 10,
    name: "Jose Cuervo Gold",
    price: 66100,
    stock: 0,
    type: "Tequila",
    brand: "Jose Cuervo",
    amount: 750,
    Variety: "Blanco",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Este tequila más produccido es una de las primeras experiencias de mucha gente. Siendo una mezcla de un tequila blanco y reposado, pero no es 100% agave",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 38,
  },
  {
    sells: 120,
    name: "Chilango's Dorado",
    price: 66100,
    stock: 0,
    type: "Tequila",
    brand: "Distrito Federal Chilango is",
    amount: 750,
    Variety: "Dorado",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Una versión más seca y de un poco de menor calidad de la marca Chilango",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 40,
  },
  {
    sells: 60,
    name: "Sol Azteca",
    price: 65800,
    stock: 0,
    type: "Tequila",
    brand: "Casa del Sol",
    amount: 1000,
    Variety: "Añejo",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description:
      "Hecho por la empresa Peter's en Argentina, con un sabor sutil de agave roble y vainilla.",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 37,
  },
  {
    sells: 120,
    name: "Camacho Peters",
    price: 4260,
    stock: 0,
    type: "Tequila",
    brand: "Camacho",
    amount: 473,
    Variety: "Dorado",
    container: "Botella",
    images: ["https://i.ibb.co/2hQ7XBp/blooe-moon-lata.jpg"],
    description: "Origen Argentino",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 40,
  },
  {
    sells: 10,
    name: "Aguardiente mil demonios botella 900ml",
    price: 109577.03,
    stock: 0,
    type: "Liqueur",
    brand: "Christallino",
    amount: 900,
    Variety: "Pera",
    container: "Botella",
    images: [
      "https://kyva.co/wp-content/uploads/2022/04/MIL-DEMONIOS_AGUARDIENTE_1_750ML_PNG_1000x-800-px_Transparente.png",
    ],
    description:
      "Tres veces destilado, maceración de botánicos, 3 veces filtrado. • Mil Demonios es un aguardiente ultra premium de origen 100% Colombiano • Mil Demonios ha sido ganador de dos medallas en el San Francisco World Spirits Competition 2018 y medalla de Oro en 2021 • Está registrado en los Estados Unidos, Comunidad Andina y Unión Europera, se vende en Alemania, China y USA",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 40,
  },
  {
    sells: 1,
    name: "Aguardiente Jubilo- Tradicional Botella 900ml",
    price: 16.734,
    stock: 0,
    type: "Liqueur",
    brand: "Christallino",
    amount: 900,
    Variety: "Pera",
    container: "Botella",
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.bYITxgwgVyGb2j6uWtzezAHaHa&pid=Api&P=0&h=180",
    ],
    description:
      "suave y sutil, lo primero. Elegante en el anís, lo segundo. Para nada hostigante y con evidentes notas a vainilla. A mi gusto –y sobre todo si se está en climas cálidos, aunque también en Bogotá– pide un hielo para el aperitivo, y tal vez alguna rodaja pequeña de algún cítrico no tan agresivo, como la naranja, o una mandarina cortada con cuchillo y con su cáscara. Y solo, como bajati",
    ableDiscount: true,
    percentageDiscount: 5,
    availability: true,
    alcoholContent: 40,
  },
  {
    sells: 10,
    name: "Whisky Chivas Regal  12 años- Botella 700ml",
    price: 14.734,
    stock: 0,
    type: "Liqueur",
    brand: "Salentein Wine",
    amount: 700,
    Variety: "Blend",
    container: "Botella",
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.qU_WBfBWS0hr1eSeLSAq2gHaHa&pid=Api&P=0&h=180",
    ],
    description:
      "Chivas Regal es un whisky escocés prémium producido por la compañía Chivas Brothers, propiedad del grupo Pernod Ricard, producido en Aberdeen, Escocia, desde 1801. Es un whisky de mezcla, con lo que no se produce en una sola destilería. Tiene en la destilería Strathisla, ubicada en el pequeño pueblo de Keith cercano al río Spey, su localidad de referencia. Chivas Regal es una de las marcas prémium de whisky con mayor volumen de ventas a nivel mundial.1​ Es una de las marcas de whisky escocés más reconocidas a nivel internacional, siendo exportada a más de 200 países.2 Cada una de las botellas está numerada y el producto es elaborado con agua de manantial.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 1200,
    name: "San Luis",
    price: 300,
    stock: 0,
    type: "Drinks",
    brand: "San Luis",
    amount: 625,
    Variety: "Water",
    container: "Botella",
    images: ["https://ibb.co/BPvhxRV"],
    description: "Agua mineral sin gas 625 ml",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 12,
    name: "Coca-Cola Original",
    price: 814,
    stock: 0,
    type: "Drinks",
    brand: "Coca-Cola",
    amount: 2.25,
    Variety: "Sugary drink",
    container: "Botella",
    images: ["https://ibb.co/kJ8PpPn"],
    description: "Coca-cola refrescante para compartir en familia",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Seven Up",
    price: 1.71,
    stock: 0,
    type: "Drinks",
    brand: "Seven Up",
    amount: 350,
    Variety: "Sugary drink",
    container: "Lata",
    images: ["https://ibb.co/kJ8PpPn"],
    description:
      "Encuentra Bebida 7 Up lata 350 cc y toda la variedad de productos 7up navegando en el sitio web.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 13,
  },
];

module.exports = { productos };
