class DoorAccess {
    open() {
        console.log("Opening door")
    }
    close() {
        console.log("Closing door")
    }
}
class CheckPassword {
    constructor(door) {
        this.door = door
    }
    open(password) {
        if(this.authenticate(password)) {
            this.door.open()
        }else {
            console.log("Access denied")
        }
    }
    authenticate (password) {
        return password === 412412
    }
    close() {
        this.door.close()
    }
}
const door = new CheckPassword(new DoorAccess())
door.open(412413)
door.open(412412)
door.close()
