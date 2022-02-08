import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

const home: Route = {
  path: "",
  loadChildren: () =>
    import("./pages/home/home.module").then((mod) => mod.HomeModule),
};

const learn: Route = {
  path: "learn",
  loadChildren: () =>
    import("./pages/learn/learn.module").then((mod) => mod.LearnModule),
};

const notFound: Route = {
  path: "**",
  loadChildren: () =>
    import("./pages/not-found/not-found.module").then(
      (mod) => mod.NotFoundModule
    ),
};

const routes: Routes = [home, learn, notFound];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: "disabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
