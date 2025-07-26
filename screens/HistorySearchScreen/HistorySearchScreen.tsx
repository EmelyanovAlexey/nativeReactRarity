import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { useTranslation } from "react-i18next";
import Spinner from "../../components/Spinner";

import useHistorySearchScreen from "./useHistorySearchScreen";

import HeaderPage from "@/components/HeaderPage";
import { Colors } from "@/shared/constStyle";
import { HistoryType } from "../../models/search/types";

export default function SearchScreen() {
  const { t } = useTranslation();
  const { isLoading, histories, historiesLater, formatDate, handleSearch } =
    useHistorySearchScreen();

  function getBlock(history: HistoryType) {
    return (
      <TouchableOpacity
        style={[styles.blocks]}
        onPress={() => handleSearch(history)}
        key={history.id}
      >
        <View style={styles.block}>
          <Text style={[styles.date]}>
            {formatDate(history.created_at).replace(",", " в")}
          </Text>
          <View style={[styles.chips]}>
            {history?.region_name && (
              <View style={[styles.chip]}>
                <Text
                  style={[styles.chipText]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {history.region_name}
                </Text>
              </View>
            )}

            {history?.country_name && (
              <View style={[styles.chip]}>
                <Text
                  style={[styles.chipText]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {history.country_name}
                </Text>
              </View>
            )}

            {history?.manufacturer_name && (
              <View style={[styles.chip]}>
                <Text
                  style={[styles.chipText]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {history.manufacturer_name}
                </Text>
              </View>
            )}

            {history?.city_name && (
              <View style={[styles.chip]}>
                <Text
                  style={[styles.chipText]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {history.city_name}
                </Text>
              </View>
            )}

            {history?.text && (
              <View style={[styles.chip]}>
                <Text
                  style={[styles.chipText]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {history.text}
                </Text>
              </View>
            )}

            {history?.photo && (
              <View style={[styles.chip]}>
                <Image source={{ uri: history.photo }} style={styles.image} />
                <Text
                  style={[styles.chipText]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {t("picture")}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.content}>
      <HeaderPage style={styles.header} title={t("history")} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.description}>{t("recent")}</Text>
        </View>

        {histories.map((history) => getBlock(history))}

        {historiesLater.length > 0 && (
          <View>
            <Text style={styles.description}>{t("laterOnes")}</Text>
          </View>
        )}

        {historiesLater.map((history) => getBlock(history))}

        {isLoading && (
          <View style={styles.loading}>
            <Spinner />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const w = Dimensions.get("window").width * 0.8;

const styles = StyleSheet.create({
  content: {},
  header: {
    marginBottom: 12,
  },
  container: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    backgroundColor: Colors.BgcColor,
  },
  description: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: 600,
    marginTop: 12,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },
  blocks: {},
  block: {
    marginBottom: 24,
  },
  date: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    lineHeight: 14,
    letterSpacing: 0,
    color: Colors.GrayColor,
  },
  chips: {
    gap: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: Colors.Primary2,
    maxWidth: w,
  },
  chipText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0,
    color: Colors.Primary,
    flexShrink: 1,
    textAlign: "left",
    includeFontPadding: false,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  loading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
    zIndex: 1,
  },
});
