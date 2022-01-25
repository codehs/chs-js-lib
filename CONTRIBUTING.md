# Contributing

Contributions to open-source are more than just code. You can contribute by creating an issue, participating in discussions on GitHub, creating a tutorial for how to use the library, or creating an program using the library on CodeHS. If you'd like to submit your example to be hosted on the library's site (at [codehs.github.io/chs-js-lib/examples](https://codehs.github.io/chs-js-lib/examples)), see the instructions [here](#creating-an-example).

## Issues

If you find a bug or have an idea for a feature improvement, you can create a new "issue" [here](https://github.com/codehs/chs-js-lib/issues). Follow the template's instructions to fill out helpful details for your bug report or request.

## Publishing an Example

We want to showcase the great programs our community has created with the library. To make a pull request to publish your example, follow these instructions:

1. Create a GitHub account, if you don't already have one
2. Fork this repository to your own GitHub account ([how to fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo))
3. Create a new branch for your example ([how to create a branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository))
4. Create a new folder in the `site/examples/community/` folder with the name of your example.
5. Within that folder, create two files: `info.md` and `code.js`. Your `info.md` file should contain the following:

    ```
    ---
    title: Title for your page
    layout: example
    code: code.js
    ---
    ```

    You may change the `title` to whatever you'd like, but `layout` must be `example` and `code` must be `code.js`

    Your `code.js` file is where you'll put your JavaScript code.

## Local Development

## Documenting a Contribution

To recognize the many ways the community can contribute to this project, we follow the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Comment on a Pull Request or Issue with a message of the format

```
@all-contributors please add @<username> for <contributions>
```

and a Pull Request will be created to add that contribution to the project.
