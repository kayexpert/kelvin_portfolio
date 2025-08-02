'use client'

import { Flex, Card, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { BiUser, BiFile } from "react-icons/bi"
import { IoBriefcaseOutline } from "react-icons/io5"
import { PiRocketLight } from "react-icons/pi"
import {usePathname} from '@/i18n/navigation'
import { Link } from "next-view-transitions"

export default function Navbar() {
    const t = useTranslations()
    const pathname  = usePathname()
    return (
        <Card size={'2'} >
        <Flex direction={'column'} gap={'5'}>
        <Link href={'/'}>
            <Card style={{background:pathname === '/' ? 'teal' : undefined}}>
                <Flex direction={'column'} justify={'center'} align={'center'} gap={'1'} py={'1'}>
                    <BiUser size={25}/>
                    <Text size={'2'} align={'center'}>{t('about')}</Text>
                </Flex>
            </Card>
            </Link>
            <Link href={'/resume'}>
            <Card style={{background:pathname === '/resume' ? 'teal' : undefined}}>
                <Flex direction={'column'} justify={'center'} align={'center'} gap={'1'} py={'1'}>
                    <BiFile size={25}/>
                    <Text size={'2'} align={'center'}>{t('resume')}</Text>
                </Flex>
            </Card>
            </Link>
            <Link href={'/portfolio'}>
            <Card style={{background:pathname.startsWith('/portfolio') ? 'teal' : undefined}}>
                <Flex direction={'column'} justify={'center'} align={'center'} gap={'1'} py={'1'}>
                    <IoBriefcaseOutline size={25}/>
                    <Text size={'2'} align={'center'}>{t('portfolio')}</Text>
                </Flex>
            </Card>
            </Link>
            <Link href={'/moonshots'}>
            <Card style={{background:pathname.startsWith('/moonshots') ? 'teal' : undefined}}>
                <Flex direction={'column'} justify={'center'} align={'center'} gap={'1'} py={'1'}>
                    <PiRocketLight size={25}/>
                    <Text size={'2'} align={'center'}>{t('moonshots')}</Text>
                </Flex>
            </Card>
            </Link>
        </Flex>
    </Card>
    )
}