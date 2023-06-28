const _private = new WeakMap();

// Clase Book (Libro)
class Book {
    constructor(title, author, price) {
        const properties = {
            _title: title,
            _author: author,
            _price: price,
        }

        _private.set(this, { properties });
    }

    // Obtiene el título de un libro
    get title() {
        return _private.get(this).properties['_title'];
    }

    // Modifica el título de un libro
    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    // Obtiene el autor de un libro
    get author() {
        return _private.get(this).properties['_author'];
    }

    // Modifica el autor de un libro
    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    // Obtiene el precio de un libro
    get price() {
        return _private.get(this).properties['_price'];
    }

    // Modifica el precio de un libro
    set price(newPrice) {
        return _private.get(this).properties['_price'] = newPrice;
    }
}

// Clase Comic (Cómic) que hereda propiedades de Book (Libro)
class Comic extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price);
        // Agrega nuevas funcionalidades
        this.illustrators = illustrators;
    }

    addIlustrator(newIllustrator = []) {
        this.illustrators.push(newIllustrator);
    }
}

// Clase ShoppingCart (Carrito de compras)
class ShoppingCart {
    constructor() {
        this.product = [];
    }

    // Agrega productos al carrito
    addProduct(amount, price) {
        this.product.push(...Array(amount).fill(price));
    }

    // Muestra los productos del carrito
    showProduct() {
        console.log(this.product);
    }

    // Calcula el total de la compra
    calcTotal() {
        return this.product
            .map(price => price)
            .reduce((accumulator, price) => accumulator + price, 0);
    }

    // Imprime el ticket de compra
    printTicket() {
        console.log(`Total a pagar: ${ this.calcTotal() } `);
    }
}

// Instancias de Book y Comic
const book1 = new Book('1984', 'Go', 350);
const comic1 = new Comic('The Killing Joke', 'A,M', 412, ['Y.A', 'C.P']);

// Instancia de ShoppingCart
const cart = new ShoppingCart();

// Agregar productos al carrito
cart.addProduct(3, comic1.price);
cart.addProduct(3, book1.price);

// Mostrar productos en el carrito
cart.showProduct();

// Imprimir ticket de compra
cart.printTicket();
