import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const SaveInterviewQuestion = mutation({

    args:{
        questions: v.any(),
        uid: v.id('UserTable'),
        resumeUrl:v.optional(v.string()),
      jobTitle:v.optional(v.string()),
       jobDescription:v.optional(v.string())
    },
    handler:async(ctx, args)=>{
        const result = await ctx.db.insert('InterviewSessionTable',{

            InterviewQuestions:args.questions,
            resumeUrl:args.resumeUrl,
            userId:args.uid,
            status:"draft",
            jobTitle:args.jobTitle,
            JobDescription:args.jobDescription
            
        });

        return result;
    }

})