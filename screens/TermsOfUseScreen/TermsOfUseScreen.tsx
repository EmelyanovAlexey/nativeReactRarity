import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";
import HeaderPage from "@/components/HeaderPage";

export default function TermsOfUseScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderPage style={styles.header} title={t("termsOfUse")} />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>{t("termsOfUse_1")}</Text>
        <Text style={styles.subtitle}>{t("termsOfUse_2")}</Text>

        <Text style={styles.section}>{t("termsOfUse_3")}</Text>
        <Text style={styles.text}>{t("termsOfUse_4")}</Text>
        <Text style={styles.text}>{t("termsOfUse_5")}</Text>

        <Text style={styles.section}>{t("termsOfUse_6")}</Text>
        <Text style={styles.text}>{t("termsOfUse_7")}</Text>
        <Text style={styles.text}>{t("termsOfUse_8")}</Text>
        <Text style={styles.text}>{t("termsOfUse_9")}</Text>
        <Text style={styles.text}>{t("termsOfUse_10")}</Text>

        <Text style={styles.section}>{t("termsOfUse_11")}</Text>
        <Text style={styles.text}>{t("termsOfUse_12")}</Text>

        <Text style={styles.section}>{t("termsOfUse_13")}</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("termsOfUse_14")}
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("termsOfUse_15")}
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 2 }]}>
              {t("termsOfUse_16")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_17")}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_18")}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{t("termsOfUse_19")}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_20")}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_21")}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{t("termsOfUse_22")}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_23")}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_24")}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{t("termsOfUse_25")}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_26")}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{t("termsOfUse_27")}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{t("termsOfUse_28")}</Text>
          </View>
        </View>

        <Text style={styles.text}>{t("termsOfUse_29")}</Text>
        <Text style={styles.text}>{t("termsOfUse_30")}</Text>
        <Text style={styles.text}>{t("termsOfUse_31")}</Text>
        <Text style={styles.text}>{t("termsOfUse_32")}</Text>

        <Text style={styles.section}>{t("termsOfUse_33")}</Text>
        <Text style={styles.text}>{t("termsOfUse_34")}</Text>
        <Text style={styles.text}>{t("termsOfUse_35")}</Text>
        <Text style={styles.text}>{t("termsOfUse_36")}</Text>

        <Text style={styles.section}>{t("termsOfUse_37")}</Text>
        <Text style={styles.text}>{t("termsOfUse_38")}</Text>
        <Text style={styles.text}>{t("termsOfUse_39")}</Text>
        <Text style={styles.text}>{t("termsOfUse_40")}</Text>

        <Text style={styles.section}>{t("termsOfUse_41")}</Text>
        <Text style={styles.text}>{t("termsOfUse_42")}</Text>

        <Text style={styles.section}>{t("termsOfUse_43")}</Text>
        <Text style={styles.text}>{t("termsOfUse_44")}</Text>

        <Text style={styles.section}>{t("termsOfUse_45")}</Text>
        <Text style={styles.text}>{t("termsOfUse_46")}</Text>

        <Text style={styles.section}>{t("termsOfUse_47")}</Text>
        <Text style={styles.text}>{t("termsOfUse_48")}</Text>
        <Text style={styles.text}>{t("termsOfUse_49")}</Text>
        <Text style={styles.text}>{t("termsOfUse_50")}</Text>
        <Text style={styles.text}>{t("termsOfUse_51")}</Text>
        <Text style={styles.text}>{t("termsOfUse_52")}</Text>
        <Text style={styles.text}>{t("termsOfUse_53")}</Text>
        <Text style={styles.text}>{t("termsOfUse_54")}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.BgcColor,
  },
  header: {
    marginBottom: 12,
  },
  scroll: {
    paddingBottom: 48,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.BlackColor,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    color: Colors.GrayColor,
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 4,
    color: Colors.BlackColor,
  },
  text: {
    fontSize: 14,
    color: Colors.BlackColor,
    lineHeight: 20,
    marginBottom: 8,
  },

  table: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingVertical: 8,
  },
  cell: {
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.BlackColor || "#000",
  },
  headerCell: {
    fontWeight: "bold",
  },
});
