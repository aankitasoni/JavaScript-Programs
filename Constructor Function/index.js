function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper(20, "Tom", ["bedroom", "bathroom"]);
houseKeeper1.clean();
console.log(houseKeeper1.name);
