import React from "react";
import { View, StyleSheet, ViewStyle, Text } from "react-native";
import { CameraView } from "expo-camera";
import { Colors } from "@/shared/constStyle";

import ModalCustom from "@/components/ModalCustom";
import Button from "@/components/Button";
import Gallery from "@/components/Icons/Gallery";
import LightOff from "@/components/Icons/LightOff";
import LightOn from "@/components/Icons/LightOn";
import Record from "@/components/Icons/Record";

import { useTranslation } from "react-i18next";

import useModalCamera from "./useModalCamera";

type Props = {
  style?: ViewStyle;
  setModalVisible: (param: boolean) => void;
};

const ModalCamera = ({ style, setModalVisible }: Props) => {
  const { t } = useTranslation();
  const {
    facing,
    flash,
    permission,
    cameraRef,
    getPhotoGallery,
    handleTakePhoto,
    toggleFlash,
    requestPermission,
  } = useModalCamera(setModalVisible);

  if (!permission) {
    return (
      <ModalCustom
        style={styles.modal}
        styleBody={styles.styleBody}
        setModalVisible={setModalVisible}
      >
        <View style={styles.container}>
          <Text style={styles.message}>{t("permissionCameraError")}</Text>
        </View>
      </ModalCustom>
    );
  }

  if (!permission.granted) {
    return (
      <ModalCustom
        style={styles.modal}
        styleBody={styles.styleBody}
        setModalVisible={setModalVisible}
      >
        <View style={styles.container}>
          <Text style={styles.message}>{t("permissionCamera")}</Text>
          <Button
            onPress={requestPermission}
            title={t("setPermissionCamera")}
          />
        </View>
      </ModalCustom>
    );
  }

  return (
    <ModalCustom
      style={styles.modal}
      styleBody={styles.styleBody}
      setModalVisible={() => setModalVisible(false)}
    >
      <View style={styles.cameraBlock}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing={facing}
          flash={"on"}
        />
      </View>

      <View style={styles.btns}>
        <Button
          filled={true}
          style={styles.button}
          leftContent={<Gallery />}
          onPress={getPhotoGallery}
        />
        <Button
          filled={true}
          style={styles.btnBig}
          leftContent={<Record />}
          onPress={handleTakePhoto}
        />
        <Button
          filled={true}
          style={styles.button}
          leftContent={flash === "off" ? <LightOff /> : <LightOn />}
          onPress={toggleFlash}
        />
      </View>
    </ModalCustom>
  );
};

const styles = StyleSheet.create({
  modal: {
    zIndex: 101,
  },
  styleBody: {
    height: "97%",
    backgroundColor: "#fff",
  },
  cameraBlock: {
    height: "80%",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: "5%",
  },
  camera: {
    flex: 1,
  },
  btns: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 13,
  },
  btnBig: {
    paddingVertical: 18,
    paddingHorizontal: 18,
  },

  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
});

export default ModalCamera;
