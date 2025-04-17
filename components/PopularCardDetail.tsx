import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
  TouchableOpacity,
  Share,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import Modal from "react-native-modal";
import { Colors } from "@/shared/constStyle";
import Start from "@/components/Icons/Start";
import ShareIcon from "@/components/Icons/Share";

import { useTranslation } from "react-i18next";

type Props = {
  modalVisible: boolean;
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    dateTo: string;
    dateFrom: string;
    isStar: boolean;
    country: string;
    area: string;
    city: string;
    manufacturer: string;
  };
  style?: ViewStyle;
  setModalVisible: (param: boolean) => void;
};

const PopularCardDetail = ({
  style,
  modalVisible = false,
  data,
  setModalVisible,
}: Props) => {
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${data.title}\n${data.description}`,
        url: data.image,
      });
    } catch (error) {
      console.log("Ошибка при попытке поделиться:", error);
    }
  };

  const toggleFavorite = () => {
    // setIsFavorite((prev) => !prev);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection="down"
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modal}
      propagateSwipe
      scrollTo={(p) => scrollViewRef.current?.scrollTo(p)}
      scrollOffset={scrollOffset}
      scrollOffsetMax={500} // можно подогнать по контенту
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeaderIndicator} />

        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Image source={{ uri: data.image }} style={styles.image} />

          <View style={styles.row}>
            <Text style={styles.date}>
              {data?.dateFrom} - {data?.dateTo}
            </Text>
            <View style={styles.btns}>
              <TouchableOpacity onPress={handleShare} style={styles.iconButton}>
                <ShareIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleFavorite}
                style={styles.iconButton}
              >
                <Start
                  stroke={data.isStar ? Colors.Primary : Colors.GrayColor}
                  fill={data.isStar ? Colors.Primary : Colors.Transparent}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.modalTitle}>{data?.title}</Text>
          <Text style={styles.modalDescription}>{data?.description}</Text>

          <View style={styles.blocks}>
            <View style={styles.block}>
              <Text style={styles.label}>{t("country")}</Text>
              <Text style={styles.value}>{data.country}</Text>
            </View>

            <View style={styles.block}>
              <Text style={styles.label}>{t("area")}</Text>
              <Text style={styles.value}>{data.area}</Text>
            </View>

            <View style={styles.block}>
              <Text style={styles.label}>{t("city")}</Text>
              <Text style={styles.value}>{data.city}</Text>
            </View>

            <View style={styles.block}>
              <Text style={styles.label}>{t("manufacturer")}</Text>
              <Text style={styles.value}>{data.manufacturer}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: "90%",
  },
  modalHeaderIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 16,
    marginBottom: 12,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    fontWeight: 500,
    fontSize: 16,
    color: Colors.GrayColor,
    fontFamily: "Inter_400Regular",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 12,
    fontFamily: "Inter_400Regular",
  },
  modalDescription: {
    fontWeight: 500,
    fontSize: 15,
    color: Colors.GrayColor,
    marginBottom: 16,
    fontFamily: "Inter_400Regular",
  },
  iconButton: {
    padding: 4,
  },
  blocks: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  block: {
    alignItems: "flex-start",
  },
  label: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 8,
    fontFamily: "Inter_400Regular",
  },
  value: {
    fontWeight: 500,
    fontSize: 16,
    color: Colors.GrayColor,
    lineHeight: 16,
    fontFamily: "Inter_400Regular",
  },
});

export default PopularCardDetail;
