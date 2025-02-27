"use server"


import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { randomUUID } from "crypto";

export async function createManagerAction(form: FormData) {
    const supabase = await createClient();

    try {
        console.log('Creating manager...');
        
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            throw new Error('User not found');
        }

        const displayName = form.get('name');
        console.log('Display name:', displayName);

        if (!displayName || typeof displayName !== 'string') {
            throw new Error('Name is required and must be a string');
        }

        const newManager = await prisma.manager.create({
            data: {

                id: randomUUID(),
                displayName: displayName,
                userId: user.id
            },
        });

        console.log('Manager created:', newManager);
        return newManager;
    } catch (error) {

        // Safe error logging that handles null/undefined
        console.error('Error creating manager:', error instanceof Error ? error.message : 'Unknown error');
        
        if (error instanceof Error) {
            throw error;
        } else {
            throw new Error('An unexpected error occurred while creating manager');
        }
    }
}