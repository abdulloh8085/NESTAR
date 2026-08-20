import { AuthService } from '../auth/auth.sevice';
import {Module} from "@nestjs/common"
@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }