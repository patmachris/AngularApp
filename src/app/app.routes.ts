import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
    import { from } from 'rxjs';

const Routes: Routes=[
{path: 'sign-up', component: SignUpComponent },
{path: 'user-profile', component: UserProfileComponent},
{path: '',component: UserProfileComponent }
];

export { Routes };