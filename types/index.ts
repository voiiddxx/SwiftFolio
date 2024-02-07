


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
        clerkId:string,
        projectname:string,
        projectdetail:string,
        projectlink:string,
        projectstatus:string,
        projectthumbnail:any,
    },
    ownerId: string
}



export type AddAchivementParams = {
    achivement:{
        clerkId:string
        acaption:string,
        aimage:string
    }
}


export type addSkillParams = {
    clerkId: string,
    skill:{
        userSkill: string
    }
}


export type createCustomParams = {
    clerkId: string,
    customSection: {
        heading: string,
    }
}

