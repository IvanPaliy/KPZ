function musicProducer(artist) {
    return artist === "tyler" ? tylerFac : babyFac
}
function tylerFac () {
    return new TylerAlbum()
}
function babyFac () {
    return new BabyKeemAlbum()
}
class TylerAlbum {
    info() {
        return "IGOR"
    }
}
class BabyKeemAlbum {
    info() {
        return "The Melodic Blue"
    }
}

const produce1 =  musicProducer("baby keem")
const produce2 =  musicProducer("tyler")
const album1 = produce1()
const album2 = produce2()
console.log(album1.info())
console.log(album2.info())
