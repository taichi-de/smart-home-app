export interface IState {
  // showData?: [];
  showData: any;
  notif: boolean;
}

export type ContextType = {
  store: IState;
  setStore: (name: string, value: any) => void;
};
