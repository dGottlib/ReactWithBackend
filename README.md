
    REACT PEOPLE WITH BACKEND

    By Devorah Gottlieb

    React People with Backend is a React application to manage a list of people in the database.

    TECHNOLOGIES USED:
    Entity Framework
    React

    DESCRIPTION:     
    This application uses C# backend with Entity Framework and calls into our backend from React 
    whenever any changes need to be made using axios. Here's the functionality the application supports:

    On top of the page, there are three textboxes: First Name, Last Name and Age.
    Next to the textboxes, there is a button that says "Add".

    Beneath that there is a table that displays the list of people from the database.
    When the add button on top is clicked, the textboxes get cleared out, and a new person is added to the table. 

    On each row of the table, is displayed the First Name, Last Name and Age of the person.
    In the last column, there is two buttons: "Edit" and "Delete". When Edit is clicked the 
    textboxes on top are prepopulated with the person's information. The Add button changes to "Update" instead of Add. When update is clicked, the person on the backend is updated and the table is updated as well.
    The three textboxes get cleared out, and the Update button goes back to saying "Add".

    There is also a cancel button that will hide the edit/cancel buttons and go back to "Add" mode.

    Finally, when the delete button is clicked, that person is deleted and the table gets updated.            

     SETUP / INSTALLATION:

    1. Modify the connection string in appsettings.json to reflect your database environment

    2. run the following commands
        dotnet ef migrations add initial
        dotnet ef database update
