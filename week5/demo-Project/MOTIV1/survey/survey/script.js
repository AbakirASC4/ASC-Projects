// Client ID and API key from the Developer Console
var rum = true;
var structure;
var CLIENT_ID = '171943822330-bl7sccuonh491kq780ka1smj245ur72c.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    // listUpcomingEvents();

  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
    if (rum == true) {
      window.location.replace("../index.html");
    }

  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
  gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function (response) {
    var events = response.result.items;
    appendPre('Upcoming events:');

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {

        var event = events[i];
        var when = event.start.dateTime;
        var date = new Date(when);
        var yr = date.getFullYear();
        var mth = date.getMonth() + 1;
        var dt = date.getDate();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        if (dt.toString().length == 1) {
          dt = '0' + dt;
        }
        if (mth.toString().length == 1) {
          mth = '0' + mth;
        }
        if (hr.toString().length == 1) {
          var hr = '0' + hr;
        }
        if (min.toString().length == 1) {
          var min = '0' + min;
        }
        if (sec.toString().length == 1) {
          var sec = '0' + sec;
        }

        structure = mth + '-' + dt + '-' + yr + " T:" + hr + ":" + min + ":" + sec;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + ' (' + structure + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
  
}

function change() {
  $(".success").empty();
  $("body").append("<pre id='content'></pre>")
  listUpcomingEvents();
  // cool();
}
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else if (cool == structure) {
    var notification = new Notification('Quote', {
      icon: '',
      body: "Hey there! You've been notified!",
    });

    notification.onclick = function () {
      window.open("");
    };

  }

}
function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    var month = '0' + month;
  }
  if (day.toString().length == 1) {
    var day = '0' + day;
  }
  if (hour.toString().length == 1) {
    var hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    var minute = '0' + minute;
  }
  if (second.toString().length == 1) {
    var second = '0' + second;
  }
  var cool = month + '-' + day + '-' + year + ' T:' + hour + ':' + minute + ":" + second;
  return cool;
}

// var a = true;
// function cool() {
//   while (a == true) {
//     getDateTime();
//     notifyMe();
//   }
// }

