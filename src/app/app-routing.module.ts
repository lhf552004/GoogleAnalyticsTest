import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponent } from './sub/sub.component';

// This is the list of generic routes in the app
// Routes specific to a module are declared in the module routing file:  [module-name]-routing.module.ts
const routes: Routes = [
    // Must be the last defined route in the array. Router uses first match wins strategy.
    { path: 'sub', component: SubComponent }
];

@NgModule({
    // Turn enableTracing to true in the line below for debugging purposes. It will provide router tracing in the console  
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

// Exporting all declared component as an array so that we can only declare the array where the module is imported and not every individual component
export const routedComponents = [SubComponent];