class Libro {
    constructor(tituloP, ISBNP, autorP, numeroPainasP){
        this.titulo = tituloP;
        this.ISBN = ISBNP;
        this.autor = autorP;
        this.numeroPaginas = numeroPainasP;
    }

    
    get mostrarTitulo(){
        return this.titulo;
    }
    get mostrarISBN(){
        return this.ISBN;
    }
    get mostrarAutor(){
        return this.autor;
    }
    get mostrarNumeroPaginas(){
        return this.numeroPaginas;
    }
    set modificaTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }
    set modificarISBN(nuevoISBN){
        this.ISBNP = nuevoISBN;
    }
    set modificarAutor(nuevoAutor){
        this.autor = nuevoAutor;
    }
    set modificarNumeroPaginas(nuevoNuemeroPaginas){
        this.numeroPaginas = nuevoNuemeroPaginas;
    }

    mostrarLibro(){
        document.write(
            `El libro ${this.titulo} con ISBN  ${this.ISBN} creado por el Autor  ${this.autor} tiene ${this.numeroPaginas} paginas<br>`
        );
    }

}

let libro1 = new Libro("El escarabajo de oro", "1234", "Edgar Alan Poe", 2000);
let libro2 = new Libro("moby dick", "8456", "Herman Melville", 1000);


libro1.mostrarLibro();
libro2.mostrarLibro();
// document.write(libro1.mostrarNumeroPaginas);


if(libro1.mostrarNumeroPaginas > libro2.mostrarNumeroPaginas){
    document.write("El primer libro tiene mayor cantidad de hojas");
}else{
    document.write("El segundo libro tiene mayor cantidad de hojas");
}





