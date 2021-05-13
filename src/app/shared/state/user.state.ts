import { Injectable } from "@angular/core";
import { Action, Selector, StateContext } from "@ngxs/store";
import { State } from "@ngxs/store";
import { AuthService } from "src/app/services/auth.service";

export interface AuthStateModel {
    username: string | null;
}

export class Register {
    static readonly type = '[Auth] Login';
    constructor(public payload: { username: string; password: string }) { }
}

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: { username: string; password: string }) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        username: null
    }
})
@Injectable()
export class AuthState {

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
        return !!state.username;
    }

    constructor(private _authService: AuthService) { }

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return this._authService.login(action.payload.username, action.payload.password).then(
            result => {
                ctx.patchState({
                    username: action.payload.username
                });
            }
        );
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        const state = ctx.getState();
        return this._authService.logout().then(
            (resp) => {
                ctx.setState({
                    username: null
                });
            }
        );
    }
}