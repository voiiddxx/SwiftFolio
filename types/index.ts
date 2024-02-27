

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

export type AddSchoolingParams = {
    clerkId: string,
    school:{
        schoolClass:string
        schoolName:string
        finalYear:string
        extraDetail:string
    }
}


export type addCollegeParams = {
    clerkId: string,
    college:{
        degree:string
        batchStartDate:string
        batchEndDate:string
        instituteName:string
        extraDetail:string
    }
}


export type AddWorkParams = {
    clerkId: string,
    work:{
        companyName:string,
        role:string
        contribution:string
        startDate:string
        endDate:string
    }
}



export type DeletCollegeParams = {
    collegeId: string
    deleteId:string
}

export type deletSchoolParams = {
    schoolId: string,
    deleteId:string
}


export type DeleteWorkParams = {
    workId: string
    deleteId : string
}