class Builder {
    build() {
        this.createName()
        this.createSongs()
        this.realiseAlbum()
    }
}
class TylerBuilder extends Builder {
    createName() {
        console.log('Flower Boy')
    }
    createSongs() {
        console.log('1.Who Dat Boy? 2.See You Again!')
    }
    realiseAlbum() {
        console.log('Album realised!')
    }
}
class KendrickBuilde extends Builder {
    createName() {
        console.log('DAMN.')
    }
    createSongs() {
        console.log('1.HUMBLE. 2.DNA.')
    }
    realiseAlbum() {
        console.log('Album realised!')
    }
}

const flowerBoy = new TylerBuilder()
const DAMN = new KendrickBuilde()
flowerBoy.build()
DAMN.build()