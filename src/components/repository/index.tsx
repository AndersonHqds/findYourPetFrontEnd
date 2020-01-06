import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as repoActions from "../../store/ducks/repositories/actions";
import { Repository } from "../../store/ducks/repositories/types";

const RepositoryList: React.FC = () => {
  const repos: Repository[] = useSelector(
    (state: any) => state.repositories.data
  );

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(repoActions.loadRequest());
  }, []);

  return (
    <ul>
      {repos.map((rep: Repository) => (
        <li>{rep.name}</li>
      ))}
    </ul>
  );
};

export default RepositoryList;
