describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('Check instance of class', function() {
    it('exists', function() {
      var gatwick = new Airport();
      expect(gatwick).toBe(true);
    });
  });

  describe('#land', function() {
    it('informs air traffic controller when plane has landed', function() {
      expect(airport.land(plane)).toEqual("");
    });
  });

});