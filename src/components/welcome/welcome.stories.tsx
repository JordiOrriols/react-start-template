/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { Welcome } from '@storybook/react/demo';
import React from 'react';

export default {
    component: Welcome,
    title: 'Welcome'
};

export const ToStorybook = (): React.ReactElement => <Welcome />;

ToStorybook.story = {
    name: 'to Storybook'
};
