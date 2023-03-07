"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalmassItems = 0;
        for (var i = 0; i < items.length; i++) {
            totalmassItems += items[i].massKg;
        }
        return totalmassItems;
    };
    Rocket.prototype.currentMassKg = function () {
        //this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        var totalMass = 0;
        totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
/*canAdd(item: Payload): boolean

Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg*/ 
