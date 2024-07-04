import config from "../config/appwriteConfig";
import { Client , Account, ID } from "appwrite";


export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount(email, password) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userAccount) {
        // call another method
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(
        email,
        password
      );

    
    } catch (error) {
      console.log("Something went wrong with login", error);
    }
  }

  async getCurrentUser() {
    try {
      const user =  await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serviece :: logout:: erorr", error);
    }
  }
}

const authService = new AuthService();
export default authService;