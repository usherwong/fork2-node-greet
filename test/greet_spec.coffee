greet = require("../lib/index.js")
describe 'greet',()->
	it "should greet a person by name",()->
		expect(greet("usher")).to.eql("hello usher")
	it "should greet a flirtatiously if drunk",()->
		expect(greet("usher","--drunk")).to.eql("hello,you look sexy today")
