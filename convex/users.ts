import { mutation } from "./_generated/server";
import { v } from "convex/values"

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        imageUrl: v.string(),
        email: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("UserTable").filter(
            q => q.eq(q.field('email'), args.email)).collect();

        if (user?.length == 0) {
            const data = {
                email: args.email,
                imageUrl: args?.imageUrl,
                name: args.name

            }
            const result:any = await ctx.db.insert("UserTable", {
               ...data
            });

            console.log(result);
            return{
                ...data,
                result

            }
        }

        return user[0];


    }
})