// 'use server';

// import jwt from 'jsonwebtoken';
// import { cookies, headers } from 'next/headers';
// import { redirect } from 'next/navigation';

// export interface Data {
//   payload: {
//     sessionId: string;
//     user: {
//       _id: string;
//     };
//   };
//   token: string;
// }

// export interface SessionResponse {
//   token: string;
// }

// export async function setToken(data: SessionResponse) {
//   const cki = await cookies();

//   const accessToken = jwt.decode(data.token, {
//     json: true,
//   });

//   if (!accessToken || !accessToken.exp || !accessToken.iat) {
//     throw new Error('Invalid token');
//   }

//   cki.set('ACESS_TOKEN', data.token, {
//     path: '/',
//     maxAge: accessToken.exp - accessToken.iat,
//     sameSite: 'strict',
//     secure: process.env.NODE_ENV === 'development',
//     httpOnly: true,
//   });
// }
// export async function getToken() { 
//     const cki = await cookies();
//     const accessToken = cki.get('ACESS_TOKEN');
//     const refreshToken = cki.get('REFRESH_TOKEN');
//     if(!accessToken &&  !refreshToken) { 
//         return null; 
//     }
//     return { 
//         accessToken: accessToken ? accessToken.value : '', 
//         refreshToken: refreshToken ? refreshToken.value : ''
//     }
// }

// export async function getAcessToken(redirectOnError: boolean = true) {
//   const cki = await cookies();
//   const accessToken = cki.get('ACESS_TOKEN');
//   const url = (await headers()).get('referer') ?? '/sigin';
//   if (accessToken) {
//     return accessToken.value;
//   }

//   if (redirectOnError) {
//     redirect(url);
//   }
//   return '';
// }
