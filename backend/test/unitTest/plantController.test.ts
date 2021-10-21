import { plantController } from "../../src/controllers/plant-controller";
import { badRequestError } from "../../src/exceptions/http-exception";
import { PlantData } from "../../src/models/Plant";
import { plantService } from "../../src/services/plant-service";
import { mockApiCall } from "./mockFactory";

describe('plantController unit tests', () => {
    const mockPlant: PlantData[] = [{
        plantId: 1,
        userId: 1,
        plantName: 'Dwarf Anubias',
        plantType: 'Anubias nana',
        description: `Dwarf anubias is a short-stemmed plant with dark green leaves native to West Africa. This plant grows well fully or partially submerged as long as its rhizomes are above the substrate. This variety is one of the smallest and most compact plants in the anubias genus, reaching a maximum height of around 4 inches.
         It works well in creating a layer at the base of aquariums for small fish to hide or in smaller tanks.`,
        light: 'Moderate, tolerates range.',
        medium: 'Rocky substrate; can also attach to wood.',
        waterconditions: 'Temperature 72-82 F; pH 6.5-7.5.',
        plantImage: 'https://www.treehugger.com/thmb/fBubZWYyT_v1VfqeUNHV7e50Muk=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anubias-aquatic-plant-in-an-aquarium--anubias-nana-1254563939-e1bdf4b735f04e1eab45f3d320fe7c69.jpg',
        vote: 1
    }];

    describe('getAllPlants', () => {
        it('sets response status to 200, when successful calling', async () => {
            const { req, res, next } = mockApiCall(
                { params: {} },
                { body: mockPlant }
            );
            plantService.getPlants = jest.fn(() =>
                Promise.resolve(mockPlant)
            );
            await plantController.getAllPlants(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
        });

        it('should call next function', async () => {
            const { req, res, next } = mockApiCall(
                { body: {} },
                { body: new badRequestError('error') }
            );
            plantService.getPlants = jest.fn(() =>
                Promise.reject(new badRequestError('error'))
            );

            await plantController.getAllPlants(req, res, next);

            expect(next).toBeCalled();
        });
    });
});
