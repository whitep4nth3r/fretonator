import { Rule, Tree } from '@angular-devkit/schematics';
import generateModeRoutes from './mode-routes';
import writeRoutes from './write-routes';

export default function(schema: any): Rule {
  return (tree: Tree) => {
    const staticPages = [
      '/',
      '/about',
      '/learn',
      '/learn/patterns',
      '/404'
    ];

    const modeRoutes = generateModeRoutes();
    return writeRoutes(tree, [...staticPages, ...modeRoutes]);
  };
}
