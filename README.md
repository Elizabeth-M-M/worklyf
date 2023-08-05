# Worklyf

#### React front end with a Ruby on Rails API

##### Owner

Elizabeth Mwende Muthusi

##### Date

5/08/2023.

### Description
This is the front end of the Worklyf application site that utilises the React framework. It is a comprehensive task management application designed to streamline your productivity journey. This app was built while practising redux and redux toolkit.

### Features

A user can:-

1. Successfully create an account and log in
2. Add, edit or delete a task
3. View tasks and see the deadline


#### Technologies used

HTML
CSS
Javascript
React
Tailwind

#### Prerequisites

- Node.js and npm installed on your machine.

### Getting Started

To get started with this application, you need to follow the steps mentioned below and run on the command line:

1. Clone this repository on your local machine
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:

```console
$ npm install
```

4. Start the front end by running:

```console
$ npm start
```

5. The api should now be running on `https://worklyf.onrender.com`

The app uses an already deployed api for its backend. The backend repository for this front end is `https://github.com/Elizabeth-M-M/worklyf-backend-sqlite` and it's deployed version is at https://worklyf.onrender.com/

### Using the deployed front end
- Navigate to https://worklyf.vercel.app

As a user, you can sign up and use those credentials to sign in later after logging out

## Screenshots of the Front End Design

- Guest homepage
  ![alt text](./images/WorkLyf(6).png "WorkLyf")
- Signup page
  ![alt text](./images/WorkLyf(8).png "WorkLyf")
- Login page
  ![alt text](./images/WorkLyf(7).png "WorkLyf")
- Logged in user homepage
  ![alt text](./images/WorkLyf(4).png "WorkLyf")
- Create task modal
  ![alt text](./images/WorkLyf.png "WorkLyf")
- View tasks of a particular category, whether work or personal tasks
  ![alt text](./images/WorkLyf(3).png "WorkLyf")
- View Profile
  ![alt text](./images/WorkLyf(2).png "WorkLyf")
- Edit profile
  ![alt text](./images/WorkLyf(1).png "WorkLyf")

#### Known Bugs

Currently there is a bug from fetching the deployed API. The API was deployed on Render, but it takes a long time to respond. This app was also built while learning and applying redux and redux toolkit, so there are still some issues updating the task to state while updating.

#### License

Copyright (c) 2023 Elizabeth Mwende Muthusi.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files , to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.