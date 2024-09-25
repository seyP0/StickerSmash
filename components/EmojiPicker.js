import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// EmojiPicker allows users to choose emojis for the image from a list of available emoji
export default function EmojiPicker({ isVisible, children, onClose }) { {/* isVisible: boolean to determin whether modal is visible or not
                                                                            onClose: function that closes modal
                                                                            children: used to display a list of emoji */}
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}> {/* Modal does display title and a close button
                                                                            visible takes the value of isVisible and controls if the modal is open or closed
                                                                            transparent: determines whether the modal fills the entire view
                                                                            animationType: determines how it enters and leaves the screen. Sliding from bottom of screen in this case. */}
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

