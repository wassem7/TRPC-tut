import { t } from '../trpc';
import { z } from 'zod';

const userProcedure = t.procedure.input(
  z.object({
    userId: z.string(),
  })
);
export const userRouter = t.router({
  getUsers: userProcedure.query(({ input }) => {
    return { id: input.userId, name: 'Wassem' };
  }),
  updateUser: userProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .output(
      z.object({
        name: z.string(),
        id: z.string(),
      })
    )
    .mutation((req) => {
      console.log(req.ctx);

      console.log(
        `Updating user Id ${req.input.userId} name ... with ${req.input.name}`
      );
      return { id: req.input.userId, name: req.input.name };
    }),
});
