const productos = [
  {
    sells: 21,
    name: "Guinnes Stout Lata X1",
    price: 1.5,
    stock: 10,
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
    price: 16.99,
    stock: 10,
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
    price: 8.99,
    stock: 10,
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
    price: 6.75,
    stock: 10,
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
    price: 6.99,
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
    price: 7.25,
    stock: 10,
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
    price: 7.5,
    stock: 10,
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
    price: 8.5,
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
    price: 22.3,
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
    price: 16.5,
    stock: 10,
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
    price: 18.25,
    stock: 10,
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
    price: 7.25,
    stock: 10,
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
    price: 6.5,
    stock: 10,
    type: "Wine",
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
    price: 4.25,
    stock: 10,
    type: "Wine",
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
    price: 4.1,
    stock: 10,
    type: "Wine",
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
    price: 2,
    stock: 10,
    type: "Wine",
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
    price: 4.25,
    stock: 10,
    cask: 12,
    type: "Wine",
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
    price: 6.5,
    stock: 10,
    cask: 12,
    type: "Wine",
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
    price: 26.75,
    stock: 10,
    cask: 20,
    type: "Wine",
    brand: "Lindaflor",
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
    price: 12.5,
    stock: 10,
    cask: 12,
    type: "Wine",
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
    price: 8.25,
    stock: 10,
    cask: 12,
    type: "Wine",
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
    price: 3.25,
    stock: 10,
    cask: 12,
    type: "Wine",
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
    price: 65,
    stock: 10,
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
    price: 124.99,
    stock: 10,
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
    price: 119.99,
    stock: 10,
    type: "Tequila",
    brand: "Distrito Federal Chilango´s",
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
    price: 130,
    stock: 10,
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
    price: 8.25,
    stock: 10,
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
    price: 229.99,
    stock: 10,
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
    price: 33.25,
    stock: 10,
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
    price: 24.8,
    stock: 10,
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
    price: 1,
    stock: 10,
    type: "Drinks",
    brand: "San Luis",
    amount: 625,
    Variety: "Water",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/67yzvImGr6MYIpz2etrZ1uCC1JFH6n1UdZ9K-sUAtVF2-YWEML-lpfEowf9psLIiDshYhUUsn7SS-cfed0uy6K2Sc6trZae5WEUkTuqt",
    ],
    description: "Agua mineral sin gas 625 ml",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 12,
    name: "Coca-Cola Original",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Coca-Cola",
    amount: 2250,
    Variety: "Sugary Drink",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/IHSaPiTWz0v7Hp-gqtKxat_0Pyo42HHttzsTrNLDvAixSnnXf_0RRNtGNGkCfUnQ5Gs4R0H2Db12pQJs3zMjRkCaXTGMVRXQ6Kgz6EX7",
    ],
    description: "Coca-cola refrescante para compartir en familia",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Seven Up",
    price: 3,
    stock: 10,
    type: "Drinks",
    brand: "7 UP",
    amount: 2250,
    Variety: "Sugary Drink",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/9MS_w_2IKZ3XTXyAEsMnaTocgGYqDGAbCfC4yNMBLSGll6SyAanH4INFptjntDRwViHTfc6SbRrGVIunXrBxaULPrZuJ2Hnt8VktvEzlkw",
    ],
    description:
      "Encuentra Bebida 7 Up lata 350 cc y toda la variedad de productos 7up navegando en el sitio web.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Sprite",
    price: 4.25,
    stock: 10,
    type: "Drinks",
    brand: "Sprite",
    amount: 2250,
    Variety: "Sugary Drink",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/jr5Cr9LZPMKUos5nCiRdcVB3kEkV6cTIDcZm1cBfGOXl5UIklAkfaiWv6CBTiSeUMNqZf-ot6cvUXMs9J7OErqhMYFuQ0wmpfy-wFkxu",
    ],
    description: "Encuentra Bebida sprite en botella.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Fanta",
    price: 3.5,
    stock: 10,
    type: "Drinks",
    brand: "Fanta",
    amount: 2250,
    Variety: "Sugary Drink",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/ghFKPhtvEOdU6_49jGzRyzny_sMbuqugh5Nc99e22MCRXpmEoT8kym0pik8nzzGg62SK-WPLCjLycBKYiUcooHe1vpFf2RNKaDviDtgI",
    ],
    description: "Encuentra Bebida fanta en botella.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Ades de manzana",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Ades",
    amount: 1000,
    Variety: "Juice",
    container: "Carton",
    images: [
      "https://lh3.googleusercontent.com/iQ0xd6yL7WHBUYf6Wu_Qw978yyTKnQDjPDBA7wRBIKUqEz8ZPvIVgyGjTkHseMeILeMrvriQ-iCF9umEkccPedjSAwMzJM9S8g9MAnKVYw",
    ],
    description: "Jugo a base de leche de soja.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Ades de Naranja",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Ades",
    amount: 1000,
    Variety: "Juice",
    container: "Carton",
    images: [
      "https://lh3.googleusercontent.com/KpnYrZ5LWFv8vJUlioqK2KE4rk4vKG8aUrKq-N_NojDEh1bwLf65eUbMvNF1FcroWZ6xjY8qWHTcS0b5RzsEQCBaBKQTdV5lTSQLO043MA",
    ],
    description: "Jugo a base de leche de soja.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Ades con frutas tropicales",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Ades",
    amount: 1000,
    Variety: "Juice",
    container: "Carton",
    images: [
      "https://lh3.googleusercontent.com/kzRm1R6mZ3t2M8DS-uNBzt3K6_dGfUTNVKuzihd8lp9gSJLri3ao0J55_I3E2n5avrnvyoyjQWR7UTgageSFpOW-gdqPb8jxdpCp8N4-5Q",
    ],
    description: "Jugo a base de leche de soja.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Ades de Durazno",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Ades",
    amount: 1000,
    Variety: "Juice",
    container: "Carton",
    images: [
      "https://lh3.googleusercontent.com/Grf-_cfh7y4uudb_-EmpM6HDoT8wBvilYXdOh_PCl8xTIPk9fZtpMIdyUcGk5J2zJktPoX89AlPyNckYGJLOymGe4SA--Y_ZwiV9LxuJ",
    ],
    description: "Jugo a base de leche de soja.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Ades de Chocolate",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Ades",
    amount: 1000,
    Variety: "Juice",
    container: "Carton",
    images: [
      "https://lh3.googleusercontent.com/doXEr5GDmEDh3XNcdeFtM_rzQtlrEg0V2VDloCaJtZZMXR4UXu8n3nvlM2fOg-fK9xKESwsd9sgsnDE5CdgnCII73WPh0I12_9FHoAQ",
    ],
    description: "Jugo a base de leche de soja.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Pepsi",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Pepsi",
    amount: 1000,
    Variety: "Sugary Drink",
    container: "Lata",
    images: [
      "https://lh3.googleusercontent.com/lhdKE1bdBKAvPMfVSxB4Ah1FQDHQtePrGACMReGBzMYNl8N5CoGRDSq5Qwr6wUnY28o8dVnl4G2f0yOeQA5ahLPFYD9p8c8b1tolKLbC",
    ],
    description: "Encuentra Bebida Pepsi en botella.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 120,
    name: "Pritty",
    price: 3.25,
    stock: 10,
    type: "Drinks",
    brand: "Pritty",
    amount: 1000,
    Variety: "Sugary Drink",
    container: "Lata",
    images: [
      "https://lh3.googleusercontent.com/vSYtd5nHYMAzkLLwILMfeHaPA1tn7xbC-qAxGt7TW663AUOhVfDM7x_9Po6--tj_e2X9zV8GJcuUsc0WriHyrGdOVnP-5ysfUE95sdO1Cw",
    ],
    description: "Encuentra Pritty sprite en botella.",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 0,
  },
  {
    sells: 10,
    name: "Whisky Jack Daniels",
    price: 120.75,
    stock: 10,
    type: "Liqueur",
    brand: "Jack Daniels",
    amount: 700,
    Variety: "Blend",
    container: "Botella",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/jack-daniel_s-whisky-750-ml1-7ebaf76a524601abbf16660979325572-640-0.jpg",
    ],
    description:
      "Jack Daniel's Old No. 7 es suavizado gota por gota a través de una columna de 3mts de carbón artesanal de arce y luego se lo deja añejar en barriles de roble de primer uso, fabricados artesanalmente",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Whisky Johnnie Walker Black Label",
    price: 22.75,
    stock: 10,
    type: "Liqueur",
    brand: "Johnnie Walker",
    amount: 750,
    Variety: "Black Label",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/6queV6Fc71LRh8TcrO7fOeO0DpJT5-c-UtBb2bvPPJ6sX8cDOQe9LxMvjG2WOBBNZzKR_xeioj9WaM3Q92Lo2rQjApCflnqrGhR8kdrC",
    ],
    description: "Whisky Johnnie Walker Black Label",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Whisky Monkey Shoulder Blended Malt 700ml Whiskey Escoces",
    price: 27.75,
    stock: 10,
    type: "Liqueur",
    brand: "Monkey Shoulder",
    amount: 700,
    Variety: "Blended Malt",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/SViVcVmcwtUiXDSibFtN_oeAVPxctRTd2JafkkWg2GtREPYlDpLlbrVLAon9OII4hdZFNlnF9nFnBAO0ObNVhD0QHSr1KPLj5EPrP18O",
    ],
    description: "Whisky Monkey Shoulder Blended Malt 700ml Whiskey Escoces",
    ableDiscount: true,
    percentageDiscount: 12,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Whisky Old Parr De Luxe 750ml Whiskey Escoces Scotch Blended",
    price: 29.75,
    stock: 10,
    type: "Liqueur",
    brand: "Old Parr",
    amount: 750,
    Variety: "Blended Scotch",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/fH9xb4RQSokNelwB12OjE6xJkZHVr6RlWpfO3QSAyvmluF_p4RFjMZGYwGREU3oi52gAzHqZKDwZyLKLdXCHcuzfkhFHnBji5JSQ5AVbUw",
    ],
    description: "Whisky Old Parr De Luxe 750ml Whiskey Escoces Scotch Blended",
    ableDiscount: false,
    percentageDiscount: 0,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Whisky Famous Grouse Finest. Quirino Bebidas",
    price: 12.75,
    stock: 10,
    type: "Liqueur",
    brand: "The Famous Grouse",
    amount: 750,
    Variety: "BLEND",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/U1ArF2YKUU2uRl89nJkL-ttLS6tdrHtQ_24z378G67gq4J0Ci0LH48Z80R2nlSES9uf47Fl4PoAt_L6D7OdId-DaGf44n08eNBNSLZ53",
    ],
    description: "Whisky Famous Grouse Finest. Quirino Bebidas",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Whisky White Horse 750ml Fine Old Blended Scotch",
    price: 8.75,
    stock: 10,
    type: "Liqueur",
    brand: "White Horse",
    amount: 750,
    Variety: "Blended Scotch",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/aOR0Blhv6o6X0fHLPp3tOI9lNX6gW2kHC6OoUXBr3woTSDy_5dO3-IMy-Ac7AmAcaZKJu7-_VYL3vfxs-bzNDgS7Zyh_EjYVsU7NgWM",
    ],
    description: "Whisky White Horse 750ml Fine Old Blended Scotch",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Kit Jack Daniels N7 + Shot Jack + Chocolates - Pérez Tienda",
    price: 8.75,
    stock: 10,
    type: "Liqueur",
    brand: "Jack Daniels",
    amount: 50,
    Variety: "Bourbon",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/Op5xZJgPrrGopbbb1tmQkHCskYjSKwPQigBu6CAyUi-7aVDXNpmanzEVb7srBO2HEKpSDY6rpKKc6RujTCCcMbec4hAswTPNuCRpyXKV",
    ],
    description: "Kit Jack Daniels N7 + Shot Jack + Chocolates - Pérez Tienda",
    ableDiscount: true,
    percentageDiscount: 20,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Tequila Conquistador De Mexico 750 Cc",
    price: 43.75,
    stock: 10,
    type: "Tequila",
    brand: "Conquistador de Mexico",
    amount: 750,
    Variety: "Añejo",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/1htkQXJbHdBZvYvppm2ogV1LaudN5K6ZU5L1RYp0Iq9weDY8J9YG06Xd5HA4kZQ_ZQ6hHdvu5O3QrBnBvo4apGHzPfvv_EFb-ZdNJCum",
    ],
    description: "Tequila Conquistador De Mexico 750 Cc",
    ableDiscount: true,
    percentageDiscount: 14,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Tequila Corralejo Reposado 750ml. - Importado De Méjico",
    price: 12.75,
    stock: 10,
    type: "Tequila",
    brand: "Corralejo",
    amount: 750,
    Variety: "Reposado",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/C-NnRAn4JMUtGFHwQkPVjMzroBYpdAWw1JyC7c44yHKI6SEqQBTgDRceVw8jwMGxoqTu-q2GVOBe_XaKipGbUWRUFQ-6l6TNdYiO3K8",
    ],
    description: "Tequila Corralejo Reposado 750ml. - Importado De Méjico",
    ableDiscount: true,
    percentageDiscount: 14,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Tequila Gran Corralejo",
    price: 36.75,
    stock: 10,
    type: "Tequila",
    brand: "Corralejo",
    amount: 750,
    Variety: "ESPECIAL",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/lHCP1h1VJX3Lz3S485GG32Jh9dHC_roD_YjbeHxajuAyM9iURPCQ57l_YulzBExE2x9SZ0ohooX8QULvr25JdYz_XYMMDdeo7pq4N0ut",
    ],
    description: "Tequila Gran Corralejo",
    ableDiscount: true,
    percentageDiscount: 14,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Tequila Patron Silver En Estuche 750ml",
    price: 26.75,
    stock: 10,
    type: "Tequila",
    brand: "Patron",
    amount: 750,
    Variety: "Reposado",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/URh0OxPjX8JqUu2dGI9pC2RpuxczDOf424Zptwh6KHG7l257LjyH-Qxa3G083xTD0Rt5Z-NAkGYwVeGK6aHFbqXY31msv8-YU3Pq5TqU",
    ],
    description: "Tequila Patron Silver En Estuche 750ml",
    ableDiscount: true,
    percentageDiscount: 14,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Tequila Patron Silver En Estuche 750ml",
    price: 6.75,
    stock: 10,
    type: "Tequila",
    brand: "Patron",
    amount: 750,
    Variety: "Reposado",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/URh0OxPjX8JqUu2dGI9pC2RpuxczDOf424Zptwh6KHG7l257LjyH-Qxa3G083xTD0Rt5Z-NAkGYwVeGK6aHFbqXY31msv8-YU3Pq5TqU",
    ],
    description: "Tequila Patron Silver En Estuche 750ml",
    ableDiscount: true,
    percentageDiscount: 14,
    availability: true,
    alcoholContent: 43,
  },
  {
    sells: 10,
    name: "Tequila Corralejo Blanco 750cc",
    price: 24.75,
    stock: 10,
    type: "Tequila",
    brand: "Corralejo",
    amount: 750,
    Variety: "Reposado",
    container: "Botella",
    images: [
      "https://lh3.googleusercontent.com/o-DwLfYjRV_qFRd1We-StOtZSchyzicmcHau5fEuUX25Wo2GN2CW2VUzf1VUf_XUE4W8kJAbecfyn5DX2axGJMb0mhYoHFzc9pkj0WfM",
    ],
    description: "Tequila Corralejo Blanco 750cc",
    ableDiscount: true,
    percentageDiscount: 14,
    availability: true,
    alcoholContent: 43,
  },
];

module.exports = { productos };
