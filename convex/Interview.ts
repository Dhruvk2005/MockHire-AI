import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


// ==============================
// SAVE INTERVIEW QUESTIONS
// ==============================

export const SaveInterviewQuestion = mutation({

  args: {
    questions: v.any(),
    uid: v.id("UserTable"),
    resumeUrl: v.optional(v.string()),
    jobTitle: v.optional(v.string()),
    jobDescription: v.optional(v.string()),
  },

  handler: async (ctx, args) => {

    const result = await ctx.db.insert("InterviewSessionTable", {

      InterviewQuestions: args.questions,

      resumeUrl: args.resumeUrl,

      userId: args.uid,

      status: "draft",

      jobTitle: args.jobTitle,

      JobDescription: args.jobDescription,

    });

    return result;
  },
});


// ==============================
// GET INTERVIEW QUESTIONS
// ==============================

export const getInterviewQue = query({

  args: {
    interviewRecordId: v.id("InterviewSessionTable"),
  },

  handler: async (ctx, args) => {

    const result = await ctx.db.get(
      args.interviewRecordId
    );

    return result;
  },
});