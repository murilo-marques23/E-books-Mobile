import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "E-commerce@";

export const setItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`${KEY}${key}`, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (key: string, defaultValue: any = null) => {
  try {
    const value = await AsyncStorage.getItem(`${KEY}${key}`);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(error);
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`${KEY}${key}`);
  } catch (error) {
    console.error(error);
  }
};
