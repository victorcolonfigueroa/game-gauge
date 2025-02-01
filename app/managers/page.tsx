//4 imports

import { Suspense } from "react"




export default async function ManagerPage() {
    const manager = await prisma.manager.findMany({select: {id: true, displayName: true, }})//modify


    console.info('This is the manager:', managers)

 return (
    <div>
        <h1>Manager</h1>
        <Suspense fallback={<div>Loading...</div>}>
            </CreateManager>
        </Suspense>
    </div>
 )
}