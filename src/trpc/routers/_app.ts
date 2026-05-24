import { error } from 'console';
import { baseProcedure, createTRPCRouter } from '../init';
 
export const AppRouter = createTRPCRouter({
  health:baseProcedure.query(async () => {
    // throw new error("something went wrong");

    return{status: "ok", code: 123};
  }),
  });
// export type definition of API
export type AppRouter = typeof AppRouter;