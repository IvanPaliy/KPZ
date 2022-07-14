function price_without_discount(amount) {
    return amount
}
function blackFriday(amount) {
    return amount * 0.5
}
function usedPrice(amount) {
    return amount * 0.9
}
class Album {
    constructor(discount) {
        this.discount = discount
        this.amount = 0
    }
    checkout() {
        return this.discount(this.amount)
    }
    setAmount(amount) {
        this.amount = amount
    }
}

const album = new Album(price_without_discount)
album.setAmount(100)
console.log(album.checkout())

const albumBF = new Album(blackFriday)
albumBF.setAmount(100)
console.log(albumBF.checkout())

const albumUSED = new Album(usedPrice)
albumUSED.setAmount(100)
console.log(albumUSED.checkout())
