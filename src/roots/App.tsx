import './App.css';
import { IUser } from '../@types/IUser';
import React, { useContext, useState } from 'react';
import { IRepositories } from '../@types/IRepository';
import { GithubContext } from '../contexts/GithubContext';

const App: React.FunctionComponent = () => {
  /**
     TODO à finir:

     l'input au handkeCLick
    lier le userrepositories à l'input

    
  **/
  
  const { getUser, getUserRepositories } = useContext(GithubContext);
  const [user, setUser] = useState<IUser>({
    image: '',
    name: '',
    num_followers: 0,
    num_following: 0
  });
  // const [userRepositories, setUserRepositories] = useState<IRepositories[]>();
  // const user = {
  //   "image": "https://avatars.githubusercontent.com/u/32383385?v=4",
  //   "name": "Mathieu",
  //   "num_followers": 4,
  //   "num_following": 5,
  // }

  const userRepositories: IRepositories[] = [
    {
      "name": "Coaching",
      "description": "blajkzebf jke fndjkzen dezj dkjzen kjdzekjn dkjezknj dknjz",
      "size": 744,
      "git_url": 'https://github.com/MathieuVce',
      "num_forks": 2,
      "num_issues": 5,
      "num_stars": 5
    },
    {
      "name": "Test",
      "git_url": 'https://github.com/MathieuVce',
      "description": "bmzjdfkzeflkzelkf kzelf knj dknjz",
      "size": 234,
      "num_forks": 4,
      "num_issues": 15,
      "num_stars": 50
    },
  ]
  
  const handleClick = async (username: string) => {
    const tmpUser = await getUser(username);
    setUser({
      image: tmpUser.avatar_url,
      name: tmpUser.name,
      num_followers: tmpUser.followers,
      num_following: tmpUser.following
    });
    const tmpUserRepositories = await getUserRepositories(username);
    // setUserRepositories(userRepositories);
  }

  return (
    
    <div className="App">
      <div className='container'>
      <div className="topnav">
        <input type="text" placeholder="Make a user research.." onClick={() => handleClick('MathieuVce')}/>
      </div>
        <div className="row">
          <div className="card">
            <img src={user.image} className='image' alt=""></img>
            <h1>{user.name}</h1>
            <p>Followers : {user.num_followers}</p>
            <p>Following : {user.num_following}</p>
            <div className='margt'>
              <a href="#"><i className="fa fa-github"></i></a> 
            </div>
            <hr/>
            {userRepositories.map((repository, index) => (
              <div>
                <p>Name of the repo : {repository.name}</p>
                <p>Git URL : {repository.git_url}</p>
                <p>Description : {repository.description}</p>
                <p>Size : {repository.size}</p>
                <p>Number of fork : {repository.num_forks}</p>
                <p>Number of Issues : {repository.num_issues}</p>
                <p>Number of Stars : {repository.num_stars}</p>
                <hr/>
              </div>
            
            ))};
          </div>
      </div>
      </div>
    </div>
  );
};

export default App;
