import z from "zod";
import { TRPCError } from "@trpc/server";
import { chatterbox } from "@/lib/chatterbox-client";
import { prisma } from "@/lib/db";
import { uploadAudio } from "@/lib/r2";
import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";
import { createTRPCRouter, orgProcedure } from "../init";

export const generationsRouter = createTRPCRouter({
    getById: orgProcedure
    .input(z.object({ id: z.string()}))
    .query(async ({ input, ctx }) => {
        const generation = await prisma.generation.findUnique({
            where: { id: input.id, orgId: ctx.orgId },
            omit:{
                orgId: true,
                r2ObjectKey: true,
            },
        });
        if(!generation) {
            throw new TRPCError({ code: "NOT_FOUND" });
        }
        return{
            ...generation,
            audioUrl: `/api/audio/${generation.id}`,
        };
    }),
    getAll: orgProcedure.query(async ({ ctx }) => {
        const generations = await prisma.generation.findMany({
        where: { orgId: ctx.orgId },
        orderBy: { createdAt: "desc" },
        omit:{
                orgId: true,
                r2ObjectKey: true,
            },
    });
    return generations;
    }),
    
})