//SCREEN MAIN
import Component from '../Component'

export default class ScreenMain extends Component {
  constructor(props){
    super(props);
    this.state = {isValue: false}
  }

  functionCall = (value) => this.setState({ isValue: value })

  render () {
    const isMap = this.state.isMap
    return (
      <Component getfunctionCall={this.functionCall} />
    );
  }
}

/*
------------------------------------------------------------
SCREEN COMPONENT
------------------------------------------------------------
*/

export default class Component extends Component {

  render() {
    return (
      <View style={styles.contentSkip}>
        <TouchableOpacity onPress={() => { this.props.getfunctionCall(true) }} style={styles.btnSkip}>
          <Text style={styles.txtSkip}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
