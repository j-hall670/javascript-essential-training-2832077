// Book class

class Book {
  constructor(title, author, numPages, currentPage, finished) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.currentPage = currentPage;
    this.finished = finished;
  }

  changeCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }

  finishBook() {
    if (this.finished == false) this.finished = true;
    console.log(this.title, "finished");
  }
}

export default Book;
