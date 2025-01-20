import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.development.local',
});
describe('AuthGuard', () => {
  let jwtService: JwtService;
  let authGuard: AuthGuard;

  beforeEach(() => {
    jwtService = new JwtService({});
    authGuard = new AuthGuard(jwtService);
  });

  it('should be defined', () => {
    expect(authGuard).toBeDefined();
  });
});
