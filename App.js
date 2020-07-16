/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import type, { Node } from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

const links = [
  {
    id: 1,
    title: 'Hello React-Native',
    link: 'https://www.baidu.com',
    description: 'Hello Everyone.',
  },
  {
    id: 2,
    title: 'App入口页',
    link: 'https://facebook.github.io/react-native/docs/style',
    description:
      'App入口页第一个页面',
  },
];

const MyLink = (): Node => (
  <View style={styles.container}>
    {links.map(({ id, title, link, description }) => {
      return (
        <React.Fragment key={id}>
          <View style={styles.separator} />
          <Text>北京欢迎你</Text>
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: '#ff00ff',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: '#000',
  },
  separator: {
    backgroundColor: '#fff',
    height: 1,
  },
});

export default MyLink;
