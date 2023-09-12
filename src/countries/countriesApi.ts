type Country = {
  name: { common: string; official: string };
  capital: string[];
  population: number;
};

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return (await response.json()) as Country[];
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return [];
  }
};
