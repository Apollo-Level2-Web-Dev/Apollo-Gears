"use client"
import { Button } from '@nextui-org/react';
import React from 'react';

const BannerButton = () => {
    return (
        <div>
            <Button
              onClick={() => console.log("Hello")}
              color="primary"
              radius="sm"
            >
              Book Now
            </Button>
            <Button color="primary" variant="bordered" radius="sm">
              Learn More
            </Button>
        </div>
    );
};

export default BannerButton;