# Bettermode Post List Clone

<p align="center">
   <img 
      src="https://https://github.com/gustavopolonio/Bettermode_clone/blob/main/.github/feedPage.png" 
      width="740"
    />
</p>

# :book: About this Project

This project is part of [Bettermode's](https://bettermode.com/) selection process to Senior Front-End Engineer position.

The project overview and prerequisites are [here](https://bettermode.notion.site/Senior-Front-End-Engineer-485a0725e4d940c3a01fafe2b5154598)

The main objective was to build a clone of Bettermode's post list functionality including: post gallery, post details and like feature.

# :rocket: Features
- Manage posts and like counts using GraphQL (Apollo client)
- Develop a responsive clone of the post gallery page
- Develop a responsive clone of the post details page
- Implement like and dislike feature

# :construction_worker: How to Use

Before starting, you need to have installed in your machine: [Node](https://nodejs.org/en/download/), [npm](https://www.npmjs.com/) (or other package manager), [Git](https://git-scm.com/) 
and an editor to work with the code (I use [VSCode](https://code.visualstudio.com/)).

You also need to create a site on [Bettermode](https://app.bettermode.com/) to retrieve an access token.

```bash

# Clone this repository via HTTPS:
$ git clone https://github.com/gustavopolonio/Bettermode_clone.git

# Go into the repository:
$ cd Bettermode_clone

# Install dependencies:
$ npm install

```

Create your environment variables based on the examples of `.env.example`

```bash
cp .env.example .env
```

After copying the examples, make sure to fill the `VITE_ACCESS_TOKEN` variable with your Bettermode's access token (you can retrieve it by creating a site on Bettermode and loggin in).

**Start the application in a development environment**

```bash
npm run dev
```

**Important note**
All GraphQL queries and mutations are typed by `graphql-codegen`. However, if you change the structures of `gql` functions you need to generate new types by running:

```bash
npm run graphql-codegen
```
> Sometimes it is necessary to delete the `src/graphql/generated.ts` file before running the script above.

# :computer: Technologies

* React
* Vite
* TypeScript
* Tailwind CSS
* React Router
* GraphQL

---

Made with :green_heart: by [Gustavo Polonio](https://github.com/gustavopolonio) 🚀

[![Linkedin Badge](https://img.shields.io/badge/-Gustavo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gustavo-polonio-04b77a169/)](https://www.linkedin.com/in/gustavo-polonio-04b77a169/)
[![Gmail Badge](https://img.shields.io/badge/-gustavopolonio1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gustavopolonio1@gmail.com)](mailto:gustavopolonio1@gmail.com)