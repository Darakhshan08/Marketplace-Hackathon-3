
import type { Rule as RuleType } from '@sanity/types';

export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule: RuleType) => Rule.required().error('Email is required'),
    },
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule: RuleType) => Rule.required().error('First Name is required'),
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule: RuleType) => Rule.required().error('Last Name is required'),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule: RuleType) => Rule.required().error('Address is required'),
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (Rule: RuleType) => Rule.required().error('City is required'),
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      validation: (Rule: RuleType) => Rule.required().error('Country is required'),
    },
    {
      name: 'postalCode',
      type: 'string',
      title: 'Postal Code',
      validation: (Rule: RuleType) => Rule.required().error('Postal Code is required'),
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
      validation: (Rule: RuleType) => Rule.required().error('Products are required'),
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
      validation: (Rule: RuleType) => Rule.required().error('Total Amount is required'),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    },
  ],
};













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





//right code

// export default {
//   name: 'order',
//   type: 'document',
//   title: 'Order',
//   fields: [
//     {
//       name: 'email',
//       type: 'string',
//       title: 'Email',
//       validation: (Rule: any) => Rule.required().error('Email is required'),
//     },
//     {
//       name: 'firstName',
//       type: 'string',
//       title: 'First Name',
//       validation: (Rule: any) => Rule.required().error('First Name is required'),
//     },
//     {
//       name: 'lastName',
//       type: 'string',
//       title: 'Last Name',
//       validation: (Rule: any) => Rule.required().error('Last Name is required'),
//     },
//     {
//       name: 'address',
//       type: 'string',
//       title: 'Address',
//       validation: (Rule: any) => Rule.required().error('Address is required'),
//     },
//     // {
//     //   name: 'apartment',
//     //   type: 'string',
//     //   title: 'Apartment',
//     // },
//     {
//       name: 'city',
//       type: 'string',
//       title: 'City',
//       validation: (Rule: any) => Rule.required().error('City is required'),
//     },
//     {
//       name: 'country',
//       type: 'string',
//       title: 'Country',
//       validation: (Rule: any) => Rule.required().error('Country is required'),
//     },
//     {
//       name: 'postalCode',
//       type: 'string',
//       title: 'Postal Code',
//       validation: (Rule: any) => Rule.required().error('Postal Code is required'),
//     },
//     {
//       name: 'newsletter',
//       type: 'boolean',
//       title: 'Subscribe to Newsletter',
//     },
//     {
//       name: 'products',
//       type: 'array',
//       title: 'Products',
//       of: [
//         {
//           type: 'reference',
//           to: [{ type: 'product' }],
//         },
//       ],
//       validation: (Rule: any) => Rule.required().error('Products are required'),
//     },
//     {
//       name: 'totalAmount',
//       type: 'number',
//       title: 'Total Amount',
//       validation: (Rule: any) => Rule.required().error('Total Amount is required'),
//     },
//     {
//       name: 'orderDate',
//       title: 'Order Date',
//       type: 'datetime',
//     }
//   ],
// };


