# ts-template

This is my personal template for [TypeScript](https://www.typescriptlang.org) libraries. It is a bit opinionated and might not be your taste, but feel free to fork it and make it your own :3

## Features

-   Framework: [Vite](https://vitejs.dev)
-   Language: [TypeScript](https://www.typescriptlang.org)
-   Linter: [ESLint](https://eslint.org)
-   Formatter: [Prettier](https://prettier.io)
-   Unit testing: [Vitest](https://vitest.dev)
-   Subfolder exports: [Custom made](/vite.config.ts#L46-L62)
-   TSConfig paths resolving: [Vite-TSConfig-Paths](https://npm.im/vite-tsconfig-paths)

## Command to use

```bash
echo -n 'Project name: '
read project_name
git clone https://github.com/13x1/ts-template.git $project_name
cd $project_name
git remote rename origin template
sed -i "s/ts-template/$project_name/g" package*.json
rm README.md
echo -e "# $project_name\n\nInitialized with
[ts-template](https://github.com/13x1/ts-template)" > README.md
npm install
git add -A
git commit -m "Use template for $project_name"
```

Or, if you already cloned the template:

```bash
project_name=$(basename $(pwd))
git remote add template https://github.com/13x1/ts-template
sed -i "s/ts-template/$project_name/g" package*.json
rm README.md
echo -e "# $project_name\n\nInitialized with
[ts-template](https://github.com/13x1/ts-template)" > README.md
npm install
git add -A
git commit -m "Use template for $project_name"
```
