import { viewPadding, isAndroid } from '../components/Todo';

export default {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        padding: viewPadding,
        paddingTop: 20
      },
      list: {
        width: "100%"
      },
      listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
      },
      hr: {
        height: 1,
        backgroundColor: "gray"
      },
      listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderWidth: isAndroid ? 0 : 1,
        width: "100%"
      }
}