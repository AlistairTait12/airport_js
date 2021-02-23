describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport("Gatwick", 5);
    plane = new Plane("MAK942");
  });

  describe('Check instance of class', function() {
    it('exists', function() {
      var heathrow = new Airport("Heathrow");
      expect(heathrow.name).toEqual("Heathrow");
    });
  });

  describe('#land', function() {
    it('informs air traffic controller when plane has landed', function() {
      expect(airport.land(plane)).toEqual("MAK942 successfully landed at Gatwick");
    });
  });

});
