import { AuthService } from './../auth/auth.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get(':userName')
    Login(@Param('userName') userName: string): string {
        console.log(userName);
        return AuthService.logIn(userName);
    }
}