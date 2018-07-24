var firstName = localStorage.getItem('firstName');
var totalBudget = localStorage.getItem('totalBudget');
var budgetItemCar = localStorage.getItem('budgetItemCar');
var budgetItemHouse = localStorage.getItem('budgetItemHouse');
var budgetItemApartment = localStorage.getItem('budgetItemApartment');
var budgetItemPersonal = localStorage.getItem('budgetItemPersonal');
var budgetItemClothes = localStorage.getItem('budgetItemClothes');
var budgetItemFood = localStorage.getItem('budgetItemFood');
var budgetItemSports = localStorage.getItem('budgetItemSports');
var bt = [];
var amt = [];
var initStr ="firstName(" + firstName + ")." + "totalBudget(totBudget," + totalBudget + ")."
+"budgetItem(budgetItemCar, " + budgetItemCar + ")." + "budgetItem(budgetItemHouse, " + budgetItemHouse + ")."
+ "budgetItem(budgetItemApartment, " + budgetItemApartment + ")." + "budgetItem(budgetItemPersonal, " + budgetItemPersonal + ")."
+ "budgetItem(budgetItemClothes, " + budgetItemClothes + ")." + "budgetItem(budgetItemFood, " + budgetItemFood + ")."
+ "budgetItem(budgetItemSports, " + budgetItemSports + ").";


function show(){
  return function(answer){
    if(pl.type.is_substitution(answer)){
      var value = answer.lookup("X");
      var name = answer.lookup("Y");
      bt.push(name.id);
      amt.push(value.value);
    }
  };
}


function hundredDollarClub(){
  bt = [];
  amt = [];
  var session = pl.create(1000);
  session.consult(initStr);
  session.query("budgetItem(Y, X), X =< 100.");
  session.answers(show(), 1000);
  console.log(bt);

  if (bt != []){
    var hundredDollarClubHTML = document.createElement("div");
    var htmlClass = document.createAttribute("class");
    var htmlID = document.createAttribute('id');
    var newP = document.createElement("P");

    htmlID.value="hdcP";
    newP.setAttributeNode(htmlID);
    newP.innerHTML="$ Hundred Dollar Club $";
    hundredDollarClubHTML.appendChild(newP);
    var pg = document.querySelector(".page");
    console.log(pg);
    pg.appendChild(hundredDollarClubHTML);

    for(var i=0; i <= amt.length; i++){
      var newImg = document.createElement("img");
      var htmlSrc = document.createAttribute('src');
      var htmlWidth = document.createAttribute('width');
      htmlWidth.value = "100px";
      newImg.setAttributeNode(htmlWidth);
      if(amt[i] != 0){
        switch (String(bt[i])) {
          case "budgetItemCar":
              htmlSrc.value = "./reportImgs/car.jpg"
              newImg.setAttributeNode(htmlSrc);
            break;
          case "budgetItemHouse":
              htmlSrc.value = "./reportImgs/house.jpg"
              newImg.setAttributeNode(htmlSrc);
            break;
          case "budgetItemApartment":
              htmlSrc.value = "./reportImgs/Apartment.jpg"
              newImg.setAttributeNode(htmlSrc);
            break;

          case "budgetItemPersonal":
              htmlSrc.value = "./reportImgs/personal.png"
              newImg.setAttributeNode(htmlSrc);
            break;
          case "budgetItemClothes":
              htmlSrc.value = "./reportImgs/clothes.jpg"
              newImg.setAttributeNode(htmlSrc);
            break;
          case "budgetItemFood":
              htmlSrc.value = "./reportImgs/food.jpg"
              newImg.setAttributeNode(htmlSrc);
            break;
          case "budgetItemSports":
              htmlSrc.value = "./reportImgs/sports.png"
              newImg.setAttributeNode(htmlSrc);
            break;
        }
        hundredDollarClubHTML.appendChild(newImg);
      }
    }
  }


}

function totalSpent(){
  bt = [];
  amt = [];
  var session = pl.create(1000);
  session.consult(initStr);
  session.query("totalBudget(Y, X).");
  session.answers(show(), 1000);
  session.query("budgetItem(Y, X).");
  session.answers(show(), 1000);

  if(bt != []){
    var totalExpenseDiv = document.createElement("div");
    var barChartDiv = document.createElement("div");
    var budgetDiv = document.createElement("div");
    var htmlClass = document.createAttribute("class");
    var htmlID = document.createAttribute('id');
    var newP = document.createElement("P");

    htmlID.value="budgetContainer";
    htmlClass.value="budgetContainer";
    budgetDiv.setAttributeNode(htmlClass);
    budgetDiv.setAttributeNode(htmlID);
    var pg = document.querySelector(".page");
    console.log(pg);
    pg.appendChild(budgetDiv);

    htmlID = document.createAttribute('id');
    htmlClass = document.createAttribute("class");
    htmlClass.value="budgetContainer";
    htmlID.value="totalExpenses"
    totalExpenseDiv.setAttributeNode(htmlID);
    totalExpenseDiv.setAttributeNode(htmlClass);
    budgetDiv.appendChild(totalExpenseDiv);

    htmlID = document.createAttribute('id');
    htmlClass = document.createAttribute("class");
    htmlClass.value="budgetContainer";
    htmlID.value="barChart" + String(i);
    barChartDiv.setAttributeNode(htmlID);
    barChartDiv.setAttributeNode(htmlClass);
    budgetDiv.appendChild(barChartDiv);



    console.log(bt);
    for(var i = 0; i <= bt.length - 1; i++){
      newP = document.createElement("P");
      if (i == 0){
        newP.innerHTML = "Total Budget: $" + (String(amt[i]));
      }
      else if(i == 1 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on Car: $" + String(amt[i]);
      }
      else if(i == 2 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on House: $" + String(amt[i]);
      }
      else if(i == 3 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on Apartment: $" + String(amt[i]);
      }
      else if(i == 4 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on Personal: $" + String(amt[i]);
      }
      else if(i == 5 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on Clothes: $" + String(amt[i]);
      }
      else if(i == 6 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on Food: $" + String(amt[i]);
      }
      else if(i == 7 && amt[i] != "0"){
        newP.innerHTML = "Total Spent on Sports: $" + String(amt[i]);
      }
      totalExpenseDiv.appendChild(newP);
    }
  }
  hundredDollarClub();
}
