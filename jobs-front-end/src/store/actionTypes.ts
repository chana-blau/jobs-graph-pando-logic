export type Action = {
  type: ActionType
  data?: any
}
export enum ActionType {
    loadData = 1,
    dataLoaded = 2,
    failedToLoad = 3
  }
  