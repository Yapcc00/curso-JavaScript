const _private = new WeakMap();

class Book {
    constructor(title, author, price) {
        const properties = {
            _title: title,
            _author: author,
            _price: price,
        }

        _private.set(this, { properties });
    }

    //obtiene el titulo de un libro
    get title() {
        return _private.get(this).properties['_title'];
    }


    //modified el titulo de un libro
    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    //obtiene el author de un libro
    get author() {
        return _private.get(this).properties['_author'];
    }


    //modified el author de un libro
    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }


    /**PRECIO  */

    //obtiene el author de un libro
    get price() {
        return _private.get(this).properties['_price'];
    }


    //modified el price de un libro
    set price(nrePrice) {
        return _private.get(this).properties['_price'] = nrePrice;
    }
}

//se crea una clase aparte para los comics, pero se heredan algunas propiedades de book y eso se hace con 'Extends'
class Comic extends Book {

    constructor(name, author, price, illustrators) {
        super(name, author, price);
        //agrega nuevas funcionalidades
        this.illustrators = illustrators;
    }
    
    addIlustrator(newIllustrator = []){
        this.illustrators.push(newIllustrator)
    }

}

//Instancia  de Book
const book1 = new Book('1984', 'Go', 350);

const comic1 = new Comic('the killing Joke', 'A,M', 412, ['Y.A', 'C.P'])



console.log(book1.title);
console.log(comic1.price)
