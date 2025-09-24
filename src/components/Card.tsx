import React from "react";
import {
  ImageBackground,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";

interface CardProps extends PressableProps {
  title: string;
  posterUrl: string;
  rating: number;
  width?: number;
  height?: number;
  className?: string; // for NativeWind support if desired
  containerStyle?: ViewStyle;
}

const Card: React.FC<CardProps> = ({
  title,
  posterUrl,
  rating,
  width = 140,
  height = 210,
  className,
  containerStyle,
  style,
  ...rest
}) => {
  // base styles we always want to apply (width/height + containerStyle)
  const baseStyles: StyleProp<ViewStyle> = [{ width, height }, containerStyle];

  let finalStyle:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);

  if (typeof style === "function") {
    finalStyle = (state: PressableStateCallbackType) => [
      baseStyles,
      (style as (s: PressableStateCallbackType) => StyleProp<ViewStyle>)(state),
    ];
  } else {
    finalStyle = [baseStyles, style] as StyleProp<ViewStyle>;
  }

  return (
    <Pressable
      style={finalStyle}
      {...rest}
      // keep nativewind `className` available for consumers
      // @ts-ignore - some consumers pass className via props when using nativewind
      className={
        className || "mr-3 rounded-xl overflow-hidden bg-zinc-900 shadow-lg"
      }
    >
      <ImageBackground
        source={{ uri: posterUrl }}
        // Use Tailwind classes for layout; imageStyle keeps rounded corners
        // @ts-ignore - nativewind will translate className on ImageBackground
        className="flex-1 justify-between"
        imageStyle={{ borderRadius: 12 }}
      >
        <View
          // @ts-ignore - NativeWind className
          className="self-end m-2 bg-black/60 px-2 h-7 rounded-full justify-center items-center"
        >
          <Text // @ts-ignore nativewind not needed on Text styles but keep default
          >
            {rating.toFixed(1)}
          </Text>
        </View>

        <View // @ts-ignore
          className="w-full bg-black/50 px-2 py-2"
        >
          <Text
            numberOfLines={2} // @ts-ignore
            className="text-white font-bold text-base"
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default Card;
