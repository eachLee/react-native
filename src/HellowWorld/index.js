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
import React from 'react';
import Bananas from '../components/Image'
const links = [
  {
    id: 1,
    title: 'Hello World',
    link: 'https://www.baidu.com',
    description: 'Hello Everyone.',
  },
  {
    id: 2,
    title: 'Style',
    link: 'https://facebook.github.io/react-native/docs/style',
    description:
      'Covers how to use the prop named style which controls the visuals.',
  },
];

const MyLink = (): Node => (
  <View style={styles.container}>
    {links.map(({ id, title, link, description }) => {
      return (
        <React.Fragment key={id}>
          <View style={styles.separator} />
          <Text>北京欢迎你</Text>
          <Bananas />
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
    color: '#ffff00',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  separator: {
    backgroundColor: '#ffffff',
    height: 1,
  },
});

export default MyLink;
