QUnit.test("Test 1", 1, function(assert) {
    var input = $('#input-1').text().trim();
    var expected = $('#expected-1').text().trim();

    assert.equal(JSON.minify(input), expected, "Passed");
});
QUnit.test("Test 2", 1, function(assert) {
    var input = $('#input-2').text().trim();
    var expected = $('#expected-2').text().trim();

    assert.equal(JSON.minify(input), expected, "Passed");
});
QUnit.test("Test 3", 1, function(assert) {
    var input = $('#input-3').text().trim();
    var expected = $('#expected-3').text().trim();

    assert.equal(JSON.minify(input), expected, "Passed");
});
QUnit.test("Test 4", 1, function(assert) {
    var input = $('#input-4').text().trim();
    var expected = $('#expected-4').text().trim();

    assert.equal(JSON.minify(input), expected, "Passed");
});
