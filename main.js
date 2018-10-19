
fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    console.table(parsedFoods)
    let foodlist = document.querySelector("#foodlist")
    parsedFoods.forEach(foodElement => {
      let foodDiv = document.createElement("div")
      let foodCard = document.createElement("h2")
      foodCard.textContent = foodElement.name
      let foodCardType = document.createElement("p")
      let foodCardEth = document.createElement("p")
      foodCardType.textContent = foodElement.type
      foodCardEth.textContent = foodElement.ethnicity
      foodDiv.appendChild(foodCard)
      foodDiv.appendChild(foodCardType)
      foodDiv.appendChild(foodCardEth)
      foodlist.appendChild(foodDiv)
    });
  })