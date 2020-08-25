import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Spinner from "../components/Spinner";
import ListItem from "../components/ListItem";

export default ({navigation}) => {
  const userId = navigation.getParam("userId")
  const username = navigation.getParam("name")
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    setPosts(data.filter(post => post.userId === userId))
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {
        loading ?
          <Spinner size="large"/>
          :
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              data={posts}
              keyExtractor={x => String(x.id)}
              renderItem={({item}) =>
                <ListItem
                  onPress={() => navigation.navigate("Details", {title: item.title, body: item.body, username})}
                  title={item.title}
                />
              }
            />
          </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: "stretch"
  }
})
