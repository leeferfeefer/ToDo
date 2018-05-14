import React from "react";
import PropTypes from "prop-types";
import {Text, View} from "react-native";
import Camera from "react-native-camera/src/Camera";

const cameraView = props => {
    return (
        <View>
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                aspect={Camera.constants.Aspect.fill}>
                <Text onPress={takePicture()}>
                    [CAPTURE]
                </Text>
            </Camera>
        </View>
    )
};

takePicture = () => {
    // cameraView.camera.capture()
    //     .then((data) => console.log(data))
    //     .catch(err => console.error(err));
};

export default cameraView;


