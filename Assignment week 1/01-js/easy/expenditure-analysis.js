/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totals=[];
  for(let i=0;i<transactions.length;i++){
    let current=transactions[i];
    if(!totals[current.category]){
      totals[current.category]=current.price;
    }
    else{
      totals[current.category]+=current.price;
    }
  }
  let arr=[];
  for(const category in totals){
    arr.push({category:category,totalSpent:totals[category]})
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;