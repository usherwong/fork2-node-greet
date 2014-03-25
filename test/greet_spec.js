
var greet = require("../index.js")
describe('greet', function(){
  it("should greet a person by name", function(){
	//expect(1).to.eql(1);
	//greet("usher");
	expect(greet("usher")).to.eql("hello usher")
  });
  it("should greet a person flirtatiously if drunk",function(){
	expect(greet("usher","--drunk")).to.eql("hello usher,you look sexy today.")
  });
});
