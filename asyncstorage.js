//EXAMPLE OF USE AsyncStorage

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {isValue: false}
  }

  componentDidMount () {
    this.asyncPages();
  }

  savePages = async () => {
    try {
      await AsyncStorage.setItem('@Identification:dataId', 'true')
    } catch (error) { // log the error
    }
  }

  asyncPages = async () => {
    try {
      //await AsyncStorage.removeItem('@LocFacil:dataIntroduction');

      let value = await AsyncStorage.getItem('@Identification:dataId')
      const parsed = JSON.parse(value);
      if (parsed === null) {
        this.savePages();
      } else {
        this.setState({ isValue: true });
      }
    } catch (error) {
      this.setState({ isValue: false });
      this.savePages();
    }
  }

  render () {
    const isValue = this.state.isValue
    return (
      
      <View>
        { isValue ? <Component1 /> : <Component2 /> }
      </View>
    );
  }
}
