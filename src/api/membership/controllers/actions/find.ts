const find = async (ctx) => {
    const { membership } = ctx.state
    
    // perform checks, modify return object etc.

    return ctx.send(membership)
}

export default find