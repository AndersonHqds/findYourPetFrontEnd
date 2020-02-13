import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as repoActions from "../../store/ducks/user/actions";
import { Repository } from "../../store/ducks/user/types";

const RepositoryList: React.FC = () => {
  
  const repos: Repository[] = useSelector(
    (state: any) => state.repositories.data
  );

  
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(repoActions.loadRequest());    
  }, [dispatch]);


  return (
    <ul>
      {repos.map((rep: Repository) => (
        <li key={rep.id}>{rep.name}</li>
      ))}
    </ul>
  );
};

export default RepositoryList;
