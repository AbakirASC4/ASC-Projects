chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
 var calenderURL = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
  $.get(calenderURL, function (data) {
        console.log(data);
    });
});
 