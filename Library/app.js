let books = [
	{author: 'Thomas Pynchon', title: 'Bleeding Edge'},
	{author: 'Haruki Murakami', title: '1Q84'},
	{author: 'John D MacDonald', title: 'Nightmare in Pink'},
	{author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'},
]

function authSearch () {
    document.getElementById('result').innerHTML = ''
    let aName = document.getElementById('authorSearch').value
    let regExpression = new RegExp(aName.toUpperCase())
    let resultCount = 0
    books.forEach((x) => {
        if (regExpression.test(x.author.toUpperCase())){
            let listItem = document.createElement('li')
            let textNote = document.createTextNode(x.title)
            listItem.appendChild(textNode)
            document.getElementById('result').appendChild(listItem)
            resultCount = resultCount + 1
        }
    })
    if (resultCount === 0) {
        document.getElementById('result').innerHTML = 'Sorry no books by ' + aName
    }
    
//    catch (err) {
//		document.getElementById('result').innerHTML = 'Sorry no books by ' + aName
//	}
}

function addBook (){
    let book = {author: document.getElementById('bookAuthor').value, title: document.getElementById('bookTitle').value}
	books.push(book);

}

function showAllBooks () {
    
    document.getElementById('allTheBooks').innerHTML = " ";
for (var i=0; i < books.length; i++)  {  
	let listItem = document.createElement('li')
	let textnode = document.createTextNode('a book')
	listItem.appendChild(textnode)
	document.getElementById('allTheBooks').appendChild(listItem)
}
    }
