'use client'

import { Button,  DropdownMenu,  Text } from '@radix-ui/themes';
import { createNavigation } from 'next-intl/navigation';
import { useTranslations } from "next-intl";
import {useLocale} from 'next-intl';
import { BsTranslate } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';


import { locales } from '@/messages/config';
const { useRouter, usePathname } = createNavigation({ locales });

export default function Translator({ placement, ...rest }: any) {
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale();


    return (<>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <Button color={'gray'} size={'2'} {...rest} align={'center'} highContrast><BsTranslate /> <Text style={{textTransform:'uppercase'}}>{locale}</Text></Button>
            </DropdownMenu.Trigger>
            
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'en' }) }}>English {locale=='en'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'fr' }) }}>Français {locale=='fr'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'de' }) }}>Deutsch {locale=='de'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'zh' }) }}>中国人 {locale=='zh'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'hi' }) }}>हिंदी {locale=='hi'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'es' }) }}>Español {locale=='es'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'ar' }) }}>عربى {locale=='ar'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'ru' }) }}>Pусский {locale=='ru'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => { router.replace(pathname, { locale: 'pt' }) }}>Português {locale=='pt'&&<FaCheck style={{marginLeft:'5px'}} />}</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </>)
}