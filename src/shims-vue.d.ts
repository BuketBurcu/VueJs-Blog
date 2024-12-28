 /* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// import "vue-router";

// declare module "vue" {
//   interface ComponentCustomProperties {
//     $router: import("vue-router").Router;
//     $route: import("vue-router").Route;
//   }
// }
