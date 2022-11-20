const booksList = [
  {
    author: "Douglas Crockford",
    imageLink: "images/img1_Douglas_Crockford.jpg",
    title: "JavaScript: The Good Parts: The Good Parts",
    price: 30,
    description:
      "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
  },
  {
    author: "David Herman",
    imageLink: "images/img2_David_Herman.jpg",
    title:
      "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    price: 22,
    description:
      "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
  },
  {
    author: "David Flanagan",
    imageLink: "images/img3_David_flanagan.jpg",
    title: "JavaScript: The Definitive Guide",
    price: 40,
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
  },
  {
    author: "Eric Elliott",
    imageLink: "images/img4_Eric_elliott.jpg",
    title: "Programming JavaScript Applications",
    price: 19,
    description:
      "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
  },
  {
    author: "Addy Osmani",
    imageLink: "images/img5_Addy_Osmani.jpg",
    title: "Learning JavaScript Design Patterns",
    price: 32,
    description:
      "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    author: "Boris Cherny",
    imageLink: "images/img6_Boris_Cherny.jpg",
    title: "Programming TypeScript",
    price: 28,
    description:
      "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
  },
  {
    author: "Alex Banks, Eve Porcello",
    imageLink: "images/img7_Alex_Banks_Eve_Porcello.jpg",
    title: "Learning React, 2nd Edition",
    price: 25,
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
  },
  {
    author: "Bradley Meck Alex Young and Mike Cantelon",
    imageLink: "images/img8_Bradley_Meck.jpg",
    title: "Node.js in Action",
    price: 38,
    description:
      "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
  },
  {
    author: "Kyle Simpson",
    imageLink: "images/img9_Kyle_Simpson.jpg",
    title: "You Don't Know JS Yet: Get Started",
    price: 26,
    description:
      "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
  },
  {
    author: "John Resig and Bear Bibeault",
    imageLink: "images/img10_John_Resig.jpg",
    title: "Secrets of the JavaScript Ninja",
    price: 33,
    description:
      "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
  },
];

///////////////////////////////////
// TODO Create page
let project = document.createElement("header");
project.classList.add("wrapper");
document.body.append(project);
const div = document.createElement("div");
project.appendChild(div);
const header = document.createElement("h1");
header.textContent = "Welcome to amazing book shop";
div.insertAdjacentElement("beforebegin", header);
header.classList.add("main_name");
const main = document.createElement("main");
main.classList.add("main_class");
document.body.append(main);
const bookSection = document.createElement("section");
bookSection.classList.add("bookSection_class");
main.appendChild(bookSection);

// TODO Create basket
// table

let bagTable = document.createElement("table");
let form = document.createElement("div");
let smallForm = document.createElement("div");

/// button
let btnSwapBook = document.createElement("button");
let btnSwapBookIMG = document.createElement("img");
btnSwapBookIMG.className = "btn-SwapBook-img";
btnSwapBookIMG.src = "images/bag.png";
let btnConfirm = document.createElement("button");
let bookCount = 0;
let btnSwapBookText = document.createTextNode("My Bag");
let bookCountText = document.createElement("p");
bookCountText.textContent = `${bookCount}`;
bookCountText.className = "book-count-text";
btnSwapBook.appendChild(btnSwapBookText);
btnSwapBook.appendChild(btnSwapBookIMG);
btnSwapBook.appendChild(bookCountText);
btnConfirm.textContent = "Confirm order";
btnConfirm.className = "btn-Bag_class";
btnSwapBook.className = "btn-SwapBook_class";
div.appendChild(btnSwapBook);
div.appendChild(form);
form.appendChild(smallForm);

//TODO Form for bag
//total price
let totalPrice = document.createElement("p");
totalPrice.className = "totalPrice_class";
let clearAll = document.createElement("button");
clearAll.className = "btn-Bag_class";
clearAll.innerText = "Clear All";
clearAll.onclick = () => {
  bagTable.innerHTML = "";
  bookCount = 0;
  resultPrice = 0;
  totalPrice.textContent = `Total: ${resultPrice}$`;
  bookCountText.textContent = `${bookCount}`;
  form.style.display = "none";
};
let resultPrice = 0;
let val = 0;
totalPrice.innerText = `Total: ${resultPrice}$`;
let total = document.createElement("p");
form.appendChild(totalPrice);
form.className = "form-content";
smallForm.className = "small-form_class";
let agent_1;
smallForm.setAttribute("id", agent_1);
form.style.cssText = `display: none;`;
form.appendChild(clearAll);
form.appendChild(btnConfirm);
smallForm.append(bagTable);
//TODO
btnSwapBook.onclick = function () {
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
};

//TODO Book section
for (let i of booksList) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper_class");
  bookSection.appendChild(wrapper);
  const image = document.createElement("img");
  image.classList.add("image_class");
  image.src = i.imageLink;
  image.setAttribute("alt", "book image");
  const infoCard = document.createElement("div");
  infoCard.classList.add("infoCard_class");
  const title = document.createElement("h4");
  title.classList.add("title_class");
  title.textContent = i.title;
  const author = document.createElement("h5");
  author.classList.add("author_class");
  author.textContent = i.author;
  const price = document.createElement("span");
  price.classList.add("price_class");
  price.textContent = `Price: $ ${i.price}`;
  // create description information
  let descriptionInformation = document.createElement("div");
  let btnInfoX = document.createElement("button");
  descriptionInformation.className = "description-information";
  btnInfoX.className = "btn-info-x";
  btnInfoX.textContent = "close";
  btnInfoX.addEventListener("click", hideInfo);
  function hideInfo() {
    disableShowMore = true;
    descriptionInformation.style.display = "none";
    btnShowMore.style.display = "block";
  }
  const descriptionPopUp = document.createElement("p");
  const titlePop = document.createElement("span");
  titlePop.textContent = i.title;
  titlePop.classList.add("titlePop_class");
  descriptionPopUp.innerText = i.description;
  descriptionInformation.appendChild(titlePop);
  descriptionInformation.appendChild(descriptionPopUp);
  descriptionInformation.appendChild(btnInfoX);
  const btnShowMore = document.createElement("button");
  btnShowMore.className = "btn_class";
  let ShowMoretext = document.createTextNode("Show more");
  btnShowMore.appendChild(ShowMoretext);
  const btnAddToBag = document.createElement("button");
  btnAddToBag.className = "btn_class";
  let AddToBagtext = document.createTextNode("Add to bag");
  btnAddToBag.appendChild(AddToBagtext);
  const btnContainer = document.createElement("div");
  btnContainer.className = "btn_container_class";
  btnContainer.appendChild(btnShowMore);
  btnContainer.appendChild(btnAddToBag);
  wrapper.append(image, infoCard);
  infoCard.append(title, author, price, descriptionInformation, btnContainer);

  // !Work btn Show More and Add to bag
  btnShowMore.addEventListener("click", showMore);
  function showMore() {
    if ((disableShowMore = true)) {
      disableShowMore = false;
      descriptionInformation.style.display = "block";
      btnShowMore.style.display = "none";
    }
  }
  btnAddToBag.addEventListener("click", addBookToBag);
  function addBookToBag() {
    let itemInform = document.createElement("div");
    let itemPrice = document.createElement("div");
    let itemTitle = document.createElement("div");
    let itemAuthor = document.createElement("div");
    let itemImage = document.createElement("img");
    itemInform.className = "item-info";
    itemPrice.className = "item-price";
    itemTitle.className = "item-title";
    itemAuthor.className = "item-author";
    itemImage.className = "item-img";
    let btnX = document.createElement("button");
    btnX.className = "btn-x";
    btnX.innerHTML = "X";
    itemPrice.innerHTML = price.textContent;
    itemTitle.innerHTML = title.textContent;
    itemAuthor.innerHTML = author.textContent;
    itemImage.src = i.imageLink;
    if (form.textContent.includes(price.textContent)) {
    } else {
      let insidePart = document.createElement("tr");
      insidePart.style.cssText = `display: flex; align-items: center;`;
      let titleTD = document.createElement("td");
      let btnXTD = document.createElement("td");
      let imageTD = document.createElement("td");
      let priceTD = document.createElement("td");
      imageTD.style.cssText = `align-self: stretch;`;
      imageTD.appendChild(itemImage);
      priceTD.appendChild(itemPrice);
      btnXTD.appendChild(btnX);
      titleTD.appendChild(itemTitle);
      titleTD.appendChild(itemAuthor);
      insidePart.appendChild(imageTD);
      insidePart.appendChild(titleTD);
      insidePart.appendChild(priceTD);
      insidePart.appendChild(btnXTD);
      bagTable.appendChild(insidePart);
      let arr = [];
      const kit = document.getElementsByClassName("item-price");
      bookCount = kit.length;
      bookCountText.textContent = `${bookCount}`;

      for (let i = 0; i < kit.length; i++) {
        arr.push(kit[i].textContent.replace("Price: $ ", ""));
      }
      let sumArr = arr.map(Number);
      total.textContent = sumArr.reduce((prev, curr) => prev + curr, 0);
      resultPrice = sumArr.reduce((prev, curr) => prev + curr, 0);
      totalPrice.textContent = `Total: ${resultPrice}$`;
      btnX.onclick = function () {
        val = parseInt(total.textContent) - parseInt(itemPrice.textContent);
        total.textContent = val.toString();
        totalPrice.textContent = `Total: ${
          resultPrice - parseInt(itemPrice.textContent)
        }`;
        totalPrice.textContent = `Total: ${val.toString()}$`;
        insidePart.remove();
        const kit = document.getElementsByClassName("item-price");
        bookCount = kit.length;
        bookCountText.textContent = `${bookCount}`;
      };
    }
  }
  // !way on delivery page
  btnConfirm.onclick = function () {
    location.href = "./order.html";
  };

  // TODO drag and drop
  for (let i of booksList) {
    wrapper.addEventListener("dragover", allowDrop);
    wrapper.addEventListener("drop", drop);
    function allowDrop(a) {
      a.preventDefault();
    }
  }
  let dragDrop = document.createElement("p");
  dragDrop.className = "drag-here-msg";
  wrapper.appendChild(dragDrop);
  dragDrop.visibility = "visible";
  wrapper.addEventListener("dragstart", drag);
  wrapper.addEventListener("dragend", dragEnded);
  function drag(a) {
    dragDrop.innerText = "DRAG & DROP here...";
    dragDrop.visibility = "visible";
  }
  function dragEnded(a) {
    dragDrop.innerText = "";
    dragDrop.visibility = "visible";
  }
  function drop(a) {
    let title2 = document.createElement("div");
    let author2 = document.createElement("p");
    let bookName2 = document.createElement("p");
    let image2 = document.createElement("img");
    let price2 = document.createElement("p");
    let btnX2 = document.createElement("button");
    price2.className = "item-price";
    bookName2.className = "item-title";
    author2.className = "item-author";
    image2.className = "item-img";
    image2.src = i.imageLink;
    author2.innerHTML = i.author;
    price2.innerHTML = price.textContent;
    bookName2.innerHTML = i.title;
    btnX2.innerText = "X";
    btnX2.className = "btn-x";

    if (form.textContent.includes(price2.textContent)) {
    } else {
      let insidePart2 = document.createElement("tr");
      insidePart2.style.cssText = `display: flex; align-items: center;`;
      let titleTD2 = document.createElement("td");
      let imageTD2 = document.createElement("td");
      let priceTD2 = document.createElement("td");
      let btnXTD2 = document.createElement("td");
      imageTD2.appendChild(image2);
      btnXTD2.appendChild(btnX2);
      title2.appendChild(bookName2);
      title2.appendChild(author2);
      titleTD2.appendChild(title2);
      priceTD2.appendChild(price2);
      insidePart2.appendChild(imageTD2);
      insidePart2.appendChild(titleTD2);
      insidePart2.appendChild(priceTD2);
      insidePart2.appendChild(btnXTD2);
      bagTable.appendChild(insidePart2);
      let arr = [];
      const kit = document.getElementsByClassName("item-price");
      bookCount = kit.length;
      bookCountText.textContent = `${bookCount}`;

      for (let i = 0; i < kit.length; i++) {
        arr.push(kit[i].textContent.replace("Price: $ ", ""));
      }
      let sumArr = arr.map(Number);
      total.textContent = sumArr.reduce((prev, curr) => prev + curr, 0);
      resultPrice = sumArr.reduce((prev, curr) => prev + curr, 0);
      totalPrice.textContent = `Total: ${resultPrice}$`;
      btnX2.onclick = () => {
        val = parseInt(total.textContent) + parseInt(price2.textContent);
        total.textContent = val.toString();
        totalPrice.textContent = `Total: ${
          resultPrice + parseInt(price2.textContent)
        }`;
        totalPrice.textContent = `Total: ${val.toString()}$`;
        insidePart2.remove();
        const kit = document.getElementsByClassName("item-price");
        bookCount = kit.length;
        bookCountText.textContent = `${bookCount}`;
      };
    }
    a.preventDefault();
  }
}
const footer = document.createElement("footer");
const footerDiv = document.createElement("div");
footerDiv.className = "footer-div_class";
const creator = document.createElement("p");
creator.className = "creator_class";
creator.innerText = "Created by Nataliia Boiko, November 2022";
footerDiv.appendChild(creator);
footer.appendChild(footerDiv);
document.body.appendChild(footer);
