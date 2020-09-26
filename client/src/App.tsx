import React, {useState} from 'react';
import ThemeWrapper, {themes} from "./hooks/useTheme";

import './App.less'

function App() {
    const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes>('colorful');

    return (
        <>
            <section className='inputs'>
                <input type='button' value='B&W' onClick={() => setSelectedTheme('blackAndWhite')} />
                <input type='button' value='Color' onClick={() => setSelectedTheme('colorful')} />
            </section>


            <ThemeWrapper name={selectedTheme}>
                <div className="app">
                    Application uses theme. Has a default, then 1.5secs later it updates (simulates server fetch).
                    Also uses precompiled .less variables like this Arial font-family.
                    <div className="bigbox">
                        My .less file overrides the variables set in my parent
                        <div className="littlebox" style={{color: 'black', backgroundColor: 'white'}}>
                            My color values were overridden inline with a style tag
                        </div>
                        <div className="hoverdemo">
                            Hover over me! Pseudoclass defined at runtime!
                        </div>
                    </div>
                </div>
            </ThemeWrapper>
        </>

    );
}

export default App;
