class Album {
    constructor () {
        this.artist = "Who?"
        this.name = "What?"
        this.songs_count = "How many?"
        this.rating = "???"
    }
}
class Builder {
    constructor() {
        this.Album = new Album()
    }
    addArtist(artist) {
        this.Album.artist = artist
        return this
    }
    addName(name) {
        this.Album.name = name
        return this
    }
    addSong_Count (song_count) {
        this.Album.songs_count = song_count
        return this
    }
    addRating(rating) {
        this.Album.rating = rating
        return this
    }
    build() {
        return this.Album
    }
}

const album1 = new Builder().addArtist('Krechet').addName('Незвана вечеря').addSong_Count(6).addRating(5)
const album2 = new Builder().addArtist('Krechet').addSong_Count(6).addRating(5)
const album3 = new Builder().addArtist('Krechet')
console.log(album1)
console.log(album2)
console.log(album3)