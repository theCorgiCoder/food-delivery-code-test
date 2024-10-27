import React from "react";
import { View, ViewStyle, TouchableOpacity } from "react-native";
import { styles } from "./RestaurantCard.styles";
import CustomText from "../customText/CustomText";
import Rating from "../rating/Rating";
import StarIcon from "@/assets/images/starIcon.svg";
import Clock from "../clock/Clock";
import CustomImage from "../customImage/CustomImage";
import { RestaurantModel } from "@/types/types";
import { findFilters } from "@/constants/filters";

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
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleOnPress} style={styles.pressable}>
        <CustomImage image={data.image_url} style={styles.imageCorners} />
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
            {data.filterIds?.map((filterId, index) => {
              const filter = Object.values(findFilters).find(
                (f) => f.id === filterId
              );

              if (!filter) return null;

              // Check if it's the last item
              const isLast = index === data.filterIds.length - 1;

              return (
                filter && (
                  <CustomText
                    key={filter.id}
                    title="subtitle"
                    content={filter.name + (!isLast ? " • " : "")}
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
