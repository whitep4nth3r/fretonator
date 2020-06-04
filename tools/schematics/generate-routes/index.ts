import { Rule, Tree } from '@angular-devkit/schematics';
import generateModeRoutes from './mode-routes';
import writeRoutes from './write-routes';

export default function(schema: any): Rule {
  return (tree: Tree) => {
    const staticPages = [
      '/',
      '/about',
      '/404'
    ];

    const modeRoutes = generateModeRoutes();

    // writeRoutes(tree, [...staticPages, ...modeRoutes]);

    return writeRoutes(tree, [...staticPages, ...modeRoutes]);
  };
}
