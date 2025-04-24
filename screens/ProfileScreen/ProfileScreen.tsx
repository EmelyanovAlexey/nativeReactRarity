import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Colors } from "@/shared/constStyle";

import Start from "@/components/Icons/Start";
import Button from "@/components/Button";
import Card from "@/components/Icons/Card";
import Clock from "@/components/Icons/Clock";
import Book from "@/components/Icons/Book";
import Document from "@/components/Icons/Document";
import Protect from "@/components/Icons/Protect";
import Language from "@/components/Icons/Language";
import Close from "@/components/Icons/Close";
import Delete from "@/components/Icons/Delete";
import Exit from "@/components/Icons/Exit";
import ModalExitUser from "@/components/ModalExitUser";
import ModalDeleteUser from "@/components/ModalDeleteUser";

import useProfileScreen from "./useProfileScreen";

export default function ProfileScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { showExit, showDelete, setShowExit, setShowDelete } =
    useProfileScreen();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.userBlock}>
        <View style={styles.photo}>
          <Start
            width={50}
            height={50}
            stroke={Colors.WhiteColor}
            fill={Colors.WhiteColor}
            style={styles.photoStar}
          />
        </View>

        <Text style={styles.name}>Иванов Иван</Text>
        <Text style={styles.email}>ivanovivan@gmail.com</Text>
      </View>

      <View style={styles.btns}>
        <Button
          title={t("subscriptionPaid")}
          filled={false}
          style={styles.subscription}
          textStyle={styles.subscriptionText}
          leftContent={<Card />}
          onPress={() => {}}
        />
        <Button
          title={t("history")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Clock />}
          onPress={() => {}}
        />
        <Button
          title={t("favourites")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={
            <Start fill={Colors.Transparent} width={22} height={20} />
          }
          onPress={() => navigation.navigate("favourites")}
        />
        <Button
          title={t("trainingMaterials")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Book />}
          onPress={() => {}}
        />
        <Button
          title={t("termsOfUse")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Document />}
          onPress={() => {}}
        />
        <Button
          title={t("privacyPolicy")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Protect />}
          onPress={() => {}}
        />
        <Button
          title={t("changeLanguage")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Language />}
          onPress={() => navigation.navigate("changeLanguage")}
        />
        <Button
          title={t("changePassword")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Close />}
          onPress={() => navigation.navigate("changePassword")}
        />
        <Button
          title={t("exit")}
          filled={false}
          style={styles.btn}
          textStyle={styles.btnText}
          leftContent={<Exit />}
          onPress={() => setShowExit(true)}
        />
        <Button
          title={t("deleteAccount")}
          filled={false}
          style={styles.btn}
          textStyle={styles.deleteText}
          leftContent={<Delete />}
          onPress={() => setShowDelete(true)}
        />
      </View>

      <ModalExitUser
        modalVisible={showExit}
        setModalVisible={(param) => setShowExit(param)}
      />
      <ModalDeleteUser
        modalVisible={showDelete}
        setModalVisible={(param) => setShowDelete(param)}
        handleDelete={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.BgcColor,
  },
  userBlock: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: Colors.OrangeColor,
    position: "relative",
    marginBottom: 16,
  },
  photoStar: {
    position: "absolute",
    left: 25,
    top: 22,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    color: Colors.BlackColor2,
  },
  email: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 24,
    lineHeight: 16,
    color: Colors.GrayColor,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },

  btns: {
    width: "100%",
  },
  subscription: {
    width: "100%",
    backgroundColor: Colors.Primary,
    color: Colors.WhiteColor,
    alignItems: "flex-start",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  btn: {
    width: "100%",
    backgroundColor: Colors.GrayColor3,
    alignItems: "flex-start",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  subscriptionText: {
    fontWeight: 600,
    fontSize: 15,
    color: Colors.WhiteColor,
  },
  btnText: {
    fontWeight: 600,
    fontSize: 15,
    color: Colors.BlackColor2,
  },
  deleteText: {
    fontWeight: 600,
    fontSize: 15,
    color: Colors.RedColor,
  },
});
