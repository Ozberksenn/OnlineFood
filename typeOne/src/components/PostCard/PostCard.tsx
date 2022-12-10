import { View, Text, Image } from "react-native";
import React, { FC, useEffect } from "react";
import styles from "./PostCard.style";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
export interface postCardProps {
  data: any;
}
const PostCard: FC<postCardProps> = ({ data }) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <View style={styles.profileContent}>
        <Image
          style={styles.profileImage}
          source={{
            uri: data.Users.profilePhoto,
          }}
        />
        <View style={styles.dateAndNameContainer}>
          <Text style={styles.profileName}>
            {data.Users.name} {data.Users.last_name}
          </Text>
          <Text style={{ right: 10 }}>
            {moment.utc(data.createdAt).startOf("hour").fromNow()}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: data.post_image,
          }}
        />
        <View style={styles.postCommentContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.profileNameText}>{data.Users.name} :</Text>
            <Text numberOfLines={1} style={styles.profileComment}>
              {data.comment}
            </Text>
          </View>
          <View style={{ right: 10 }}>
            <AntDesign name="hearto" size={22} color="green" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
