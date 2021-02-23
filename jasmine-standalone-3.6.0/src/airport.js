class Airport {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }

  land(plane) {
    return plane.flight_id + " successfully landed at " + this.name;
  }
}
