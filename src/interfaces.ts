export interface IUser {
  username: string;
  password: string;
  givenName: string;
  sn: string;
  displayName?: string;
  mail?: string;
  telephoneNumber?: string;
  memberOf: string | string[];
  userPrincipalName: string;
  distinguishedName?: string;
}