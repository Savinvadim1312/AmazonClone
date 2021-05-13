const stripe = require('stripe')('sk_test_51IqIfWA2WcfjP4no0b7yqfMjZxmX4ft5rsQsmlR71eCw7Fofz7GSEhXONiViOJhdL13GwwWpUo1wLxAousKpBvpL00uNm8lXvk')
// event
// {
//   "typeName": "Query" | "Mutation", /* Filled dynamically based on @function usage location */
//   "fieldName": "createPaymentMethod", /* Filled dynamically based on @function usage location */
//   "arguments": { amount  /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async (event) => {
    const { typeName, arguments } = event;

    if (typeName !== 'Mutation') {
        throw new Error('Request is not a mutation');
    }

    if (!arguments?.amount) {
        throw new Error('Amount argument is required');
    }

    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'usd'
    });

    return {
        clientSecret: paymentIntent.client_secret,
    }
};
