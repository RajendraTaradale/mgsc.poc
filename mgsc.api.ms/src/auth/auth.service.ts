import { Injectable } from '@nestjs/common';
import { AuthKeys } from 'src/config/config';

@Injectable()
export class AuthService {
   static validateRequest(key: string): boolean {
        if (key === AuthKeys.CODE) {
            return true;
        }
        return false;
    }
}
