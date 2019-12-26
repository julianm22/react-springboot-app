import React from 'react';

const Container = props => (
    <div style={{width: '1200px', margin: '0 auto', textAlign: 'center', padding: '10px'}}>
        {props.children}
    </div>
);

export default Container;