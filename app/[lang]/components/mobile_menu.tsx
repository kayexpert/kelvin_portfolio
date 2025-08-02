'use client'

import { Button, Text, DropdownMenu, Box } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { createNavigation } from "next-intl/navigation";
// import { useRouter } from "next/router";
// import { useRouter } from 'next/navigation';
import { FaBars } from "react-icons/fa";

import { locales } from '@/messages/config';
const { useRouter, usePathname } = createNavigation({ locales });
        

export default function MobileMenu({ placement }: any) {
       
    const t = useTranslations()
    const router = useRouter()
   
    return (<>
    <Box display={{initial:'block', lg:'none'}}>
    <DropdownMenu.Root >
                <DropdownMenu.Trigger>
                <Button color={'gray'} size={'2'} highContrast><FaBars /> </Button>
                </DropdownMenu.Trigger>
                
                <DropdownMenu.Content style={{maxWidth:'200px'}}>
                    
                        <DropdownMenu.Item onClick={()=>{router.push('/'); }}>{t('about')}</DropdownMenu.Item>
                        <DropdownMenu.Item onClick={()=>{router.push('/resume'); }}>{t('resume')}</DropdownMenu.Item>
                        <DropdownMenu.Item onClick={()=>{router.push('/portfolio'); }}>{t('portfolio')}</DropdownMenu.Item>
                        <DropdownMenu.Item onClick={()=>{router.push('/moonshots'); }}>{t('moonshots')}</DropdownMenu.Item>
                        <DropdownMenu.Item onClick={()=>{router.push('/contact'); }}>{t('contact')}</DropdownMenu.Item>
                </DropdownMenu.Content>
                </DropdownMenu.Root>
    </Box>
      </>)
}