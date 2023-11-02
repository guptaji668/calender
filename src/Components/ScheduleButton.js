import React from 'react';

export default function ScheduleButton() {
  const handleScheduleClick = () => {
    // Redirect to the Google OAuth authentication endpoint on your server
    window.location.href = 'http://localhost:4000/auth/google'; // Replace with your server's URL
  };

  return (
    <div>
      <button onClick={handleScheduleClick}>Schedule Event</button>
    </div>
  );
}
