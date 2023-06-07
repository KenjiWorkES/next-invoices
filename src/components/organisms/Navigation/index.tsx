import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

const Navigation: FC = () => {
  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        backgroundColor: 'primary.600',
        display: 'flex',
      }}
    >
      <Box
        component="div"
        sx={{
          padding: '1.5rem',
          backgroundColor: 'primary.400',
          borderBottomRightRadius: '1.25rem',
          borderTopRightRadius: '1.25rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'primary.300',
            position: 'absolute',
            left: '0',
            top: '50%',
            borderTopLeftRadius: '1.25rem',
          }}
        ></Box>
        <Box sx={{ zIndex: '1', position: 'relative' }}>
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={28}
            height={26}
          ></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
