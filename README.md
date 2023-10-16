# DashFuel Coding Challenge
This application does the following:
- Allows the user to add a new item to the timeline.
- Allows the user to update the text of an item in the component.
- Lets the user delete items from the timeline.

# Installation
- Clone the repo.
- Run `yarn install` to install the project.
- Run `yarn start` to run the application.

# Usage
## Add a new item
Click the green button to the bottom right of the screen.
![image](https://github.com/kristophesankar/dashfuel-challenge/assets/33190221/683eae67-8208-49fd-b488-0c7b41519a97)

A modal will be launched showing a form to add an item
![image](https://github.com/kristophesankar/dashfuel-challenge/assets/33190221/cb6e1dad-2583-451b-ade0-579ad040a3a5)

## Editing and deleting an item
Hover over any item in the timeline should reveal two buttons. Clicking the "Edit" button will launch a modal allowing the user to change the item text. Clicking on the "Delete" button will immediately remove the item from the timeline.

# Thoughts
- Overall this was a pretty enjoyable project to work on.
- For the storing of item and group data I used Redux. This allowed me to avoid too much prop drilling while keeping the project easily readable.
- For the modal I took advantage of the native HTMLDialogElement API. This allowed me to make a reference of the element and map its showModal() and close() functions to component state.
- I used the modal in two places. The first was used as data entry for the add item functionality. The second was used for editing existing items.
- Redux was used to store the active item that was being edited and the modal was populated from this state.
- An intersting bug came up while working on the edit functionality. Immediately after dispatching the action for saving the state, the user would need to click somewhere else on the screen for the new data to show up. I solved this by just updating the key of the item parent container which then in turn forces a rerender of the ui.
