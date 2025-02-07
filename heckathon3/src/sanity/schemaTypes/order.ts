// // schemaTypes/order.ts

// export default {
//     name: 'order',
//     title: 'Order',
//     type: 'document',
//     fields: [
//       {
//         name: 'customerEmail',
//         title: 'Customer Email',
//         type: 'string',
//         validation: (Rule: any) => Rule.required().email()
//       },
//       {
//         name: 'shippingAddress',
//         title: 'Shipping Address',
//         type: 'string',
//         validation: (Rule: any) => Rule.required()
//       },
//       {
//         name: 'items',
//         title: 'Items',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'product',
//                 title: 'Product',
//                 type: 'reference',
//                 to: [{ type: 'product' }],
//                 validation: (Rule: any) => Rule.required()
//               },
//               {
//                 name: 'quantity',
//                 title: 'Quantity',
//                 type: 'number',
//                 validation: (Rule: any) => Rule.required().min(1)
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: 'total',
//         title: 'Total Amount',
//         type: 'number',
//         validation: (Rule: any) => Rule.required().min(0)
//       },
//       {
//         name: 'orderDate',
//         title: 'Order Date',
//         type: 'datetime',
//         options: {
//           dateFormat: 'YYYY-MM-DD',
//           timeFormat: 'HH:mm',
//           timeStep: 15
//         },
//         validation: (Rule: any) => Rule.required()
//       },
//       {
//         name: 'status',
//         title: 'Order Status',
//         type: 'string',
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Processing', value: 'processing' },
//             { title: 'Delivered', value: 'delivered' },
//             { title: 'Cancelled', value: 'cancelled' }
//           ]
//         },
//         initialValue: 'pending'
//       }
//     ]
//   }


// import { defineType, defineField, defineArrayMember } from 'sanity';

// export default defineType({
//   name: 'order',
//   title: 'Order',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'customerEmail',
//       title: 'Customer Email',
//       type: 'string',
//     }),
//     defineField({
//       name: 'shippingAddress',
//       title: 'Shipping Address',
//       type: 'string',
//     }),
//     defineField({
//       name: 'items',
//       title: 'Items',
//       type: 'array',
//       of: [
//         defineArrayMember({
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'product',
//               title: 'Product',
//               type: 'reference',
//               to: [{ type: 'product' }],
//             }),
//             defineField({
//               name: 'quantity',
//               title: 'Quantity',
//               type: 'number',
//             }),
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'total',
//       title: 'Total Amount',
//       type: 'number',
//     }),
//     defineField({
//       name: 'orderDate',
//       title: 'Order Date',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'status',
//       title: 'Order Status',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Pending', value: 'pending' },
//           { title: 'Completed', value: 'completed' },
//         ],
//       },
//     }),
//   ],
// });






// export default {
//   name: 'order',
//   title: 'Order',
//   type: 'document',
//   fields: [
//     {
//       name: 'userInfo',
//       title: 'User Information',
//       type: 'object',
//       fields: [
//         { name: 'email', type: 'string', title: 'Email' },
//         { name: 'firstName', type: 'string', title: 'First Name' },
//         { name: 'lastName', type: 'string', title: 'Last Name' },
//         { name: 'address', type: 'string', title: 'Address' },
//         { name: 'city', type: 'string', title: 'City' },
//         { name: 'country', type: 'string', title: 'Country' },
//         { name: 'postalCode', type: 'string', title: 'Postal Code' },
//       ]
//     },
//     {
//       name: 'items',
//       title: 'Items',
//       type: 'array',
//       of: [{ type: 'reference', to: [{ type: 'product' }] }]
//     },
//     {
//       name: 'subtotal',
//       title: 'Subtotal',
//       type: 'number',
//     },
//     {
//       name: 'shipping',
//       title: 'Shipping Cost',
//       type: 'number',
//     },
//     {
//       name: 'total',
//       title: 'Total Amount',
//       type: 'number',
//     },
//     {
//       name: 'createdAt',
//       title: 'Order Date',
//       type: 'datetime',
//     },
//   ]
// }




// schemas/order.ts
// export default {
//   name: 'order',
//   title: 'Order',
//   type: 'document',
//   fields: [
//     {
//       name: 'customer',
//       title: 'Customer',
//       type: 'object',
//       fields: [
//         {name: 'email', title: 'Email', type: 'string'},
//         {name: 'firstName', title: 'First Name', type: 'string'},
//         {name: 'lastName', title: 'Last Name', type: 'string'},
//       ]
//     },
//     {
//       name: 'address',
//       title: 'Shipping Address',
//       type: 'object',
//       fields: [
//         {name: 'street', title: 'Street', type: 'string'},
//         {name: 'city', title: 'City', type: 'string'},
//         {name: 'postalCode', title: 'Postal Code', type: 'string'},
//         {name: 'country', title: 'Country', type: 'string', initialValue: 'United States'},
//       ]
//     },
//     {
//       name: 'items',
//       title: 'Items',
//       type: 'array',
//       of: [{type: 'reference', to: [{type: 'product'}]}]
//     },
//     {
//       name: 'total',
//       title: 'Total Amount',
//       type: 'number',
//     },
//     {
//       name: 'shippingCost',
//       title: 'Shipping Cost',
//       type: 'number',
//     },
//     {
//       name: 'status',
//       title: 'Order Status',
//       type: 'string',
//       options: {
//         list: ['pending', 'processing', 'shipped', 'delivered']
//       }
//     },
//     {
//       name: 'orderDate',
//       title: 'Order Date',
//       type: 'datetime',
//     }
//   ]
// }






export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule: any) => Rule.required().error('Email is required'),
    },
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule: any) => Rule.required().error('First Name is required'),
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule: any) => Rule.required().error('Last Name is required'),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule: any) => Rule.required().error('Address is required'),
    },
    // {
    //   name: 'apartment',
    //   type: 'string',
    //   title: 'Apartment',
    // },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (Rule: any) => Rule.required().error('City is required'),
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      validation: (Rule: any) => Rule.required().error('Country is required'),
    },
    {
      name: 'postalCode',
      type: 'string',
      title: 'Postal Code',
      validation: (Rule: any) => Rule.required().error('Postal Code is required'),
    },
    {
      name: 'newsletter',
      type: 'boolean',
      title: 'Subscribe to Newsletter',
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      validation: (Rule: any) => Rule.required().error('Products are required'),
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
      validation: (Rule: any) => Rule.required().error('Total Amount is required'),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    }
  ],
};