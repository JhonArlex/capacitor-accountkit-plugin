import { WebPlugin } from '@capacitor/core';
import { AccountKitPlugin } from './definitions';

export class AccountKitPluginWeb extends WebPlugin implements AccountKitPlugin {
  constructor() {
    super({
      name: 'AccountKitPlugin',
      platforms: ['web', 'android', 'ios']
    });
  }

  getAccount(): void {
  }

  loginWithEmail(): void {
  }

  loginWithPhoneNumber(): void {
  }

  logout(): Promise<void> {
    return undefined;
  }

}

const AccountKitPlugin = new AccountKitPluginWeb();

export { AccountKitPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AccountKitPlugin);
