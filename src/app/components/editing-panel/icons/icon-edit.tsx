'use client';

import React from 'react';

function IconEdit({size}: {size: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 14 14" className={`w-${size} pb-[2px] aspect-square`}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M6.704 1.627H4.523c-1.794 0-2.919 1.27-2.919 3.068v4.85c0 1.797 1.12 3.067 2.919 3.067H9.67c1.8 0 2.92-1.27 2.92-3.068v-2.35"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M5.15 6.37l4.36-4.359a1.391 1.391 0 011.966 0l.71.71a1.39 1.39 0 010 1.967l-4.38 4.38c-.238.237-.56.37-.896.37H4.725l.054-2.204c.009-.324.141-.634.37-.864z"
                  clipRule="evenodd"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M8.847 2.685l2.663 2.663"></path>
        </svg>
    );
}

export default IconEdit;