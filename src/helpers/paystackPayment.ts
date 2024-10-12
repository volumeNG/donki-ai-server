// import axios from 'axios';
// import httpStatus from 'http-status';
// import config from '../config';
// import ApiError from '../errors/ApiError';
// import { EPaymentType } from '../interfaces/common';

// const PAYSTACK_SECRET_KEY = config.paystackPaymentApiKey;

// // Function to initiate a payment
// export const initiatePayment = async (
//   amount: number,
//   email: string,
//   reference: string,
//   paymentType: EPaymentType,
//   orderId: string,
//   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
//   callbackUrl?: string
// ) => {
//   console.log(
//     { mainamount: amount, amount: amount * 100 },
//     'bro please show the console log about the payment amount'
//   );
//   try {
//     const response = await axios.post(
//       'https://api.paystack.co/transaction/initialize',
//       // Paystack uses values in kobo (1 NGN = 100 kobo)
//       {
//         amount: amount * 100,
//         email,
//         reference,
//         // callback_url: callbackUrl,
//         metadata: {
//           payment_type: paymentType,
//           orderId,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data;
//   } catch (err) {
//     // console.log(err?.response);
//     throw new ApiError(httpStatus.BAD_REQUEST, 'something wrong happen');
//   }
// };

// // Function to verify a payment
// export const verifyPayment = async (reference: string) => {
//   const response = await axios.get(
//     `https://api.paystack.co/transaction/verify/${reference}`,
//     {
//       headers: {
//         Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   return response.data;
// };
