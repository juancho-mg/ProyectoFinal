//Catalogo de aspersores
//Segun el aspersor elegido se dimensionará el sistema

//Catalogo de Aspersores
const catalogoAspersores = []
//Constructor de aspersores
class Aspersor {
  constructor(id, categoria, nombre, precio, radio, caudalM3Hora, diametroBoquilla, img) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.radio = radio;
    this.caudalM3Hora = caudalM3Hora;
    this.diametroBoquilla = diametroBoquilla;
    this.img = img;
  }
}

const aspersor1 = new Aspersor (10011, "aspersores", "PGJ", 2.5, 4.3, 0.13, 0.5,"PGJ.jpg")
const aspersor2 = new Aspersor (20022, "aspersores", "PGP-ADJ", 3, 6.4, 0.1, 0.75, "PGP-ADJ.jpg")
const aspersor3 = new Aspersor (30033, "aspersores", "PGP-ULTRA", 2.6, 4.9, 0.07, 0.75, "PGP-ULTRA.jpg")
const aspersor4 = new Aspersor (40044, "aspersores", "SRM", 2, 4, 0.08, 0.5, "SRM.jpg")
const aspersor5 = new Aspersor (50055, "aspersores", "I-20", 3, 4.9, 0.07, 0.75, "I-20.jpg")
const aspersor6 = new Aspersor (60066, "aspersores", "I-25", 6, 11.9, 0.82, 1, "I-25.jpg")
const aspersor7 = new Aspersor (70077, "aspersores", "I-40", 7, 13.1, 1.63, 1, "I-40.jpg")
const aspersor8 = new Aspersor (80088, "aspersores", "I-80", 9, 19.2, 4.59, 1.5, "I-80.jpg")
const aspersor9 = new Aspersor (90099, "aspersores", "I-90", 12, 22.3, 6.7, 1.5, "I-90.jpg")
const aspersor10 = new Aspersor (10010, "aspersores", "GT-880", 15, 14.9, 3.23, 1.5, "GT-880.jpg")
const aspersor11 = new Aspersor (11011, "aspersores", "GT-885", 13, 11.3, 2.02, 1, "GT-885.jpg")
const aspersor12 = new Aspersor (12012, "aspersores", "GT-835", 10, 5.5, 0.43, 0.75, "GT-835.jpg")
const aspersor13 = new Aspersor (13013, "aspersores", "G-995", 18, 20.1, 6.7, 1.5, "G-995.jpg")
const aspersor14 = new Aspersor (14014, "aspersores", "G-990", 20, 22.3, 6.93, 1.5, "G-990.jpg")
const aspersor15 = new Aspersor (15015, "aspersores", "G-75-B", 15, 14.3, 1.75, 1, "G-75-B.jpg")
const aspersor16 = new Aspersor (16016, "aspersores", "G-70-B", 17, 16.2, 2.95, 1.5, "G-70-B.jpg")

catalogoAspersores.push(aspersor1,aspersor2,aspersor3,aspersor4,aspersor5,aspersor6,aspersor7,aspersor8,aspersor9,aspersor10,aspersor11,aspersor12,aspersor13,aspersor14,aspersor15,aspersor16)

console.log(catalogoAspersores)

//Catalogo de controladores
let catalogoControllers = []
//Constructor de controladores
class Controller {
  constructor(id, categoria, nombre, precio, maxEstaciones) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.maxEstaciones = maxEstaciones;
  }
}

const controller1 = new Controller (1, "controllers", "ECO LOGIC", 90, 6)
const controller2 = new Controller (2, "controllers", "X-CORE", 110, 8)
const controller3 = new Controller (3, "controllers", "X2", 260, 14)
const controller4 = new Controller (4, "controllers", "PRO-C", 320, 32)

catalogoControllers.push(controller1,controller2,controller3,controller4)

console.log(catalogoControllers)

//Catalogo de Valvulas
const catalogoValvulas = []
//Constructor de Valvulas
class Valvula {
  constructor(id, categoria, nombre, material, precio, caudalM3Hora) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.material = material;
    this.precio = precio;
    this.caudalM3Hora = caudalM3Hora;
  }
}

const valve1 = new Valvula (1, "valvulas", "PGV-JAR-TOP", "plástico", 22, 9)
const valve2 = new Valvula (2, "valvulas", "PGV", "plástico", 27, 34)
const valve3 = new Valvula (3, "valvulas", "ICV", "plástico", 78, 68)

catalogoValvulas.push(valve1,valve2,valve3)

console.log(catalogoValvulas)