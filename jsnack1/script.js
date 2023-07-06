

const nameInvited = ["Marco", "Giovanni", "Paolo", "Francesca", "Ilaria", "Lucia"]
const surnameInvited = ["Bianchi", "Rossi", "Verdi", "Gialli", "Pippo", "Pluto"]
let nameRandom = ""
let surnameRandom = ""

document.getElementById("generateInvited").addEventListener("click", function () {

    for (i = 0; i < nameInvited.length; i++) {
        const currentNameInvited = nameInvited[i]
        const numRandom = Math.floor(Math.random() * 6)
        nameRandom = nameInvited[numRandom]
    }

    console.log(nameRandom)

    for (i = 0; i < surnameInvited.length; i++) {
        const currentSurnameInvited = surnameInvited[i]
        const numRandom = Math.floor(Math.random() * 6)
        surnameRandom = surnameInvited[numRandom]
    }

    console.log(surnameRandom)

    const fakeInvited = nameRandom + " " + surnameRandom
    console.log(fakeInvited)
    document.getElementById("fake-invited").innerHTML = fakeInvited

    document.getElementById("addInvitedToList").addEventListener("click", function () {
        newListInvited.push(fakeInvited)

        document.getElementById("new-list-invited").innerHTML = newListInvited

    })

})

const newListInvited = []
console.log(newListInvited)






