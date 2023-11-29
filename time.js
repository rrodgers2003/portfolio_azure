var datetimeContainer = document.getElementById('datetime-container');

function updateDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    datetimeContainer.textContent = dateTimeString;
}

updateDateTime();

setInterval(updateDateTime, 1000);