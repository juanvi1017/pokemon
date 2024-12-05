import React from "react";
import PropTypes from 'prop-types';

import { Backdrop } from "@mui/material";

export default function Loading({ open = false }) {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 100 }}
            open={open}
            className='css-backdrop'
        >
            <span className="loader" />
        </Backdrop>

    );
}

Loading.propTypes = {
    open: PropTypes.bool
};