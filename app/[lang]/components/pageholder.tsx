import { Flex, Text, Container, Card, IconButton, Badge, Separator } from '@radix-ui/themes'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsEnvelopePaper } from 'react-icons/bs'
import { BiLogoLinkedin, BiLogoGithub, BiLogoGitlab } from "react-icons/bi"
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { Col, Row } from './gui'
import Translator from './translator'
import MobileMenu from './mobile_menu'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import kelvin_obodai from '@/public/assets/images/kelvin.png'
import ThemeButton from './theme_button'
import { getTranslations } from 'next-intl/server'
import BackgroundImg from './background_img'
import Navbar from './navbar'

export default async function PageHolder({ children }: any) {
    const t = await getTranslations()   
    

    return (
    <>
        <BackgroundImg/>
        <Container maxWidth={'1520px'} py={'5'} px={'5'}>

            <Flex width={'100%'} >
                <Flex flexGrow={'1'}></Flex>
                <Flex flexShrink={'0'} gap={'5'}>
                    <Translator />
                    <ThemeButton />
                    <MobileMenu display={{ initial: 'flex', lg: 'none' }} />
                </Flex>
            </Flex>

            <Row columns={'12'} gap={{ initial: '5', lg: '8' }} pt={'9'} width={'100%'}>
                <Col span={{ initial: '12', xs:'12', sm:'12', md:'3', lg: '3', xl:'3' }} width={'100%'}>
                    <Flex direction={'column'} position={'sticky'} top={'5'}>
                        <Flex direction={'column'} justify={'center'} align={'center'} style={{marginBottom:-80}}>
                        <Image src={kelvin_obodai.src} alt={'Kelvin Obodai'} width={100} height={100} style={{width:'60%', height:'auto', maxWidth:'160px', borderRadius:'20px', zIndex:10}} />
                        </Flex>
                        <Card size={'3'} style={{overflow:'unset', contain:'layout', paddingTop:100}}>
                            <Flex direction={'column'} justify={'center'} align={'center'} gap={'6'}>
                                <Text size={'6'} >Kelvin Obodai</Text>
                                <Flex justify={'center'}><Badge size={'2'}>{t('customer_support_specialist')}</Badge></Flex>
                                <Flex gap={{initial:'2', xs:'3', sm:'3', md:'2', lg:'4'}} justify={'center'}>
                                <Link href={'https://www.linkedin.com/in/kelvin-obodia-801b6a24b/'}>
                                    <IconButton highContrast><BiLogoLinkedin/></IconButton>
                                </Link>
                                <Link href={'https://github.com/kayexpert'}>
                                    <IconButton highContrast><BiLogoGithub/></IconButton>
                                </Link>
                                {/* <Link href={'https://gitlab.com/larteydavid59'}>
                                    <IconButton highContrast><BiLogoGitlab/></IconButton>
                                </Link> */}
                                </Flex>
                                <Card size={'3'} style={{width:'100%'}}>
                                    <Flex direction={'column'} gap={'2'}>
                                        <Link href={'tel:+233241844442'} >
                                            <Flex gap={'2'} align={'center'}>
                                                <Flex flexShrink={'0'}>
                                                    <Card size={'1'} >
                                                        <IconButton highContrast><IoPhonePortraitOutline /></IconButton>
                                                    </Card>
                                                </Flex>
                                                <Flex flexGrow={'1'} direction={'column'}>
                                                    <Text size={'1'} color={'gray'}>{t('phone')}</Text>
                                                    <Text size={'1'}>+233550400129</Text>
                                                </Flex>
                                            </Flex>
                                        </Link>
                                        <Separator size={'4'} />
                                        <Link href={'mailto:obodainiikelvin@gmail.com'} >
                                            <Flex gap={'2'} align={'center'}>
                                                <Flex flexShrink={'0'}>
                                                    <Card size={'1'}>
                                                    <IconButton highContrast><BsEnvelopePaper /></IconButton>
                                                    </Card>
                                                </Flex>
                                                <Flex flexGrow={'1'} direction={'column'}>
                                                <Text size={'1'} color={'gray'}>{t('email')}</Text>
                                                <Text size={'1'}>obodainiikelvin@gmail.com</Text>
                                            </Flex>
                                            </Flex>
                                        </Link>
                                        <Separator size={'4'} />
                                        <Link href={'https://maps.app.goo.gl/CshMyW6eaZ5uZFm57'} >
                                            <Flex gap={'2'} align={'center'}>
                                                <Flex flexShrink={'0'}>
                                                    <Card size={'1'}>
                                                        <IconButton highContrast><FaMapMarkerAlt /></IconButton>
                                                    </Card>
                                                </Flex>
                                                <Flex flexGrow={'1'} direction={'column'}>
                                                <Text size={'1'} color={'gray'}>{t('location')}</Text>
                                                <Text size={'1'}>Accra, Ghana</Text>
                                            </Flex>
                                            </Flex>
                                        </Link>
                                    </Flex>

                                </Card>
                                {/* <Button colorScheme={'blue'} variant={'outline'} >Download CV</Button> */}
                            </Flex>
                        </Card>
                    </Flex>
                </Col>
                <Col span={{ initial: '12', xs:'12', sm:'12', md:'9', lg: '9', xl:'9' }}>
                    <Flex direction={'column'} width={'100%'}>
                        <Flex width={'100%'} gap={'8'} align={'start'} direction={{ initial: 'column', lg: 'row' }}>
                            <Flex flexGrow={'1'} >
                                <Card size={{ initial: '2', lg: '5' }} style={{width:'100%'}}>
                                    <Flex direction={'column'} p={'2'} gap={{initial:'5', md:'5'}}>
                                        {children}
                                        <Separator size={'4'} />
                                        <Text>© {new Date().getFullYear()} {t('rights_reserved')}</Text>
                                    </Flex>
                                </Card>
                            </Flex>
                            <Flex flexShrink={'0'} position={'sticky'} top={'5'} display={{ initial: 'none', lg: 'flex' }}>
                                <Navbar/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Container>
    </>
    )
}