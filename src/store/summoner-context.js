import { createContext, useContext } from 'react';

export const SummonerContext = createContext();

export const useSummoner = () => {
	return useContext(SummonerContext);
};
