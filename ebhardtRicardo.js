class Usuario {

    constructor (nombre,apellido,libros,mascotas){

this.nombre = nombre;
this.apellido = apellido;
this.libros = [{nombre: 'El señor de los Anillos', autor: 'Tolkien'}, {nombre: 'Volver al Futuro', autor: 'Zemeckis'}];
this.mascotas = ['Pirata'];
console.log('Se instanció correctamente el objeto');
}

//Metodos:

getFullName() {
let fullName = [this.nombre,this.apellido];
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
  
 let onlyAutor = []; 
 for (let i = 0; i < this.libros.length; i++) {
 onlyAutor.push(this.libros[i].nombre);
 //console.log(onlyAutor);
}
return onlyAutor
}

}

usuario = new Usuario("Jose","Peñalosa",{nombre: "The Promised Neverland", autor: "Shirai"},"Valkyrya");

fullName = usuario.getFullName();
console.log(`el nombre del usuario es: ${fullName[0]} y su apellido es: ${fullName[1]}`);

usuario.addMascota('Dartanian');

let totalMascotas = usuario.countMascotas();
console.log(`El total de mascotas de usuario: ${totalMascotas}`);

usuario.addBook('Dragon Ball', 'Toriyama');

let bookNames = usuario.getBookNames();
console.log(bookNames); 
