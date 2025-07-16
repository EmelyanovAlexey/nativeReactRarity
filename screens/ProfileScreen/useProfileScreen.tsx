import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useUnit } from "effector-react";
import { $userModel } from "@/models/auth";

export default function useProfileScreen() {
  const [showExit, setShowExit] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const navigation = useNavigation();
  const { email, name } = useUnit($userModel);

  // Удаление акаунта
  const handleDelete = () => {
    // TODO
    navigation.navigate("first");
    setShowDelete(false);
  };

  return {
    showExit,
    showDelete,
    email,
    name,
    setShowExit,
    setShowDelete,
    handleDelete,
  };
}
