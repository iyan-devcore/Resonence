import { error } from 'console';
import { baseProcedure, createTRPCRouter } from '../init';
import { voicesRouter } from './voices';
 
export const AppRouter = createTRPCRouter({
  voices: voicesRouter,
})
export type AppRouter = typeof AppRouter;