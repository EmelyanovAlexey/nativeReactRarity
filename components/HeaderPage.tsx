import React from "react";
import { useTranslation } from "react-i18next";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Link from "@/components/Link";
import Arrow from "@/components/Icons/Arrow";
import { Colors } from "../shared/constStyle";

export enum HeaderType {
  showArrow,
  showArrowHelp,
}

type AppButtonProps = {
  title?: string;
  type?: HeaderType;
  style?: ViewStyle;
};

const HeaderPage: React.FC<AppButtonProps> = ({
  title,
  type = HeaderType.showArrow,
  style,
}) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        <TouchableOpacity onPress={handleGoBack}>
          <View style={styles.arrow}>
            <Arrow />
          </View>
        </TouchableOpacity>

        {title && (
          <Text style={[styles.title]} numberOfLines={2}>
            {title}
          </Text>
        )}
      </View>

      <View style={styles.right}>
        {type === HeaderType.showArrowHelp && (
          <Link to="help" style={{ marginRight: 16 }}>
            <Text style={[styles.link]}>{t("help")}</Text>
          </Link>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
  },
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.GrayColor2,
    marginRight: 16,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
  },
  right: {
    marginLeft: 10,
  },
  link: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.Primary,
  },
});

export default HeaderPage;
