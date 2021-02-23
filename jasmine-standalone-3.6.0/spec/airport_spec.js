describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport("Gatwick", 5);
    plane = new Plane("MAK942");
  });

  describe('Check instance of class', function() {
    it('exists', function() {
      expect(airport.name).toEqual("Gatwick");
      expect(airport.capacity).toEqual(5)
    });
  });

  describe('#land', function() {
    it('informs air traffic controller when plane has landed', function() {
      expect(airport.land(plane)).toEqual("MAK942 successfully landed at Gatwick");
    });

    it('holds a plane', function() {
      airport.land(plane);
      expect(airport.hangar.length).toEqual(1);
    });
  });

  describe('#take_off', function() {
    it('informs air traffic controller when plane has taken off', function() {
      expect(airport.take_off(plane)).toEqual("MAK942 successfully taken off from Gatwick");
    });
  });

});
