'use client';
import { Div } from '@jumbo/shared';
import dynamic from 'next/dynamic';

import { IVectorMap } from '@react-jvectormap/core/dist/types';
import { worldMill } from '@react-jvectormap/world';
import React from 'react';
import { countriesMarkers } from '../../data';

const VectorMap = dynamic(
  // @ts-ignore
  () => import('@react-jvectormap/core').then((m) => m.VectorMap),
  { ssr: false }
);

const vectorRef = React.createRef<IVectorMap | null>();

// TODO: fix the self is not defined error
const VisitorsOnMap = () => {
  return (
    <Div
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '200px',
        overflow: 'hidden',

        '& .jvectormap-container': {
          height: '100%',
          width: '100%',
        },
        m: 3,
      }}
    >
      <VectorMap
        backgroundColor={'common.white'}
        map={worldMill}
        regionStyle={{
          initial: {
            fill: '#DEE4E8',
          },
        }}
        markerStyle={{
          initial: {
            fill: '#FFC542',
            stroke: 'rgba(50, 88, 239, 0.2)',
          },
        }}
        zoomOnScroll={false}
        markers={countriesMarkers}
      />
    </Div>
  );
};

export { VisitorsOnMap };
