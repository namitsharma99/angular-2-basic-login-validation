import { PageOneComponent } from './pageOne/pageOne.component';
import { PageTwoComponent } from './pageTwo/pageTwo.component';

export const AppRoutes: any = [
    { path: '', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
    { path: 'pageOne', component: PageOneComponent }
];

export const AppComponents: any = [
    PageOneComponent,
    PageTwoComponent
];
