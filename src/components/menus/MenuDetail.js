import React from 'react';

const MenuDetail = ({match}) => (
    <div>
        <h3>Menu Id: {match.params.id}</h3>
    </div>
);

export default MenuDetail;
