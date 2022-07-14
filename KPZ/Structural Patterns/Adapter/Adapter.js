class USB3_0 {
    usb3_0_connect () {
        console.log("USB 3.0 connected")
    }
}
class USB_C {
    usb_c_connect () {
        console.log("USB C connected")
    }
}
class USB_C_Adapter {
    constructor(connector) {
        this.connector = connector
    }
    usb3_0_connect() {
        this.connector.usb_c_connect()
    }
}
class Connector {
    connect(connector) {
        connector.usb3_0_connect()
    }
}
// const myConnector = new Connector()
// const oldConnector = new USB3_0()
//
// myConnector.connect(oldConnector)



const myConnector = new Connector()
const connectorAdapter = new USB_C()

myConnector.connect(connectorAdapter)