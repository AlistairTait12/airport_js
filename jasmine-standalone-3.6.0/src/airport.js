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

  take_off(plane) {
    let index = this.hangar.indexOf(plane.flight_id);
    if (index > -1) {
      this.hangar.splice(index, 1);
    }
    return plane.flight_id + " successfully taken off from " + this.name;
  }

  confirm_status(plane) {
    if (this.hangar.includes(plane.flight_id)) {
      return plane.flight_id + " is landed";
    } else {
      return plane.flight_id + " in flight";
    }
  }
}
