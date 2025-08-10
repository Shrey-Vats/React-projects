````
# Workout Tracker — Counter & Timer

A simple and intuitive React app to help gym-goers track their workout reps and rest time between sets.

---

## Features

- **Reps Counter:**
  Increment or decrement the number of reps completed during a set.
  Reset reps anytime.

- **Countdown Rest Timer:**
  Set a custom rest duration and start a countdown timer.
  Timer automatically stops when the countdown reaches zero.
  Start, stop, and reset timer controls.

- **Combined Reset:**
  Reset both reps counter and timer with one click.

- **Persistent State:**
  Reps and timer state are saved in `localStorage` — your progress is retained across page reloads.

- **Responsive & Clean UI:**
  Designed for easy and clear interaction during workouts.

---

## How to Use

1. **Count Your Reps**
   Click the `+` button to add reps, `–` to remove (cannot go below zero). Use the **Reset Reps** button to start fresh.

2. **Set Rest Time**
   Enter your desired rest duration in seconds (default is 60 seconds).

3. **Start Timer**
   Click **Start Timer** to begin countdown. Timer will stop automatically when it reaches zero.

4. **Stop or Reset Timer**
   Stop the countdown anytime, or reset the timer to the original rest time.

5. **Reset All**
   Use this button to reset both reps and timer to zero/default.

---

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/workout-tracker.git](https://github.com/yourusername/workout-tracker.git)
   cd workout-tracker
````

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Run the app locally:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Open your browser and navigate to `http://localhost:5173` to view the app.

-----

## Technologies Used

  - **React** (Functional Components, Hooks)
  - `useState` & `useEffect` for state and side effects management
  - `localStorage` API for persistent state
  - **CSS** (or Tailwind CSS / your choice) for styling
  - **Vite** for development server and build tooling

-----

## Code Highlights

  - **Reps Counter:** Manages reps state, prevents negative values, and saves state to `localStorage`.
  - **Countdown Timer:** Uses `useEffect` with cleanup to manage timer intervals.
  - **Persistent State:** On app load, initializes state from `localStorage` if available.

-----

## Future Improvements (Not Implemented)

  - Sound alerts for timer completion
  - Visual progress bar for timer
  - Multi-set tracking and history

-----

## Contributing

Feel free to open issues or submit pull requests to improve this project\!

-----

## License

MIT License

```
```