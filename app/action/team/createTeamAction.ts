"use server"

// used to create a volleyball team in the app

import { prisma } from "@/lib/prisma";

export async function createTeamAction (team: Team) {
    // create team
    const teamResponse = await prisma.team.create({
        data: {
            ...team,
        },
    })

    return teamResponse;
}