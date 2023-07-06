const shoppingList1 = ["pasta", "carne", "pesce", "merende", "uova", "farina"]
const shoppingList2 = ["frutta", "verdura", "giornale", "pane"]

console.log(shoppingList1.length)
console.log(shoppingList2.length)

for (i = 0; i < shoppingList1.length; i++) {
    const itemList1 = shoppingList1[i]
    console.log(itemList1)

    if (shoppingList1.length > shoppingList2.length) {
        shoppingList2.push(itemList1)
    }
}

for (i = 0; i < shoppingList2.length; i++) {
    const itemList2 = shoppingList2[i]
    console.log(itemList2)
    
    if (shoppingList1.length < shoppingList2.length) {
        shoppingList1.push(itemList2)
    } 
}

console.log(shoppingList1)
console.log(shoppingList2)

console.log(shoppingList1.length)
console.log(shoppingList2.length)