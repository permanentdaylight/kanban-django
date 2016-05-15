ASSIGNMENT
Kanban

Path: Data Science with Python Unit: Web Development, Part II
Django REST Framework + Ajax

Create a REST API backend and Ajax frontend.

Objectives

After completing this assignment, you will be able to...

Summarize the REST architecture.
Design and build a REST API.
Design and build a data-driven JavaScript UI with Ajax.
Deliverables

A Git repo named kanban-django containing at least:
A README.md file explaining how to run your project.
A requirements.txt file.
A Django project.
Requirements

No PEP8 or Pyflakes warnings or errors.
Normal Mode

Build a Trello clone using Django REST Framework and Ajax in JavaScript.

Build a REST API

First, using the Django REST Framework, build an API with one resource: tasks.

Your URLs should be nested under /api/. Create an API with the following endpoints:

GET /api/tasks/
POST /api/tasks/
PUT /api/tasks/{id}
DELETE /api/tasks/{id}
The task resource will need the following fields:

id, title, status, priority
Build a UI

Then, build a user interface with HTML, CSS, and JavaScript that works with the Django REST API using Ajax.

You'll need to be able to do all of the following via Ajax...

Create a user and login.
Create/edit/delete tasks.
Re-prioritize tasks.
You can build the UI using vanilla CSS, Bootstrap, Foundation, Skeleton, LESS, SASS, or anything else of your choosing.

You can build the UI using jQuery, React, Angular, Backbone, MithrilJS, Ember, vanilla DOM JavaScript, or anything else of your choosing.

Advanced Mode

For advanced mode, do everything shown above, plus add functional tests and documentation for your API.

Epic Mode

Get creative, add features and extra functionality.
Put the final style and user experience polish on it!
Add tests for your JavaScript code.
Additional Resources

Testing
Swagger UI
Submit Assignment

* Assignment URL:

Paste URL here
Assignment Notes:

Please leave additional notes about the assignment here.
Submit Assignment
Next in this Path

LESSON
Configuring Django Apps for Heroku

Configuring Django Apps for Heroku

© Copyright 2015-2016 - The Iron Yard
