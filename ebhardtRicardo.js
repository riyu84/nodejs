class Usuario {

    constructor (nombre,apellido,libros,mascotas){

this.nombre = nombre;
this.apellido = apellido;
this.libros = libros;
this.mascotas = mascotas;
console.log('Se instanció correctamente el objeto');
}

//Metodos:

getFullName() {
let fullName = "El nombre es: "+this.nombre+" "+this.apellido+"";
return fullName
}

addMascota(nombreMascota){
this.mascotas.push(nombreMascota);
}

countMascotas(){
return this.mascotas.length;
}

addBook(titulo,nombreAutor){
this.libros.push({nombre: titulo, autor: nombreAutor});
}

getBookNames(){
  
 let onlyNames = []; 
 for (let i = 0; i < this.libros.length; i++) {
 onlyNames.push(this.libros[i].nombre);
 
}
return onlyNames
}

}

const usuario = new Usuario("Jose","Peñalosa",[{nombre: "The Promised Neverland", autor: "Shirai"},{nombre: "El señor de los Anillos", autor: "Tolkien"}],["Valkyrya", "Enya"]);

console.log(usuario.getFullName());

usuario.addMascota('Dartanian');

let totalMascotas = usuario.countMascotas();
console.log(`El total de mascotas de usuario: ${totalMascotas}`);

usuario.addBook('Dragon Ball', 'Toriyama');

let bookNames = usuario.getBookNames();
console.log(bookNames);