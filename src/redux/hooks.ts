import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { DispatchHook, StoreState } from "./store";

export const useStoreDispatch: DispatchHook = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
