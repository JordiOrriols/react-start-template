/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import React from 'react';

export default {
    component: Button,
    title: 'Button'
};

export const Text = (): React.ReactElement => (
    <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = (): React.ReactElement => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
