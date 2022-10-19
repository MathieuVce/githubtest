export interface IGithubContext {
  getUser: TGetUserFC;
  getUserRepositories: TGetUserRepositoriesFC;
};

export type TGetUserFC = (username: string) => Promise<any>;
export type TGetUserRepositoriesFC = (username: string) => Promise<any>;

export const defaultGithubValue: IGithubContext = {
  getUser: () => Promise.reject(null),
  getUserRepositories: () => Promise.reject(null),
};