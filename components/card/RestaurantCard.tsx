import React from "react";
import { View, ViewStyle, TouchableOpacity } from "react-native";
import { styles } from "./RestaurantCard.styles";
import CustomText from "../customText/CustomText";
import Rating from "../rating/Rating";
import StarIcon from "@/assets/images/starIcon.svg";
import Clock from "../clock/Clock";
import CustomImage from "../customImage/CustomImage";
import usePressState from "@/hooks/usePressState";
import { Colors } from "@/constants/Colors";
import { RestaurantModel } from "@/models/apiTypes";
import { findFilters } from "@/constants/Filters";

interface CardProps {
  data: RestaurantModel;
  handleOnPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

const RestaurantCard: React.FC<CardProps> = ({
  data,
  handleOnPress,
  style,
}) => {
  const { handlePressIn, handlePressOut, backgroundColor } = usePressState(
    Colors.White
  );

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={handleOnPress}
        style={[styles.pressable, { backgroundColor }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <CustomImage image={data.image_url} />
        <View style={styles.contentBox}>
          <View style={styles.title}>
            <CustomText title={"title1"} content={data.name} color={"black"} />
            <Rating
              icon={StarIcon}
              width={15}
              height={15}
              textColor={"black"}
              textStyle={"subtitle"}
              showRating={data.rating}
            />
          </View>

          <View style={styles.tags}>
            {data.filterIds?.map((filterId) => {
              // Find the corresponding filter using the filterId
              const filter = Object.values(findFilters).find(
                (f) => f.id === filterId
              );
              return (
                filter && ( // Only render if filter exists
                  <CustomText
                    key={filter.id}
                    title="subtitle"
                    content={filter.name + " • "}
                    color="gray"
                  />
                )
              );
            })}
          </View>
          <Clock
            textStyle={"footer1"}
            time={data.delivery_time_minutes}
            width={15}
            height={15}
            textColor={"grey"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantCard;
