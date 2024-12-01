# Hotel Reservations

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve hotel-reservations
```

To create a production bundle:

```sh
npx nx build hotel-reservations
```

To see all available targets to run for a project, run:

```sh
npx nx show project hotel-reservations
```

To run linting, testing and build all together, use:

```sh
npx nx run-many --target=lint --all && npx nx run-many --target=test --all && npx nx run-many --target=build --all
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

