import React from 'react';
import '../styles/Home.css';
import calendarImg from '../photos/calendar.jpeg';
import clockImg from '../photos/clock.jpeg';
import quoteImg from '../photos/quote.jpeg';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Your Todo App</h1>
        <p>Stay organized, plan efficiently, and achieve your goals.</p>
      </header>

      <section className="features">
        <div className="feature">
          <img src={calendarImg} alt="Calendar" />
          <h2>Organized Scheduling</h2>
          <p>Plan your tasks with an integrated calendar and never miss a deadline.</p>
        </div>

        <div className="feature">
          <img src={clockImg} alt="Clock" />
          <h2>Time Management</h2>
          <p>Prioritize your tasks and manage your time effectively.</p>
        </div>

        <div className="feature">
          <img src={quoteImg} alt="Motivation" />
          <h2>Stay Motivated</h2>
          <p>Daily inspirational quotes to keep you focused and motivated.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
