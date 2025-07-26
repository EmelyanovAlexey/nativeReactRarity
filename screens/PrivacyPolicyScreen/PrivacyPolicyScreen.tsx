import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";

import HeaderPage from "@/components/HeaderPage";

export default function PrivacyPolicyScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderPage style={styles.header} title={t("privacyPolicy")} />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>{t("privacyPolicy_1")}</Text>
        <Text style={styles.subtitle}>{t("privacyPolicy_2")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_3")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_4")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_5")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_6")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_7")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_8")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_9")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_10")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_11")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_12")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_13")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_14")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_15")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_16")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_17")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_18")}</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("privacyPolicy_19")}
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("privacyPolicy_20")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_21")}
            </Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              {t("privacyPolicy_22")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_23")}
            </Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              {t("privacyPolicy_24")}
            </Text>
          </View>
        </View>

        <Text style={styles.section}>{t("privacyPolicy_25")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_26")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_27")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_28")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_29")}</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("privacyPolicy_30")}
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("privacyPolicy_31")}
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              {t("privacyPolicy_32")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_33")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_34")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_35")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_36")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_37")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_38")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_39")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_40")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_41")}
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_42")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_43")}
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              {t("privacyPolicy_44")}
            </Text>
          </View>
        </View>

        <Text style={styles.section}>{t("privacyPolicy_45")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_46")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_47")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_48")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_49")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_50")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_51")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_52")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_53")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_54")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_55")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_56")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_57")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_58")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_59")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_60")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_61")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_62")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_63")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_64")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_65")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_66")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_67")}</Text>

        <Text style={styles.section}>{t("privacyPolicy_68")}</Text>
        <Text style={styles.text}>{t("privacyPolicy_69")}</Text>

        <Text style={styles.subtitle}></Text>
        <Text style={styles.text}>{t("privacyPolicy_70")}</Text>
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
