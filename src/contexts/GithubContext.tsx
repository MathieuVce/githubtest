import { createContext } from "react";
import { IGithubContext, defaultGithubValue, TGetUserFC, TGetUserRepositoriesFC } from "../@types/IGithubContext";

export const GithubContext = createContext<IGithubContext>(defaultGithubValue);

export const GithubProvider: React.FC<any> = ({ children }) => {

  const fetchData = async (url: string) => {
    const ip = 'https://api.github.com/users/'

    const requestOptions = {
      method: 'GET'
    };

    return await fetch(`${ip}${url}`, requestOptions)
  };

  const getUser: TGetUserFC = async (username: string) => {
    try {
      const response = await fetchData(username);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const getUserRepositories: TGetUserRepositoriesFC = async (username: string) => {
    try {
      const response = await fetchData(`${username}/repos`);
      const data = await response.json();
      console.log(data);
      return data;

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GithubContext.Provider value={{
      getUser, getUserRepositories

    }}>
        {children}
    </GithubContext.Provider>
  );
};