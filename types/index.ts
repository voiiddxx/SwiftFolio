


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



export type addCustomFieldParams = {
    custom:{
        customId: string,
        customTitle: string
        customLink: string
        customImage: string
    }
}

export type UpdateProjectParams = {
    project:{
        projectname?:string
        projectdetail?:string
        projectlink?:string
        projectstatus?:string
        projectthumbnail?:any
    }
    projectId: string
}


export type updateAchivementParams = {
    achivement:{
        acaption?:string,
        aimage?:string
    },
    achivementId: string
}