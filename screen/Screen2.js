import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Ca nau lau mi mini',
    shop: 'shoppe',
    image: require('../assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: 'Xe can cau da nang',
    shop: 'the gioi do choi',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '3',
    title: 'Xe can cau da nang',
    shop: 'the gioi do choi',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '4',
    title: 'Xe can cau da nang',
    shop: 'the gioi do choi',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Xe can cau da nang',
    shop: 'the gioi do choi',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
  },
];



const Item = ({ title,  shop, image }) => {
  return (
    <View style={{borderWidth:1, height:180, width:180, borderRadius:10}}>
     <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
     <Image source={image}
           style={{height:85, width:155}}
         ></Image>
         <View style={{flexDirection:'column'}}>
      <Text>{title}</Text>
         <Text>{shop}</Text>
         </View>
         </View>
    </View>
  );
};
export default function Screen2() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA} // Sử dụng mảng dữ liệu DATA
        renderItem={({ item }) => <Item title={item.title}
                                         shop={item.shop}
                                         image={item.image}
                                         />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
