# Food Finder

Food Finder is a web application that helps users discover and locate different types of food. This project is built with modern JavaScript tools and libraries, leveraging the power of React and Vite for development and build processes.

## Table of Contents
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

## Demo

Check out the live demo [here](https://antonsavchenko94.github.io/).

## Requirements

You should provide `VITE_GOOGLE_MAP_API_KEY` in .env file. It's needed for correct displaying of Map  

```bash
VITE_GOOGLE_MAP_API_KEY = 'Your Google Maps API Key'
```

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```
## Usage

### Development

To start the development server, run:

```bash
npm run dev
```

This will launch the Vite development server, which provides hot module replacement and fast refresh for an enhanced development experience.

### Build

To build the project for production, run:

```bash
npm run build
```

The build output will be generated in the dist directory. This build is optimized and ready for deployment.


### Preview

To preview the production build locally, run:

```bash
npm run preview
```

This will start a local server to serve the files from the dist directory, allowing you to preview the production build.


### Linting

To lint the project files, run:

```bash
npm run lint
```

This will check the code for any linting errors using ESLint according to the specified configurations. The command ensures no unused disable directives are present and enforces a maximum of zero warnings.


## Dependencies

- `prop-types`: ^15.8.1
- `react`: ^18.2.0
- `react-dom`: ^18.2.0

## Dev Dependencies

- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react`: ^4.2.1
- `eslint`: ^8.57.0
- `eslint-config-react-app`: ^7.0.1
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `vite`: ^5.2.0
- `vite-plugin-eslint`: ^1.8.1


