import React from "react";
import PropTypes from "prop-types";
import {Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import CameraView from "../CameraView/CameraView";


const myModal = props => {
    const { isVisible, closeModal } = props;
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                closeModal();
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>

                        <CameraView/>

                    </View>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({

});


myModal.propTypes = {
    isVisible: PropTypes.bool,
    closeModal: PropTypes.func
};

export default myModal;