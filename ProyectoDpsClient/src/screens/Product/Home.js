import React from 'react'
import { ScrollView } from 'react-native';
import StatusBarCustom from '../../components/StatusBarCustom';
import colors from "../../styles/colors";
import Search from "../../components/Search";
import Banners from '../../components/Home/Banners';
import NewProducts from '../../components/Home/NewProducts';

export default function Home() {
    return (
        <>
            <StatusBarCustom backgroundColor={colors.bgDark} barStyle="light-content" />
            <Search />
            <ScrollView>
                {<Banners />}
                {<NewProducts />}
            </ScrollView>
        </>
    )
}