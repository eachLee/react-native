import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Platform } from 'react-native';
const instructions = Platform.select({
	ios: '苹果手机才会显示我',
	android:
		'安卓手机才会显示我',
});
export default class Order extends Component {
	render() {
		return (
			<ScrollView style={styles.orderPage}>
				<Text style={{ fontSize: 40 }}>路由方法</Text>
				<Text>{instructions}</Text>
				<Button
					title="跳转到主菜单"
					onPress={() => this.props.navigation.navigate('my')}
				/>
				<View style={{ marginBottom: 10 }}></View>
				<Button
					title="打开子页面"
					onPress={() => this.props.navigation.push('button', {
						itemId: 86,
						otherParam: '你想要的任何东西',
					})}
				/>
				<View style={{ marginBottom: 10 }}></View>
				<Button
					title="返回上一页"
					onPress={() => this.props.navigation.goBack()}
				/>
				<View style={{ marginBottom: 10 }}></View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	orderPage: {
		backgroundColor: '#f5f5f5',
	},
});