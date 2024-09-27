import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

const camion1 = new Camion("rojo", "Iveco", 2002);
const camion2 = new Camion("negro", "Scania", 2019);
const camion3 = new Camion("blanco", "Volvo", 2019);

const moto1 = new Moto("azul", "Suzuki", 2014);
const moto2 = new Moto("rojo", "Motomel", 2019);
const moto3 = new Moto("negra", "Bmw", 2024);

const auto1 = new Auto("rojo", "Chevrolet", 2011);
const auto2 = new Auto("gris", "Volkswagen", 2013);
const auto3 = new Auto("blanco", "Ford", 2016);

const registro = new RegistroAutomotor();

registro.agregarAuto(auto1);
registro.agregarAuto(auto2);
registro.agregarAuto(auto3);
// --------------------------------------
registro.agregarMoto(moto1);
registro.agregarMoto(moto2);
registro.agregarMoto(moto3)
// --------------------------------------
registro.agregarCamion(camion1);
registro.agregarCamion(camion2);
registro.agregarCamion(camion3);
// --------------------------------------
console.log(registro.getInfoRegistro());

registro.darDeBajaCamion(camion2);
console.log(registro.getInfoRegistro());
