let url = "https://api.thecatapi.com/v1/images/search"
let searchUrl = "https://api.thecatapi.com/v1/images/search?category_ids="
let randomButton = document.querySelector(".randomButton");
console.log(randomButton);
let searchButton = document.querySelector(".searchButton");
console.log(searchButton);
let input = document.querySelector(".input");
console.log(input);

let image = document.querySelector('.randomCat');
console.log(image.innerHTML);
let categoryCatImage = document.querySelector('.categoryCat');
console.log(categoryCatImage.innerHTML);


function handleData(data) {
  image.innerHTML = `<img src="${data[0].url}" class="randomCatImage">`
}

function handleDataTwo(data) {
  categoryCatImage.innerHTML = `<img src="${data[0].url}" class="categoryCatImage">`
}

  //.then(data=> console.log(data))
  //.then(data=> randoKitty.addEventListener('click', ))


  randomButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("random was clicked")
    fetch(url, {
      headers: {
        "x-api-key": '7ccd4d77-9902-4752-bee6-ec5ea35ef3b2'
      }
    })
      .then(response=> response.json())
      .then(data=> handleData(data))
  })

  searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("search was clicked")
    console.log(input.value)
    fetch(searchUrl + input.value, {
      headers: {
        "x-api-key": '7ccd4d77-9902-4752-bee6-ec5ea35ef3b2'
      }
    })
      .then(response=> response.json())
      .then(data=> handleDataTwo(data))
  })


//image[0].outerHTML = `<img src="${data.url}" class="randomCatImage">`
//let image = document.querySelectorAll('img');
