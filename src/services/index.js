import { TheCatAPI } from "@thatapicompany/thecatapi";

const theCatAPI = new TheCatAPI(process.env.NEXT_PUBLIC_CATS_API_KEY);

export const getRandomKittens = async (numOfImages) => {
  try {
    const images = await theCatAPI.images.searchImages({
      limit: Number(numOfImages),
    });
    console.log(images);
    return { isError: false, images: images }; // inside successful try
  } catch (error) {
    // handle error
    console.error(error);
    return { isError: true, error: error };
  }
};
