import React, { useState } from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import { API_URL } from '../../utils/constants';
import { size } from 'lodash';

const width = Dimensions.get("window").width;
const heigth = 400;

export default function CarouselImages(props) {
    const { images } = props;
    const [imageActive, setImageActive] = useState(0)

    const renderItem = ({ item }) => {
        return (
            <Image
                style={styles.carousel}
                source={{ uri: `${API_URL}${item.url}` }}
            />
        );
    };

    return (
        <>
            <Carousel
                layout={"default"}
                data={images}
                sliderWidth={width}
                itemWidth={width}
                renderItem={renderItem}
                onSnapToItem={(index) => setImageActive(index)}
            />
            <Pagination
                dotsLength={size(images)}
                activeDotIndex={imageActive}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </>
    );
}

const styles = StyleSheet.create({
    carousel: {
        width,
        height: heigth,
        resizeMode: "contain"
    }
});