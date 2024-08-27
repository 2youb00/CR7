function loadPopupContent(url) {
    // Create an XMLHttpRequest object to fetch the content
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Put the content into the popup area
            document.getElementById('popup-content-area').innerHTML = xhr.responseText;
            // Show the popup
            document.getElementById('popup').style.display = "block";
        }
    };
    xhr.send(); // Send the request to fetch the content
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}
