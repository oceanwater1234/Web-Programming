import { User as ExtendUser } from '../entities/user.entity';

declare global {
  namespace Express {
    export interface User extends ExtendUser {}
  }
}