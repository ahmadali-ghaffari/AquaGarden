import { PlantData, Plant } from "../models/Plant"
import { PlantRequestId } from "../models/Plant";

export const plantService = {
  getPlants: async (): Promise<PlantData[]> => {
    const plants = await Plant.getAllPlants();
    return plants;
  },
  upvotePlantPostById: async (plantId: PlantRequestId): Promise<PlantData> => {
    const modifiedPlant = await Plant.upvotePlantPost(plantId);
    return modifiedPlant;
  },
  downvotePlantPostById: async (plantId: PlantRequestId): Promise<PlantData> => {
    const modifiedPlant = await Plant.downvotePlantPost(plantId);
    return modifiedPlant;
  },

};
