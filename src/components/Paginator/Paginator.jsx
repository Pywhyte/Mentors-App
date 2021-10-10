import React from 'react';
import { getPagesArray } from '../../utils/Pages';

const Paginator = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
                
            </div>
    );
};

export default Paginator;