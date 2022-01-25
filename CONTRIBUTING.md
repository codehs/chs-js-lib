# Contributing

Contributions to open-source are more than just code. You can contribute by creating an issue, participating in discussions on GitHub, creating a tutorial for how to use the library, or creating an program using the library on CodeHS. If you'd like to submit your example to be hosted on the library's site (at [codehs.github.io/chs-js-lib/examples](https://codehs.github.io/chs-js-lib/examples)), see the instructions [here](#creating-an-example).

## Issues

If you find a bug or have an idea for a feature improvement, you can create a new "issue" [here](https://github.com/codehs/chs-js-lib/issues). Follow the template's instructions to fill out helpful details for your bug report or request.

## Publishing an Example

We want to showcase the great programs our community has created with the library. To make a pull request to publish your example, follow these instructions:

1. Create a GitHub account, if you don't already have one
2. Fork this repository to your own GitHub account ([how to fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo))
3. Create a new branch for your example ([how to create a branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository))
4. Create a new folder in the `site/examples/community/` folder with the name of your example. For this example, I'll use `projectname`, but it can be any name with no punctuation. You can also copy the `exampleproject` folder.
5. Within that folder, create two files: `projectname.md` and `projectname.js`. Your `projectname.md` file should contain the following:

    ```
    ---
    title: Title for your page
    layout: example
    code: projectname.js
    ---
    ```

    You may change the `title` to whatever you'd like, but `layout` must be `example` and `code` must be `projectname.js`

    Your `projectname.js` file is where you'll put your JavaScript code.

6. Add a link to `site/examples/community/index.html` following the format
    ```
    <li>
        <a href="yourprojectname">Name Of Your Project</a>
    </li>
    ```
7. Commit your changes and make a pull request to add your example.

## Local Development

To develop the project locally, follow the instructions here or watch [this video](https://www.loom.com/share/893122a91ec448e8ac0c40d4a3f6868b)!

1. Install node.js on your computer.
2. Create a GitHub account, if you don't already have one.
3. Fork this repository to your own GitHub account ([how to fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)).
4. Clone the repository to your computer:
    ```
    git clone https://github.com/YOUR_USERNAME/chs-js-lib.git
    ```
5. Navigate to the project folder and install dependencies:
    ```
    cd chs-js-lib
    npm install
    ```
    This should install everything you need to run the project.
6. Build the project from source:
    ```
    npm run dev
    ```
    This will build the project and start a process that will re-build any time a change is detected.
7. To optionally run the site, first install `http-server` with `npm`, then build the site and start the server.

    ```
    npm install -g http-server
    npm run site
    http-server -c-1 -p 8888 --cors
    ```

    Then you can navigate to `localhost:8888/_site` in your browser to view the generated site.

8. If you make any changes, add and commit them:

    ```
    git add .
    git commit -m "<commit message>"
    ```

9. Push your changes to your fork on GitHub:

    ```
    git push
    ```

10. Open a Pull Request! ([how to open a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)).

## Documenting a Contribution

To recognize the many ways the community can contribute to this project, we follow the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Comment on a Pull Request or Issue with a message of the format

```
@all-contributors please add @<username> for <contributions>
```

and a Pull Request will be created to add that contribution to the project.
