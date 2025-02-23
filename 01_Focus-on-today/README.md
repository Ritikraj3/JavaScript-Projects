Here’s a more detailed `README.md` for your "Focus on Today" project, incorporating explanations for working, functionality, features, responsiveness, and use of local storage:


# Focus on Today

**Focus on Today** is a web-based productivity tool designed to help users stay focused on their daily tasks. It allows users to set goals for the day, track their progress, and stay motivated. Built with **HTML**, **CSS**, and **JavaScript**, this project demonstrates core frontend skills and includes features like progress tracking, local storage, and responsiveness.

## Badges

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![Responsive](https://img.shields.io/badge/Responsive-Design-brightgreen)
![GitHub](https://img.shields.io/badge/Project-GitHub-blue)

## Demo

You can view a live demo of the project [here](#).

## Features

- **Task Management**: Users can add, mark, and track daily goals.
- **Progress Tracker**: A progress bar visually represents how many tasks have been completed.
- **Motivational Quotes**: Displays a new quote based on task completion status.
- **Responsive Design**: The app is mobile-friendly and works seamlessly on different screen sizes.
- **Local Storage**: All goals are saved in the browser’s local storage to persist even after a page refresh.
  
## Technologies Used

- **HTML5**: Used to structure the web pages and define the elements.
- **CSS3**: Used for styling and layout. Key concepts like Flexbox, transitions, and media queries are used for responsiveness.
- **JavaScript**: Handles interactivity, such as adding tasks, marking tasks as complete, updating the progress bar, and saving data to local storage.

## How It Works

1. **Task Input**: Users can type their goals for the day in the input fields.
2. **Task List**: Users can check off tasks as completed. When a task is checked, it visually updates the goal, crosses out the text, and changes the color to indicate completion.
3. **Progress Bar**: As goals are marked completed, the progress bar dynamically updates to reflect how many goals have been completed.
4. **Motivational Quotes**: Displays different motivational quotes depending on the number of goals completed. For example, "Well begun is half done!" when one goal is completed and "Whoa! You just completed all the goals, time for chill :D" when all tasks are done.

### Local Storage

Local storage is used to store the user's goals and their completion status, ensuring that data persists across page reloads. When a user adds or marks a goal as completed, the data is saved to local storage. Upon revisiting the page, the goals and their completion status are retrieved from local storage, so the user can continue where they left off.

### Responsiveness

The app uses CSS media queries to make the design responsive. The layout adjusts according to the screen size:

- On larger screens (desktops and tablets), the font sizes, padding, and layout are optimized for readability and spacing.
- On smaller screens (phones), the app layout condenses, and font sizes are reduced to ensure the app remains usable on smaller devices.

### CSS Flexbox

CSS Flexbox is used to position elements in the container, ensuring a clean and fluid layout. The `goal-container` class uses Flexbox to center the elements, like the checkbox and input fields, and adjusts their alignment across screen sizes.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/focus-on-today.git

2. Open the project folder:
   ```bash
   cd focus-on-today
   ```

3. Open the `index.html` file in your browser.

## Features Walkthrough

### 1. **Adding Goals**
Users can add goals by typing in the input fields. Each goal corresponds to a task, and there are three predefined input fields (`first`, `second`, and `third`). If a goal is added, it appears in the list.

### 2. **Marking Goals as Complete**
Each goal has a checkbox next to it. When a user clicks the checkbox, it toggles the completion status of the task. If the task is marked as completed:
   - The text gets struck through.
   - The checkbox changes its color.
   - The progress bar updates accordingly.
   - The task name is saved in the local storage with its status.
   
### 3. **Progress Bar**
The progress bar updates dynamically as users complete tasks. It shows how many of the three goals have been completed. It also updates the progress label (e.g., "1/3 completed").

### 4. **Motivational Quote**
A new motivational quote appears each time a task is completed. The quotes are predefined in the `allQuotes` array and change as the number of completed tasks increases.

### 5. **Error Handling**
If the user tries to mark a goal as completed without filling out the input field, an error message appears, prompting the user to add a goal.

## Code Walkthrough

### HTML Structure
- The `main` tag holds the entire content.
- The `app-container` contains the elements for the title, progress bar, goals, and motivational quote.
- The `goal-container` div holds each individual task, which consists of an input field and a checkbox.

### CSS Styling
- **General Styling**: Used for background colors, font settings, and layout, including Flexbox for centering and aligning elements.
- **Progress Bar**: Styled to visually represent the completion progress using the `.progress-value` class. It dynamically updates based on the percentage of completed goals.
- **Responsiveness**: Through media queries, styles are adjusted for smaller screen sizes. For example, the font size is reduced for mobile devices, and the layout of goals becomes more compact.

### JavaScript Logic
- **Local Storage**: The `allGoals` object is retrieved from local storage or initialized with empty values. Changes to the task list (add, complete, or delete) are saved in the local storage.
- **Checkbox Interaction**: Each checkbox has an event listener that toggles the task completion and updates the UI and local storage.
- **Progress Bar & Quotes**: The progress bar width and quote text update whenever a task's status changes. These changes are reflected in real-time.

## Future Features

- **Task Due Dates**: Allow users to set deadlines for tasks.
- **Notifications**: Push notifications for reminders and completed tasks.
- **Dark Mode**: Provide an option to switch between light and dark themes.
- **Cloud Sync**: Sync tasks across devices using a backend service.

## Contributing

If you'd like to contribute to **Focus on Today**, feel free to fork the repository, make changes, and create a pull request. All contributions are welcome!


---

Made with ❤️ by [Ritik Raj](https://github.com/your-username)


### Key Additions:
- **Local Storage**: I emphasized how local storage is being used to persist the tasks' data across page refreshes.
- **Responsive Design**: More details were added on how the layout adjusts for different screen sizes using CSS media queries.
- **Feature Walkthrough**: Each feature's workings were explained in detail (adding goals, marking them complete, progress bar, motivational quotes, and error handling).
- **Code Walkthrough**: A detailed explanation of how the code is structured and the logic behind the JavaScript implementation.

This `README.md` is designed to give potential users and contributors a comprehensive understanding of your project, its functionality, and the skills you’ve used to develop it.