import APG from "../src/apg";
import { assert, expect } from "chai";

describe("APG", function() {
	let newAPG: any;
	let elements: any;
	
	beforeEach(function() {
		newAPG = new APG;
		elements = newAPG.element.querySelectorAll("div");
	});

	it("should exist and be rendered", function() {
		expect(newAPG.wasRendered).to.be.true;
		expect(elements).to.exist.and.to.have.property("length").that.equals(3);
	});

	it("should render the head, the body and the footer", function() {
		
		expect(elements[0]).to.have.property("className").that.equals("apg-header");
		expect(elements[1]).to.have.property("className").that.equals("apg-body");
		expect(elements[2]).to.have.property("className").that.equals("apg-footer");
	});	
});