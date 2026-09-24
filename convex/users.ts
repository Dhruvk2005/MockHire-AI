import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


// Create user if they don't already exist
export const CreateNewUser = mutation({

    args: {
        name: v.string(),
        imageUrl: v.string(),
        email: v.string(),
    },

    handler: async (ctx, args) => {

        const user = await ctx.db
            .query("UserTable")
            .filter((q) =>
                q.eq(
                    q.field("email"),
                    args.email
                )
            )
            .collect();

        if (user.length === 0) {

            const result = await ctx.db.insert(
                "UserTable",
                {
                    name: args.name,
                    imageUrl: args.imageUrl,
                    email: args.email,
                }
            );

            return {
                _id: result,
                name: args.name,
                imageUrl: args.imageUrl,
                email: args.email,
            };
        }

        return user[0];
    },
});


// Get existing user
export const GetUserByEmail = query({

    args: {
        email: v.string(),
    },

    handler: async (ctx, args) => {

        const user = await ctx.db
            .query("UserTable")
            .filter((q) =>
                q.eq(
                    q.field("email"),
                    args.email
                )
            )
            .first();

        return user;
    },
});