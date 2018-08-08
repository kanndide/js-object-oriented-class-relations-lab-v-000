let store = {drivers: [], passengers: [], trips:[]}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {

	constructor(name) {
		this.name = name
		this.id = ++driverId
		store.drivers.push(this)
	};

	trips() {
		return store.trips.filter(trip => trip.driverId === this.id)
	};

	passengers() {
		// const array = []
		// for (let trip of this.trips()) {
		// 	array.push(store.passengers.find(passenger => passenger.id === trip.passengerId));
		// };
		// return array
		return this.trips().map(trip => store.passengers.find(passenger => passenger.id === trip.passengerId))
	};

};

class Passenger {

	constructor(name) {
		this.name = name
		this.id = ++passengerId
		store.passengers.push(this)
	};

	trips() {
		return store.trips.filter(trip => trip.passengerId === this.id)
	};

	drivers() {
		// for (let trip of this.trips()) {
		// 	return store.drivers.find(driver => driver.id === trip.driverId)
		// };
		return this.trips().map(trip => store.drivers.find(driver => driver.id === trip.driverId))
	};

};

class Trip {

	constructor(driver, passenger){
		this.driverId = driver.id
		this.passengerId = passenger.id
		this.id = ++tripId
		store.trips.push(this)
	};

	driver() {
		return store.drivers.find(driver => driver.id === this.driverId);
	};

	passenger() {
		return store.passengers.find(passenger => passenger.id == this.passengerId)
	};


};