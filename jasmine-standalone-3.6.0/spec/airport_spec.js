describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport("Gatwick", 5);
    plane = new Plane("MAK942");
  });

  describe('Check instance of class', function() {
    it('exists', function() {
      var gatwick = new Airport();
      expect(gatwick).toBe(true);
    });
  });

  describe('#land', function() {
    it('informs air traffic controller when plane has landed', function() {
      expect(airport.land(plane)).toEqual("MAK942 has successfully landed at Gatwick");
    });
  });

});
