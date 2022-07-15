import GetLocation, { Location } from "react-native-get-location";

export const getUserLocation = async (): Promise<Location | null> => {
  try {
    const location = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000
    });
    return location;
  } catch(err) {
    console.log(err);
  }
  return null;
}