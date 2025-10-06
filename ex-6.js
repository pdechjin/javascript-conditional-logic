let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  if (bookName.includes("Beauty")){
    favoriteBooks.push(bookName);
  return;
  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);




//Exercise #6 : Favorite Books

//กำหนดให้ Function ที่ชื่อว่า addFavoriteBook รับ Parameter 1 ตัวชื่อว่า bookName
//โดย Function นี้ใช้ในการเพิ่มชื่อหนังสือเข้าไปใน Array ที่มีชื่อว่า favoriteBooks
//เงื่อนไขคือ
//ชื่อหนังสือต้องมีคำว่า “Beauty” ถึงจะถูกเพิ่มเข้าไปใน favoriteBooks ได้
//หากชื่อหนังสือไม่มีคำว่า “Beauty” ชื่อหนังสือนั้นจะไม่ถูกเพิ่มเข้าไปใน favoriteBooks

//Copy
// Exercise #6: Favorite Books
//let favoriteBooks = [];

//function addFavoriteBook(bookName) {
  // Start coding here !
//}

// Example case
//addFavoriteBook("Let Me Tell You What I Mean");
//addFavoriteBook("Life Among the Terranauts");
//addFavoriteBook("The Beauty of Living Twice");
//addFavoriteBook("Black Beauty");
//addFavoriteBook("Monstrous Beauty");

// ผลลัพธ์ที่ควรได้จาก Example case
//console.log(favoriteBooks);
// ["The Beauty of Living Twice", "Black Beauty", "Monstrous Beauty"]
