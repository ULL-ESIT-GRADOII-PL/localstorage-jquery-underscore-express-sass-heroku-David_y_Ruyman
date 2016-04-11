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

   describe("Entrada.", function() {
     //----------Una sola columna---------------
     it("Debería poderse introducir una cadena y que sea aceptada.", function() {
       var cadena = '"Prueba"';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal('Prueba');
     });

     it("Comas a los lados", function() {
       var cadena = '",Prueba,"';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal(',Prueba,');
     });

     it("Espacios a los lados", function() {
       var cadena = '" PruebaA "';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal(' PruebaA ');
     });

     //-----------Dos columnas-----------------
     it("Separando con comas", function() {
       var cadena = '"PruebaA","PruebaB"';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal('PruebaA');
       expect(r[0].value[1]).to.equal('PruebaB');
     });

     //---------Cuatro columnas-------------------
     it("Espacio en balnco con dos comas seguidas.", function() {
       var cadena = ' " ","PruebaA",,"PruebaB"';
       var r = calculate(cadena);
       expect(r[0].value[0]).to.equal('');
       expect(r[0].value[1]).to.equal('PruebaA');
       expect(r[0].value[2]).to.equal('');
       expect(r[0].value[3]).to.equal('PruebaB');
     })
   });
 });
