import { Injectable } from '@nestjs/common';
import { AuthKeys } from 'src/config/config';

@Injectable()
export class AuthService {
    static validateRequest(key: any): boolean {
        if (key.url.indexOf('login') >= 0)
            return true;

        if (key.headers['mgsc-api-key'] === AuthKeys.CODE) {
            return true;
        }
        return false;
    }

    static logIn(username: string): string {
        if (username === AuthKeys.USERNAME) {
            return AuthKeys.CODE;
        }
        return "Invalid User!";
    }
}
