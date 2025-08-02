
import { Box, Card, Separator, Flex, Heading, Text, Grid, IconButton } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import { CiServer } from 'react-icons/ci'
import { FaAppStoreIos, FaFigma } from 'react-icons/fa'
import { MdOutlineDeveloperBoard, MdWeb } from 'react-icons/md'
import { SiAdobephotoshop, SiOpenapiinitiative } from 'react-icons/si'
import { PiWebhooksLogoFill } from "react-icons/pi"
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'

const services = [
  {
    title: 'services.frontend',
    description: 'services.frontend_description',
    icon: <MdWeb size={30} />
  },
  {
    title: 'services.backend',
    description: 'services.backend_description',
    icon: <CiServer size={30} />
  },
  {
    title: 'services.mobile',
    description: 'services.mobile_description',
    icon: <FaAppStoreIos size={30} />
  },
  {
    title: 'services.ai',
    description: 'services.ai_description',
    icon: <SiOpenapiinitiative size={30} />
  },
  {
    title: 'services.uiux',
    description: 'services.uiux_description',
    icon: <FaFigma size={30} />
  }
]

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const t = await getTranslations('index_page')
  return {
  title: `${t('meta_title')}`,
  description: t('site_description'),
  icons: ['favicon.ico'],
  keywords: ['Kelvin Obodai'],
  openGraph: {
    type: 'website',
    title: `${t('meta_title')}`,
    description: t('site_description'),
    url: `${process.env.SERVER_URL}/contact`,
    images: ['favicon.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: `${t('meta_title')}`,
    description: t('site_description'),
    images: ['favicon.png'],
    site: `${process.env.SERVER_URL}`,
    creator: ''
  },
  metadataBase: new URL(`${process.env.SERVER_URL}`), 
}
}


export default async function Index() {
  const t = await getTranslations('index_page')
  return (
    <>
      <Flex  mb={'5'} gap={'5'} align={'center'}>
      <Heading style={{ viewTransitionName: `page_title`, whiteSpace: 'nowrap' }}>{t('about')}</Heading>
      <Separator size={'4'} />
      </Flex >
      <Flex direction={'column'} gap={'5'}>
        <Text color={'gray'}>{t('who_i_am')}</Text>
        <Text my={'3'} size={'6'} weight={'bold'}>{t('what_i_do')}</Text>
        <Grid columns={{initial:'1', sm:'2'}} gap={'5'}>
          {services.map((service, index) => (
            <Card key={index} size={'3'}>
              <Flex direction={'column'} gap={'2'}>
                <Flex flexShrink={'0'} gap={'5'} align={'center'}>
                  {service.icon}
                  <Text size={'4'}>{t(service.title)}</Text>
                </Flex>
                <Flex flexGrow={'1'}>
                  <Text size={'2'} color={'gray'}>{t(service.description)}</Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Grid>
        <Text my={'3'} size={'6'} weight={'bold'}>{t('my_motivation')}</Text>
        <Text color={'gray'}>{t('motivation_words')}</Text>
      </Flex >
    </>
  )
}
