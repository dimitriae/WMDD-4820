let books = [
	{author: 'Thomas Pynchon', title: 'Bleeding Edge'},
	{author: 'Haruki Murakami', title: '1Q84'},
	{author: 'John D MacDonald', title: 'Nightmare in Pink'},
	{author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'},
]

function authSearch () {
	let aName = document.getElementById('authorSearch').value
	let name = books.filter((x) => x.author === aName)
	try {
		document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
	}
	catch (err) {
		document.getElementById('result').innerHTML = 'Sorry no books by ' + aName
	}
}

function addbook (book){
	books.push(book);

}

function showAllBooks () {
	let listItem = document.createElement('li')
	let textnode = document.createTextNode('a book')
	listItem.appendchild(textnode)
	document.getElementById('allTheBooks').appendchild(listItem)
}
