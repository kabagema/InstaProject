import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    marginHorizontal: 10

  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius:  50,
    borderColor: 'white'
  },
  messageButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    // marginHorizontal: 5,
    // borderRadius:  25,
  },
  textInput: {
    height: "100%",
    color: 'white',
    fontSize: 16
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius:  50,
    height: 50,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  postedTime : {
    marginLeft: 10,
    color: "#808080",
    fontWeight: "500",
    fontSize: 16,

  }
});

export default styles;
