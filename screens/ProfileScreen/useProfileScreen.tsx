import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useUnit } from "effector-react";
import { $userModel } from "@/models/auth";
import { deleteUserFx } from "@/models/auth/effects/effects";

export default function useProfileScreen() {
  const [showExit, setShowExit] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const navigation = useNavigation();
  const { email, name } = useUnit($userModel);

  // Удаление акаунта
  const handleDelete = () => {
    navigation.navigate("first");
    deleteUserFx();
    setShowDelete(false);
  };

  const handleExit = async () => {
    await AsyncStorage.removeItem("token");
  };

  return {
    showExit,
    showDelete,
    email,
    name,
    handleExit,
    setShowExit,
    setShowDelete,
    handleDelete,
  };
}
