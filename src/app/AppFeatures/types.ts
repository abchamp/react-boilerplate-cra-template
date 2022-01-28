/* --- STATE --- */
export interface AppFeaturesState {
  mainLoading: boolean;
  mobileMenuOpen: boolean,
  isMobileMenu: boolean,
  isAuth: boolean,
  authGroup: string,
  error: boolean;
}

// export enum RepoErrorType {
//   RESPONSE_ERROR = 1,
//   USER_NOT_FOUND = 2,
// }

export type ContainerState = AppFeaturesState;
