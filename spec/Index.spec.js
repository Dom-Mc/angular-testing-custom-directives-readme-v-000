describe('Directive Test', function() {
  var counter = element(by.css('.counter'));
  var count = element(by.css('.counter__count'));

	browser.get('http://localhost:8080');

	it('should have an initial 0 count', function () {
		expect(count.getInnerHtml()).toEqual('Current count: 0');
	});

	it('should increment when we click on it', function () {
		counter.click();
		expect(count.getInnerHtml()).toEqual('Current count: 1');
	});

});
