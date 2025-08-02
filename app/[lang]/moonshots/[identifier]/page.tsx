import { Separator,Heading,  Text,  Box,  Button, Flex, Card } from '@radix-ui/themes'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from 'next-view-transitions'
import { FaChevronLeft } from 'react-icons/fa'

const get_moonshot = async (identifier: any) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/moonshots/${identifier}`)
  return await res.json() || {}
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const {identifier} = await params
  const moonshot = await get_moonshot(identifier) || {}

  const {title, project_scope, thumbnail} = moonshot || {}

  return {
      title: `Kelvin Obodai | ${title?.substring(0, 55)}`,
      description: project_scope?.substring(0, 155),
      keywords: `${title} Kelvin Obodai moonshots`,
      icons:['/assets/images/favicon.ico'],

      openGraph: {
        type: 'website',
        title: title?.substring(0, 55),
        images:[thumbnail, '/assets/images/favicon.ico'],
        description: project_scope?.substring(0, 155),
        url: `${process.env.SERVER_URL}/moonshots/${identifier}`,
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

export default async function MoonshotDetail({ params }: any) {
  const {identifier} = await params;
  const t = await getTranslations('moonshot_page')
  const proj_t = await getTranslations('projects')
  const moonshot = await get_moonshot(identifier) 

  // const { title, company_name, content, project_scope, project_requirement, project_deliverables, project_timeline, project_stack } = moonshot

  return (
    <>
      <Flex><Link href={'/moonshots'}><Button  highContrast><FaChevronLeft /> {t('back_to_moonshots')}</Button></Link></Flex>
      <Flex  mt={'5'} mb={'5'} gap={'5'} align={'center'}>
        <Flex direction={'column'}>
          <Heading style={{ viewTransitionName: `moonshot_${identifier}_title` }}>{proj_t(`${identifier}.title`)}</Heading>
          <Text style={{ viewTransitionName: `moonshot_${identifier}_company_name` }}>{proj_t(`${identifier}.company`)}</Text>
        </Flex >
      </Flex >
      <Flex direction={'column'} gap={'5'} style={{ viewTransitionName: `moonshot_${identifier}_scope` }}>
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('scope_title')}</Text>
          <Text>{proj_t(`${identifier}.scope`)}</Text>
        </Flex >
        <Flex direction={'column'}>
          <Text weight={'bold'}>{t('requirement_title')}</Text>
          <Text>{proj_t(`${identifier}.requirement`)}</Text>
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
