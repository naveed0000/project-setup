'use client';
import { TempUserData } from '@/types/interface'; // Adjust the import path as necessary
import React, { createContext, ReactNode } from 'react';

// Define the type for your data

// Create the Context
const UserContext = createContext<TempUserData>({} as TempUserData);

// Create the Provider component
export const UserProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: TempUserData;
}) => {
  return (
    <UserContext.Provider value={{ ...data }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
