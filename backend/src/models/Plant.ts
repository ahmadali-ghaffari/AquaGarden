import { db } from "../database/connection";

export interface PlantDataInDB {
  plant_id: number;
  user_id: number;
  plant_name: string;
  plant_type: string;
  description: string;
  light: string;
  medium: string;
  waterconditions: string;
  plant_image: string;
  score: number;
}

export interface PlantData {
  plantId: number;
  userId: number;
  plantName: string;
  plantType: string;
  description: string;
  light: string;
  medium: string;
  waterconditions: string;
  plantImage: string;
  score: number;
}

export interface PlantRequestId {
  plantId: number;
}

export interface PlantInfoResult {
  results: Array<PlantDataInDB>;
  fields: Array<unknown>;
}

const convertItem = (item: PlantDataInDB): PlantData => {
  return {
    plantId: item.plant_id,
    userId: item.user_id,
    plantName: item.plant_name,
    plantType: item.plant_type,
    description: item.description,
    light: item.light,
    medium: item.medium,
    waterconditions: item.waterconditions,
    plantImage: item.plant_image,
    score: item.score,
  };
};

export const Plant = {
  getAllPlants: async (): Promise<PlantData[]> => {
    const plants: PlantInfoResult = ((await db.query(
      `SELECT * FROM plants INNER JOIN users ON users.user_id = plants.user_id;`
    )) as unknown) as PlantInfoResult;
    return plants.results.map(item => convertItem(item));
  },
  getPlantById: async ( plantId : number): Promise<PlantData> => {
    const plant: PlantInfoResult = ((await db.query(
      `SELECT * FROM plants INNER JOIN users ON users.user_id = plants.user_id WHERE plant_id = ?;`, [plantId]
    )) as unknown as PlantInfoResult);
    return convertItem(plant.results[0]);
  },
  upvotePlantPost: async ({plantId}: PlantRequestId): Promise<PlantData> => {
    (await db.query(
      `UPDATE plants SET score = score + 1 WHERE plant_id = ?;`, [plantId]
    ));
    
    const updatedPlant = Plant.getPlantById(plantId)
    return updatedPlant;
  },
  downvotePlantPost: async ({plantId}: PlantRequestId): Promise<PlantData> => {
    (await db.query(
      `UPDATE plants SET score = score - 1 WHERE plant_id = ?;`, [plantId]
    ));
    const updatedPlant = Plant.getPlantById(plantId)
    return updatedPlant;
  },


};
