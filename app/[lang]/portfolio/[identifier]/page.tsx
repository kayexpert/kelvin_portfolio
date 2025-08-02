import { Heading, Text, Flex, Box, Button, Card } from '@radix-ui/themes'
import { getTranslations } from 'next-intl/server'
import Head from 'next/head'
import { FaChevronLeft } from 'react-icons/fa'
import { Metadata } from 'next'
import { Link } from 'next-view-transitions'

const get_portfolio = async (identifier:string) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/portfolio/${identifier}`)
  return await res?.json() || {}
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const {identifier} = await params
  const portfolio = await get_portfolio(identifier)

  const {title, project_scope, thumbnail} = portfolio || {}

  return {
    title: `Kelvin Obodai | ${title?.substring(0, 55)}`,
    description: project_scope?.substring(0, 155),
    keywords: `${title} Kelvin Obodai portfolio`,
    icons:['/assets/images/favicon.ico'],

    openGraph: {
      type: 'website',
      title: title?.substring(0, 55),
      images:[thumbnail, '/assets/images/favicon.ico'],
      description: project_scope?.substring(0, 155),
      url: `${process.env.SERVER_URL}/portfolio/${identifier}`,
    },

    twitter: {
      card: 'summary_large_image',
      site: '@godfrednowusu',
      title: title?.substring(0, 55),
      description: project_scope?.substring(0, 155),
      images:[thumbnail, '/assets/images/favicon.ico'],
      creator: '@godfrednowusu',
    },

    other: {
      // article: {
      //   published_time: release_date,
      // },
    },
}
}

export default async function PortfolioDetail({ params }: any) {
  const {identifier} = await params;
  const t = await getTranslations('portfolio_page')
  const proj_t = await getTranslations('projects')
  const portfolio = await get_portfolio(identifier)


  const { title, company, scope, requirement, deliverables, timeline, stack } = portfolio


  return (
    <>
      <Flex><Link href={'/portfolio'}><Button  highContrast><FaChevronLeft /> {t('back_to_portfolio')}</Button></Link></Flex>
      <Flex  mt={'5'} mb={'5'} gap={'5'} align={'center'}>
      <Card style={{height:'100px', width:'100px'}} />
        <Flex direction={'column'}>
          <Heading style={{ viewTransitionName: `portfolio_${identifier}_title` }}>{proj_t(`${identifier}.title`)}</Heading>
          <Text style={{ viewTransitionName: `portfolio_${identifier}_company` }}>{proj_t(`${identifier}.company`)}</Text>
        </Flex >
        {/* <Separator size={'4'}  /> */}
      </Flex >
      <Flex direction={'column'} gap={'5'} style={{ viewTransitionName: `portfolio_${identifier}_scope` }}>
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('scope_title')}</Text>
          <Text >{proj_t(`${identifier}.scope`)}</Text>
        </Flex >
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('requirement_title')}</Text>
          <Text >{proj_t(`${identifier}.requirement`)}</Text>
        </Flex >
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('deliverables_title')}</Text>
          <Text>{proj_t(`${identifier}.deliverables`)}</Text>
        </Flex >
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('timeline_title')}</Text>
          <Text>{proj_t(`${identifier}.timeline`)}</Text>
        </Flex >
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('stack_title')}</Text>
          <Text>{proj_t(`${identifier}.stack`)}</Text>
        </Flex >
      </Flex >
    </>
  )
}
