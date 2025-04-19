import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function useProfileScreen() {
  const [showExit, setShowExit] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const navigation = useNavigation();

  // Удаление акаунта
  const handleDelete = () => {
    // TODO
    navigation.navigate("first");
    setShowDelete(false);
  };

  return {
    showExit,
    showDelete,
    setShowExit,
    setShowDelete,
    handleDelete,
  };
}
