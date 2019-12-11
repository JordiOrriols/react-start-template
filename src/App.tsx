/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React from 'react';

import Welcome from './components/welcome/welcome';
import './App.scss';

const App: React.FC = (): React.ReactElement => {
    return (
        <div className="App">
            <Welcome />
        </div>
    );
};

export default App;
