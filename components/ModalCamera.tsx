// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ViewStyle,
//   TouchableOpacity,
// } from "react-native";
// import {
//   Camera,
//   useCameraDevices,
//   PhotoFile,
// } from "react-native-vision-camera";
// import { Colors } from "@/shared/constStyle";

// import Arrow from "@/components/Icons/Arrow";

// import { useTranslation } from "react-i18next";

// type Props = {
//   style?: ViewStyle;
//   setModalVisible: (param: boolean) => void;
//   onCapture: (data: PhotoFile) => void;
//   onPickFromGallery: () => void;
// };

// const ModalCamera = ({
//   style,
//   setModalVisible,
//   onCapture,
//   onPickFromGallery,
// }: // onToggleFlash,
// Props) => {
//   const { t } = useTranslation();
//   const devices = useCameraDevices();
//   const device = devices.back;
//   const cameraRef = useRef<Camera>(null);
//   const [flash, setFlash] = useState<"off" | "on">("off");

//   useEffect(() => {
//     Camera.requestCameraPermission();
//   }, []);

//   const takePhoto = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePhoto({
//         flash: flash === "on" ? "on" : "off",
//       });
//       onCapture(photo);
//     }
//   };

//   if (!device) return <View style={styles.container} />;

//   return (
//     <View style={[styles.modal, style]}>
//       <View style={styles.modalContent}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <View style={styles.arrow}>
//               <Arrow />
//             </View>
//           </TouchableOpacity>

//           <Text style={styles.modalTitle}>{t("titleSearchPhoto")}</Text>
//         </View>

//         {/*  */}
//         <View style={styles.container}>
//           <Camera
//             ref={cameraRef}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//             flash={flash}
//           />
//           <View style={styles.controls}>
//             <TouchableOpacity onPress={onPickFromGallery}>
//               <Text style={styles.buttonText}>Галерея</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={takePhoto}>
//               <Text style={styles.buttonText}>📸</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setFlash(flash === "on" ? "off" : "on")}
//             >
//               <Text style={styles.buttonText}>
//                 {flash === "on" ? "🔦 Off" : "🔦 On"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {/*  */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modal: {
//     position: "absolute",
//     justifyContent: "flex-end",
//     margin: 0,
//     width: "100%",
//     height: "100%",
//   },
//   modalContent: {
//     backgroundColor: Colors.WhiteColor,
//     padding: 20,
//     height: "100%",
//     width: "100%",
//   },
//   header: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginBottom: 24,
//   },
//   arrow: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     width: 34,
//     height: 32,
//     borderRadius: "50%",
//     backgroundColor: Colors.GrayColor2,
//     marginRight: 18,
//   },
//   modalTitle: {
//     fontWeight: 600,
//     fontSize: 20,
//     fontFamily: "Inter_400Regular",
//   },
//   //
//   container: { flex: 1 },
//   controls: {
//     position: "absolute",
//     bottom: 20,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "rgba(0,0,0,0.6)",
//     padding: 16,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

// export default ModalCamera;
