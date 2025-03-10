function searchEvora() {
    const query = document.querySelector('.search-box').value;
    if (query.trim() === "") {
        alert("Please enter something to search!");
    } else {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}

function luckyEvora() {
    alert("I'm Feeling Lucky! (Custom functionality coming soon!)");
}
