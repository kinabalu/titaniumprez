function showAbout() {
    $.dialog.show();
}

$.win2.addEventListener('singletap', function(e) {
    var quote_entry = randomQuote();
    $.quote.text = quote_entry[0];
    $.quote_author.text = "- " + quote_entry[1];
});

$.index.open();
