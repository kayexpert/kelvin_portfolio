'use client'

import page_bg from '@/public/assets/images/page_bg.jpg'
import page_bg_2 from '@/public/assets/images/page_bg_2.jpg'
import { Box } from '@radix-ui/themes'
import { useConfigStore } from '@/zustand/store'

export default function BackgroundImg() {
    const { appTheme } = useConfigStore()
    
    return (
        <Box position={'fixed'} top={'0'} left={'0'} right={'0'} bottom={'0'} style={{ backgroundImage: `url(${appTheme=='dark'?page_bg.src:page_bg_2.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', overflowY:'auto', zIndex:-1 }}>
        </Box>
    )
}