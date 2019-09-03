import React from "react";
import { View } from "react-360";
import { Title, Menu, Zens } from "./components";

const HomeEnvironment = () => (
    <View>
        <Menu>
            <Title>Let's have a tour</Title>
            <Zens />
        </Menu>
    </View>
);

export default HomeEnvironment;