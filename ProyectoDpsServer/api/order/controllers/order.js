'use strict';
//Secret key
const stripe = require("stripe")(
    "sk_test_51JtM5NK7S4JxYWSvLogDRzmDq1CnUG6aRITFvNnZd5qpGuvSsqTID2K1sAASW1jCzTnUcFuVA3hJOGz7PTN0Wj2r00aaATaMn4"
);

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        const { tokenStripe, products, idUser, addressShipping } = ctx.request.body;
        let totalPayment = 0;
        products.forEach((product) => {
            totalPayment += product.price * product.quantity;
        });

        const charge = await stripe.charges.create({
            amount: totalPayment * 100,
            currency: "eur",
            source: tokenStripe,
            description: `ID Usuario: ${idUser}`,
        });

        const createOrder = [];
        for await (const product of products) {
            const data = {
                product: product.id,
                user: idUser,
                totalPayment: totalPayment,
                productsPayment: product.price * product.quantity,
                quantity: product.quantity,
                idPayment: charge.id,
                addressShipping,
            };

            const validData = await strapi.entityValidator.validateEntityCreation(
                strapi.models.order,
                data
            );
            const entry = await strapi.query("order").create(validData);
            createOrder.push(entry);
        }

        return createOrder;
    },
};
