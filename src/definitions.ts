declare module "@capacitor/core" {
  interface PluginRegistry {
    AccountKit?: AccountKitPlugin;
  }
}

export interface AccountKitPlugin {
  loginWithPhoneNumber():void;
  loginWithEmail():void;
  getAccount():void;
  logout(): Promise<void>;
}


