//Book class
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '45322653'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '45322654'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-small delete">X</a></td>
        `;

        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';

    }
    
}

//Store class

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add Book
//listen for submit event in form
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //prevent default submit
    e.preventDefault();

    //register input values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instantiate new Book object
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    UI.clearFields();
})

//Event: Delete Book
document.querySelector('#book-list').addEventListener('click', (e)=>{

    UI.deleteBook(e.target);
})