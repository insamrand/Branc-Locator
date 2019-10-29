import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default getLocation = async () => {
  // ใช้ Permissions ขอสิทธิ์เข้าถึงตำแหน่ง
  let { status } = await Permissions.askAsync(Permissions.LOCATION);

  // ถ้าสถานะการของ Permission ไม่ใช่ granted ถือว่าเข้าถึงไม่ได้
  if (status !== "granted") {
    // คืนค่า errorMessage (ล้มเหลว)
    return {
      errorMessage: "Permission to access location was denied"
    };
  }

  // ถ้าผู้ใช้อนุญาต ให้ขอตำแหน่ง แบบเปิดโหมดความแม่นยำสูงสุด
  let currentLocation = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest
  });

  // คืนค่าตำแหน่ง
  return {
    location: currentLocation
  };
};
