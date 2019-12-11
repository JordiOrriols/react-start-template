/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import React from 'react';

export default {
    component: Welcome,
    title: 'Welcome'
};

export const ToStorybook = (): React.ReactElement => (
    <Welcome showApp={linkTo('Button')} />
);

ToStorybook.story = {
    name: 'to Storybook'
};
