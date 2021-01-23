import { ActionType } from "./actionTypes";

export const initRequest = () => ({
  type: ActionType.loadData,
  loading: true
});

const initSuccess = (data:any[]) => {
  return {
      type: ActionType.dataLoaded,
      data:data,
      loading: false
  }
};

export const initError = (error:string) => ({
    type: ActionType.failedToLoad,
    data: error,
    loading: false
  });

  export const fetchData = () => {
    return (dispatch:any) => {
        dispatch(initRequest());
        fetch(`https://localhost:44357/jobs`)
        .then(response => response.json())
        .then(response => dispatch(initSuccess(response)))
        .catch(error =>  dispatch(initError(error))
        )
    }
};  
