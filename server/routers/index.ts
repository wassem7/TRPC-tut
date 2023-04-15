import { adminProceedure, t } from '../trpc';
import { z } from 'zod';
import { userRouter } from './users';

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return 'Hi';
  }),
  logtoServer: t.procedure.input(z.string()).mutation((req) => {
    console.log(`Client says ${req.input}`);
    return true;
  }),
  users: userRouter,
  secretData: adminProceedure.query(({ ctx }) => {
    console.log(ctx.user);
    return 'Top secret data boy !';
  }),
});
