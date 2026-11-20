# StreamLine Designs — Portfolio Starter

This is the first working static-site prototype for the StreamLine Designs engineering/CAD portfolio.

## Preview locally
Open `index.html` in a modern browser. For best results, run a simple local web server (for example, VS Code Live Server). The interactive 3D viewer loads the `<model-viewer>` library from a CDN, so that feature needs an internet connection.

## Add a project
1. Open `projects.js`.
2. Copy one project object and paste it as a new object in the `PORTFOLIO_PROJECTS` array.
3. Give it a unique `id` (lowercase letters and hyphens are easiest).
4. Fill in `title`, `category`, `type`, `summary`, `overview`, `process`, `software`, `components`, and `material`.
5. Put your files in the matching `assets` folder:
   - Rendered images: `assets/images/`
   - GLB/GLTF models: `assets/models/`
   - Drawings: `assets/drawings/`
6. Enter the relative paths in the object. Example:
   - `image: "assets/images/hinge-render.png"`
   - `model: "assets/models/hinge.glb"`
   - `drawing: "assets/drawings/hinge-drawing.pdf"`
7. Save and refresh the website.

Categories currently supported by the filters: `Mechanical`, `Aerospace`, `Assemblies`, `Other`.

## Publish with GitHub Pages
1. Create a GitHub account and a new public repository (for example `streamline-designs`).
2. Upload the contents of this folder to the repository root. Do not upload the outer folder as an extra nested directory.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. GitHub will provide your published website address after deployment finishes.

GitHub Pages is suitable for a static portfolio. Check GitHub's current Pages limits and terms before publishing large model files. Large 3D assets may be better hosted in a separate file-storage service.

## Before publishing
- Replace the sample projects with your own work.
- Replace the placeholder email `hello@example.com` in `index.html`.
- Add your own introduction and decide what personal contact details you want public.
- Only publish designs, images, and technical information you have permission to share.
- Optimize model and image file sizes so the site loads quickly.
