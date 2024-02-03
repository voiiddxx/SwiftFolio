


export type createPortfolioparams = {
    clerkId:string
    portfolio:{
        clerkId: string
        name: string
        heading: string
        about?:string
        linkedinurl:string
        githuburl:string
        mailurl:string
        extraurl:string
        avatar:string
        resume:string
    }
}


export type addProjectParams = {
    project:{
        projectname:string,
        projectdetail:string,
        projectlink:string,
        projectstatus:string,
        projectthumbnail:any,
    },
    ownerId: string
}