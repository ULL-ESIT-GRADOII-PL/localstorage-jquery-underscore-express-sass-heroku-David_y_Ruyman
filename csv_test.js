var expect = chai.expect;

 describe("Comma Separated Values", function () {
   //Sinon sandbox variable
   var mysandbox;

   beforeEach(function() {
     mysandbox = sinon.sandbox.create();
     mysandbox.stub(window.console, "error");
     mysandbox.stub(window.console, "log");
   });

   afterEach(function() {
     mysandbox.restore();
   });

   describe("funcion calculate", function() {
     it("Debería poderse introducir una cadena y que sea aceptada.", function() {
       var cadena = '"Prueba"';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal('Prueba');
     });

     it("Prueba con comas a los lados", function() {
       var cadena = '",Prueba,"';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal(',Prueba,');
     });

     it("Prueba con espacios a los lados", function() {
       var cadena = '" hola "';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal(' hola ');
     });
   });
 });
