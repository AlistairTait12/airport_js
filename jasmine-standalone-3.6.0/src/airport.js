class Airport {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.hangar = [];
  }

  land(plane) {
    this.hangar.push(plane);
    return plane.flight_id + " successfully landed at " + this.name;
  }
}
