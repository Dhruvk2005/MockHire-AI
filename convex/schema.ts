import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    UserTable: defineTable({
        name: v.string(),
        imageUrl: v.string(),
        email: v.string(),
    }),

    InterviewSessionTable: defineTable({
        InterviewQuestions: v.any(),
        resumeUrl: v.optional(v.string()),
        userId: v.id("UserTable"),
        status: v.string(),
        jobTitle: v.optional(v.string()),
        JobDescription: v.optional(v.string()),
    }),
});