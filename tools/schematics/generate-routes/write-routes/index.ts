import { Tree } from '@angular-devkit/schematics';

export default (tree: Tree, routes: string[]) => {
  const flatRoutes = routes.join('\n');
  const outFile = '_routes.txt';

  if(!tree.exists(outFile)) {
    tree.create(outFile, flatRoutes);
    return null;
  }

  const { content } = tree.get(outFile);

  if(content.toString() !== flatRoutes) {
    tree.overwrite(outFile, flatRoutes);
    return null;
  }

  return null;
}
