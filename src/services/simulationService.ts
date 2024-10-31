import axios from 'axios';
import { SimulationData } from '../types/simulationTypes';
import { API_URL } from '../utils/constants';

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchSimulationData = async (): Promise<SimulationData> => {
  const response = await apiClient.get<SimulationData>('/simulate/flamethrower');
  return response.data;
};
