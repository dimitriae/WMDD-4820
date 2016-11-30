
let books = [
  {bookId: 0, author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {bookId: 1, author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {bookId: 2, author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {bookId: 3, author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {bookId: 4, author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]

let users = [
    {userId: 0, name: 'owner'},
    {userId: 1, name: 'user1'},
    {userId: 2, name: 'user2'}
]

let borrow = [
    // {userId: 0, bookId: 0}
]

// Makes search by Author, Title or genre;
function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let aOptionSearch = document.getElementById('optionSearch').value

  // if the search type is author (a)
  if (aOptionSearch ===  'a') {
    var name = books.filter((x) => x.author.indexOf(aName) !== -1)  
  } else if (aOptionSearch === 't') {
  // if the search type is title (t)
    var name = books.filter((x) => x.title.indexOf(aName) !== -1)  
  } else if (aOptionSearch === 'g') {
  // if the search type is genre (g)
    var name = books.filter((x) => x.genre.indexOf(aName) !== -1)  
  }

  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {

      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre} - copies: ${x.copies}   `)
      listItem.appendChild(textnode)

      let newButton = document.createElement('button') //creates button
      textnode = document.createTextNode('Borrow') //gives name to button
      newButton.setAttribute('onclick', "borrowBook(" + x.bookId + ")") //allows book to be borrow by clicking the button
      newButton.appendChild(textnode)
      listItem.appendChild(newButton)

      document.getElementById('result').appendChild(listItem) //gives out the result

    })
  } else { //for if there no books with the name searched
    hideAllBooks('result')
    let listItem = document.createElement('li') //creates a li
    let textnode = document.createTextNode(`Sorry your search for ${aName} returned 0 books`)//that says this frase
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}

function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

//let borrow books
function borrowBook(pBookId) {
    let selectUser = document.getElementById('user').value
    let newBorrow = {userId: selectUser, bookId: pBookId}

    document.getElementById('message').innerHTML = ''
    if (books[pBookId].copies > 0){
        borrow.push(newBorrow)

        document.getElementById('message').innerHTML = 'Book Borrowed'//succes message

        books[pBookId].copies = books[pBookId].copies - 1 //for so the user cannot borrow books eternally
        authSearch()
    } else {
        document.getElementById('message').innerHTML = 'Book not Available'//fail message
    }

    document.getElementById('borrow').innerHTML = ''
    borrow.forEach((x) => {

      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`User ${users[x.userId].name} borrowed the book ${books[x.bookId].title}`)
      listItem.appendChild(textnode)

      document.getElementById('borrow').appendChild(listItem)

    })


}
