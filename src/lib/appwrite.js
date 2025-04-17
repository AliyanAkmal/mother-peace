// src/lib/appwrite.js
import { Client, Account } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || '6800e1ad0030f192dd5e');

// Initialize the Account service
const account = new Account(client);

export { client, account };