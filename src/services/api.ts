import axios from "axios";
import { ImageData } from "../components/App/App";

const API_KEY = "5hYqS-8aDLoyMrlyT4K3Fg5UwXaH1MsL3Sp9LLAU-kI";
const API_URL = "https://api.unsplash.com/search/photos";

const fetchPictures = async (
  query: string,
  page: number
): Promise<ImageData[]> => {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await axios.get<{ results: ImageData[] }>(API_URL, {
      params: {
        query: query,
        client_id: API_KEY,
        per_page: 16,
        page,
      },
    });

    return response.data.results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Помилка Axios під час завантаження зображень:",
        error.response?.data || error.message
      );
    } else if (error instanceof Error) {
      console.error(
        "Загальна помилка під час завантаження зображень:",
        error.message
      );
    } else {
      console.error(
        "Неочікувана помилка під час завантаження зображень:",
        error
      );
    }

    throw new Error("Не вдалося завантажити зображення");
  }
};

export default fetchPictures;
