export const checkoutSections = [
  {
    heading: "Personal information:",
    fieldSet: [
      {
        id: "checkout_first_name",
        type: "text",
        label: "First name",
        name: "first_name",
      },
      {
        id: "checkout_last_name",
        type: "text",
        label: "Last name",
        name: "last_name",
      },
      {
        id: "checkout_phone",
        type: "text",
        label: "Phone",
        name: "phone",
      },
      {
        id: "checkout_email",
        type: "text",
        label: "Email",
        name: "email",
      },
    ],
  },

  {
    heading: "Delivery details:",
    fieldSet: [
      {
        id: "checkout_country",
        type: "select",
        label: "Country / Region",
        name: "country",
      },
      {
        id: "checkout_city",
        type: "select",
        label: "Town / City",
        name: "city",
      },
      {
        id: "checkout_street",
        type: "text",
        label: "Street",
        name: "street",
      },
      {
        id: "checkout_postcode",
        type: "text",
        label: "Postcode",
        name: "postcode",
      },
      {
        id: "checkout_packaging",
        type: "select",
        label: "Packaging type",
        name: "packaging",
      },
      {
        id: "checkout_shipping",
        type: "select",
        label: "Shipping option",
        name: "shipping",
      },
    ],
  },
  {
    heading: "Payment:",
    fieldSet: [
      {
        id: "checkout_card_number",
        type: "text",
        label: "Card number",
        name: "card_number",
      },
      {
        id: "checkout_expiration_date",
        type: "text",
        label: "Expiration date",
        name: "expiration_date",
      },
      {
        id: "checkout_cvv",
        type: "password",
        label: "CVV code",
        name: "cvv",
      },
    ],
  },
];
