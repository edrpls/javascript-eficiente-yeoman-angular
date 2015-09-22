'use strict';

describe('Filter: mainSearch', function () {

  // load the filter's module
  beforeEach(module('propTalkApp'));

  // initialize a new instance of the filter before each test
  var mainSearch;
  beforeEach(inject(function ($filter) {
    mainSearch = $filter('mainSearch');
  }));

  it('should return the input prefixed with "mainSearch filter:"', function () {
    var text = 'angularjs';
    expect(mainSearch(text)).toBe('mainSearch filter: ' + text);
  });

});
