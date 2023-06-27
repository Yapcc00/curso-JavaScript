class Book {
    constructor(title, author, price) {
        this._title = title;
        this._author = author;
        this._price = price;

    }
}

//Instancia  de Book
const book1 = new Book('1984', 'Go', 350);

console.log(book1._title);
console.log(book1._author);
console.log(book1._price);