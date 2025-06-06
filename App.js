import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer'; //file for size of image from component directory
import Button from './components/Button';

import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';

import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
	const [showAppOptions, setShowAppOptions] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [pickedEmoji, setPickedEmoji] = useState(null);

	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const onSaveImageAsync = async () => {
		};

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({ //receives an object(ImagePickerOptios object) in which different options are specified.
		allowsEditing: true, //the user can crop the image during the selection process on Android and IOS
		quality: 1,
		});
		
		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
		  alert('You did not select any image.');
		  }
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer placeholderImageSource={PlaceholderImage}
				selectedImage={selectedImage} />
				{pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
			</View>
				{showAppOptions ? (
				  <View style={styles.optionsContainer}>
				    <View style={styles.optionsRow}>
					   <IconButton icon="refresh" label="Reset" onPress={onReset}/>
					   <CircleButton onPress={onAddSticker}/> 
					   <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
					</View>
				  
			</View >
			
			) : (
			<View style={styles.foorterContainer}>
				<Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
				<Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
			</View> //when the value of showAppOption is true, let's render an empty <view> component.
			)}

			<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
				<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
			</EmojiPicker> 
			
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
	},

	imageContainer: {
		flex: 1,
		paddingTop: 58, //vertical location of the image from the top -> 58 pixel from the top
	},

	foorterContainer: {
		flex: 1/3,
		alignItems: 'center',
	},
	
	optionsRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	optionsContainer: {
		position: 'absolute',
		bottom: 80,
	},
});
