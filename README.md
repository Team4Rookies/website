# website
Website repo

**/teams-info**
This folder contains the folders/files with the pictures and bios of the team members, acording the following structure
  * A different folder per team 
  * github-id.bio.md file with the bio
  * github-id.pic.png file the picture 200x200

## How to develop

1 - Run the following commands to build the project
```
  $ npm install
  $ npm run build
```

2 - Start a typescript build server
```
  $ npx tsc --watch
```

3 - Start a Next.js development server with
```
  $ npm run dev
```

4 - Edit website in src folder