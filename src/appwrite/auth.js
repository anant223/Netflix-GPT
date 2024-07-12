import config from "../config/appwriteConfig";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
    console.log(this.account);
  }

  async createAccount(email, password) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userAccount) {
        return this.login(email, password);
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Something went wrong with login", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const currentUser = await this.account.get();
      return currentUser; 
    } catch (error) {
      if (error.code === 401) {
        console.log("User is not authenticated, please log in.");
        return null;
      }
      console.log("Appwrite service :: getCurrentUser :: error", error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
