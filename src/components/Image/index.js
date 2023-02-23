import { forwardRef } from 'react';
/* eslint-disable jsx-a11y/alt-text */
function Image({ ...props }, ref) {
    return <img {...props} ref={ref} />;
}

export default forwardRef(Image);
