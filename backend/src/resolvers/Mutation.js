const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if user is loggedin

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    // console.log(item);

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // First, take copy of updates
    const updates = { ...args };

    // Remove the id from the payload
    delete updates.id;

    // Run update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  }
};

module.exports = Mutation;
