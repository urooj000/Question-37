"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
class Shirt {
    constructor(size = "large", message = "I love PAkistan") {
        this.size = size;
        this.message = message;
    }
    displayShirtInfo() {
        console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
}
function make_shirt(size = "medium", message = "I love Karachi") {
    return new Shirt(size, message);
}
const largeShirt = make_shirt();
largeShirt.displayShirtInfo();
const mediumShirt = make_shirt("medium");
mediumShirt.displayShirtInfo();
const customShirt = make_shirt("small", "Pakistan Zindabad");
customShirt.displayShirtInfo();
