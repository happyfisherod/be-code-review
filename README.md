<h1 align="center">Express BE Test</h1>

<p align="center">
  <b>A delightful way to building a Node.js RESTful API Services with beautiful code written in TypeScript.</b></br>
  <sub>Made with ❤️ by <a href="https://github.com/happyfisherod">happyfisherod</a></sub>
</p>

<br />

![divider](./divider.png)

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install a MongoDB database.

> If you work with a mac, we recommend to use homebrew for the installation.

### Step 2: Create new Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to add your database connection information with the following lines:
```
//.env

DBURL=mongodb+srv://<user>:<password>@cluster0-clxgl.mongodb.net/test?retryWrites=true&w=majority

```

> This installs all dependencies with npm. After that it migrates the database and seeds some test data into it. So after that your development environment is ready to use.
```bash
npm run seed
```

### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

```bash
npm run dev
```

> The server address will be displayed to you as `http://0.0.0.0:10`.

![divider](./divider.png)

## ❯ Scripts and Tasks

### Install

- Install all dependencies with `npm install`

### Running in dev mode

- Run `npm run dev` to start with ts-node-dev, to serve the app.
- The server address will be displayed to you as `http://0.0.0.0:10`

### Building the project and run it

- Run `npm run build` to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called `build`).
- To start the builded app located in `dist` use `npm start`.

### Database Seeding

- Run `npm run seed` to seed your seeds into the database.

![divider](./divider.png)

## ❯ Debugger in VSCode

To debug your code run `npm run build` or hit <kbd>cmd</kbd> + <kbd>b</kbd> to build your app.
Then, just set a breakpoint and hit <kbd>F5</kbd> in your Visual Studio Code.

![divider](./divider.png)

## ❯ API Routes

The route prefix is `/api` by default.

| Route          | Description |
| -------------- | ----------- |
| **/api**       | Shows us the name, description and the version of the package.json |
| **/api/favorite** | Example entity endpoint |
| **/api/profile**  | Example entity endpoint |
| **/api/simulator**  | Example entity endpoint |

![divider](./divider.png)

## ❯ Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings |
| **dist/**                         | Compiled source files will be placed here |
| **src/**                          | Source files |
| **src/controllers/**              | REST API Controllers |
| **src/models/interfaces/**        | Interface / DB layer |
| **src/models/schemas/**           | TypeORM Models |
| **src/routes/**                   | REST API Routers |
| **src/scripts/**                  | Miscellaneous NPM scripts |
| **src/services/**                 | Service layer |
| **src/utils/**                    | Common classes and functions |
| .env.example                      | Environment configurations |

![divider](./divider.png)

## ❯ Docker

### Install Docker

Before you start, make sure you have a recent version of [Docker](https://docs.docker.com/engine/installation/) installed

### Build Docker image

```shell
docker build -t <your-image-name> .
```

### Run Docker image in container and map port

The port which runs your application inside Docker container is either configured as `PORT` property in your `.env` configuration file or passed to Docker container via environment variable `PORT`. Default port is `3000`.

#### Run image in detached mode

```shell
docker run -d -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

#### Run image in foreground mode

```shell
docker run -i -t -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

### Stop Docker container

#### Detached mode

```shell
docker stop <container-id>
```

You can get a list of all running Docker container and its ids by following command

```shell
docker images
```

#### Foreground mode

Go to console and press <CTRL> + C at any time.

### Docker environment variables

There are several options to configure your app inside a Docker container

#### project .env file

You can use `.env` file in project root folder which will be copied inside Docker image. If you want to change a property inside `.env` you have to rebuild your Docker image.

#### run options

You can also change app configuration by passing environment variables via `docker run` option `-e` or `--env`.

```shell
docker run --env DBURL=mongodb+srv://<user>:<password>@cluster0-clxgl.mongodb.net/test?retryWrites=true&w=majority
```

#### environment file

Last but not least you can pass a config file to `docker run`.

```shell
docker run --env-file ./env.list
```

`env.list` example:

```
# this is a comment
DBURL=mongodb+srv://<user>:<password>@cluster0-clxgl.mongodb.net/test?retryWrites=true&w=majority
```