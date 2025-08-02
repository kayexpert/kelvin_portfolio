import { Separator,Heading,  Flex, Box } from '@radix-ui/themes'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import ContactForm from './contact_form'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const t = await getTranslations('contact_page')
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

export default async function Contact() {
  const t = await getTranslations('contact_page')
  
  return (
    <>
      <Flex   gap={'5'} align={'center'}>
        <Heading style={{ viewTransitionName: `page_title`, whiteSpace: 'nowrap' }}>{t('contact')}</Heading>
        <Separator size={'4'}  />
      </Flex >
      <Flex direction={'column'} gap={'5'}>
        <Box   p={'5'} >
         <ContactForm/>
        </Box>
      </Flex >
    </>
  )
}
