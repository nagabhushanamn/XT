


let hotel = {
    getFoodSync() {
        // 
        return "biryani"
    },
    getFoodAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log("resolving food promise...");
                resolve('biryani')
            }, 3000);
        });
    }
};

module.exports = hotel;