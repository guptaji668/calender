import React, { useEffect } from 'react';

const InterviewSchedule = () => {
  const gapi = window.gapi;

  const CLIENT_ID = "919617344867-l9eg79aluhtp03jj3t1vs8h9n3t0gk1p.apps.googleusercontent.com"; // Use your verified Client ID

  function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      // User is signed in and authenticated
      addManualEvent();
    });
  }

  function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }

  function addManualEvent() {
    // Create and add the event to the user's Google Calendar
    const event = {
      'kind': 'calendar#event',
      'summary': 'Event 2',
      'location': 'Masai School, Bangalore',
      'description': 'Paty time',
      'start': {
        'dateTime': '2023-03-18T01:05:00.000Z',
        'timeZone': 'UTC'
      },
      'end': {
        'dateTime': '2023-03-18T01:35:00.000Z',
        'timeZone': 'UTC'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=1'
      ],
      'attendees': [
        {'email': '81204rohanguptaji@gmail.com','responseStatus':'needsAction'},
      ],
      'reminders': {
        'useDefault': true,
      },
      "guestsCanSeeOtherGuests": true,
    }

    gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event,
      'sendUpdates': 'all'
    })
    .then((response) => {
      const event = response.result;
      console.log('Event created: ' + event.htmlLink);
      window.open(event.htmlLink);
    })
    .catch((error) => {
      console.error('Error creating event:', error);
    });
  }

  useEffect(() => {
    // Load the Google API client library and initialize it
    gapi.load('client', () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/calendar',
      });
    });
  }, []);

  return (
    <div>
      <button id="authorize_button"  onClick={handleAuthClick}>
        Authorize
      </button>
      <button id="signout_button"  onClick={handleSignoutClick}>
        Sign Out
      </button>
      <button id="add_manual_event"  onClick={addManualEvent}>
        Add Event
      </button>
    </div>
  );
}

export default InterviewSchedule;
